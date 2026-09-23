/**
 * ICETRACK — Unified Database & Backend Integration API
 * 
 * This service provides a standardized RESTful and Database Adapter interface for
 * the polar logistics command portal. It is 100% plug-and-play compatible with:
 * 1. Offline & Local Standalone (file:// protocol & memory/localStorage)
 * 2. Node.js / Express backend server (/api/v1)
 * 3. Relational SQL databases (PostgreSQL, Cloud SQL, SQLite, MySQL)
 * 4. Document / NoSQL databases (Firebase Firestore, Supabase, MongoDB)
 */

import { StorageService, AUTHORIZED_OFFICERS, defaultData } from './data.js';

// Configuration Settings
export const API_CONFIG = {
  // Mode: 'auto' (detects if remote server responds), true (enforce remote), or false (local only)
  MODE: 'auto',
  // Remote API Base URL (e.g., '/api/v1' or 'http://localhost:3000/api/v1')
  API_BASE_URL: '/api/v1',
  REQUEST_TIMEOUT: 4000,
  AUTH_TOKEN_KEY: 'icetrack_auth_token',
  HEADERS: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  // Set to true once verified active remote connection
  isRemoteAvailable: false
};

// Check if running directly from local filesystem (file:// protocol)
export function isLocalFileProtocol() {
  try {
    return typeof window !== 'undefined' && window.location.protocol === 'file:';
  } catch {
    return false;
  }
}

/**
 * Generic HTTP Request Dispatcher with automatic local fallback
 */
async function apiRequest(endpoint, method = 'GET', payload = null) {
  // If local file protocol or mode is explicitly false, skip network request entirely
  if (isLocalFileProtocol() || API_CONFIG.MODE === false) {
    return null;
  }

  // If in 'auto' or true mode, attempt network request with timeout
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.REQUEST_TIMEOUT);

    const token = StorageService.getItem(API_CONFIG.AUTH_TOKEN_KEY);
    const headers = { ...API_CONFIG.HEADERS };
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_CONFIG.API_BASE_URL}${endpoint}`, {
      method,
      headers,
      body: payload ? JSON.stringify(payload) : null,
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (response.ok) {
      API_CONFIG.isRemoteAvailable = true;
      return await response.json();
    }
  } catch (err) {
    // Network or CORS error (e.g. offline, server not started) -> fallback to local data
    API_CONFIG.isRemoteAvailable = false;
  }

  return null;
}

/**
 * Authentication & Identity Service (Strictly Locked)
 */
export const AuthAPI = {
  async login(email, password, role = 'manager') {
    const cleanEmail = (email || '').trim().toLowerCase();
    const cleanPass = (password || '').trim();

    const remote = await apiRequest('/auth/login', 'POST', { email: cleanEmail, password: cleanPass, role });
    if (remote && remote.token) {
      StorageService.setItem(API_CONFIG.AUTH_TOKEN_KEY, remote.token);
      return remote.user;
    }

    // Local strict validation
    if (cleanEmail !== 'xyz@gmail.com' || cleanPass !== 'XYZ@2026') {
      throw new Error('Invalid Email or Password. Access Denied: Unauthorized Personnel.');
    }

    const officer = {
      name: 'XYZ',
      email: 'XYZ@gmail.com',
      defaultRole: role || 'manager',
      station: 'Bharati',
      designation: 'Expedition Operations Lead',
      clearance: 'Level 4'
    };

    StorageService.setItem('icetrack_user_email', officer.email);
    StorageService.setItem('icetrack_user_name', officer.name);
    StorageService.setItem('icetrack_user_role', role);

    return officer;
  },

  async getCurrentUser() {
    const remote = await apiRequest('/auth/me');
    if (remote && remote.user) return remote.user;

    const email = StorageService.getItem('icetrack_user_email');
    const name = StorageService.getItem('icetrack_user_name');
    const role = StorageService.getItem('icetrack_user_role') || 'manager';

    if (!email && !name) return null;
    return { email, name, role };
  },

  async logout() {
    await apiRequest('/auth/logout', 'POST');
    StorageService.removeItem(API_CONFIG.AUTH_TOKEN_KEY);
    StorageService.removeItem('icetrack_user_email');
    StorageService.removeItem('icetrack_user_name');
    StorageService.removeItem('icetrack_user_role');
    return true;
  }
};

/**
 * Expeditions Operations API Service
 */
export const ExpeditionsAPI = {
  async getAll() {
    const remote = await apiRequest('/expeditions');
    if (remote && Array.isArray(remote.data)) {
      return remote.data;
    }
    return StorageService.getData('expeditions') || [];
  },

  async getById(id) {
    const list = await this.getAll();
    return list.find(e => String(e.id) === String(id)) || null;
  },

  async create(expeditionData) {
    const remote = await apiRequest('/expeditions', 'POST', expeditionData);
    if (remote && remote.data) {
      return remote.data;
    }

    const list = StorageService.getData('expeditions') || [];
    const newExp = {
      id: expeditionData.id || Date.now(),
      name: expeditionData.name.trim(),
      station: expeditionData.station.trim(),
      start: expeditionData.start,
      end: expeditionData.end,
      ship: expeditionData.ship.trim(),
      priority: expeditionData.priority || 'Normal',
      createdAt: new Date().toISOString()
    };

    list.unshift(newExp);
    StorageService.saveData('expeditions', list);
    return newExp;
  },

  async update(id, updates) {
    const remote = await apiRequest(`/expeditions/${id}`, 'PATCH', updates);
    if (remote && remote.data) {
      return remote.data;
    }

    const list = StorageService.getData('expeditions') || [];
    const index = list.findIndex(e => String(e.id) === String(id));
    if (index === -1) return null;

    list[index] = { ...list[index], ...updates };
    StorageService.saveData('expeditions', list);
    return list[index];
  },

  async delete(id) {
    await apiRequest(`/expeditions/${id}`, 'DELETE');
    let list = StorageService.getData('expeditions') || [];
    list = list.filter(e => String(e.id) !== String(id));
    StorageService.saveData('expeditions', list);
    return true;
  }
};

/**
 * Cargo Logistics API Service
 */
export const CargoAPI = {
  async getAll(filters = {}) {
    const remote = await apiRequest('/cargo');
    let list = (remote && Array.isArray(remote.data)) ? remote.data : (StorageService.getData('cargo') || []);

    if (filters.status && filters.status !== 'all') {
      list = list.filter(item => item.status.toLowerCase() === filters.status.toLowerCase());
    }

    if (filters.search) {
      const q = filters.search.toLowerCase();
      list = list.filter(item =>
        item.id.toLowerCase().includes(q) ||
        item.item.toLowerCase().includes(q) ||
        (item.origin && item.origin.toLowerCase().includes(q)) ||
        (item.destination && item.destination.toLowerCase().includes(q))
      );
    }

    return list;
  },

  async getById(id) {
    const list = await this.getAll();
    return list.find(item => String(item.id).toLowerCase() === String(id).toLowerCase()) || null;
  },

  async create(cargoData) {
    const remote = await apiRequest('/cargo', 'POST', cargoData);
    if (remote && remote.data) return remote.data;

    const list = StorageService.getData('cargo') || [];
    const newCargo = {
      id: cargoData.id || `CGO-${Math.floor(1000 + Math.random() * 9000)}`,
      item: cargoData.item.trim(),
      weight: parseFloat(cargoData.weight || cargoData.weightKg) || 0,
      weightKg: parseFloat(cargoData.weight || cargoData.weightKg) || 0,
      origin: cargoData.origin ? cargoData.origin.trim() : 'Mormugao Port (Goa)',
      destination: cargoData.destination.trim(),
      status: cargoData.status || 'In Transit',
      progress: parseInt(cargoData.progress, 10) || 15,
      priority: cargoData.priority || 'Normal',
      createdAt: new Date().toISOString()
    };

    list.unshift(newCargo);
    StorageService.saveData('cargo', list);
    return newCargo;
  },

  async update(id, updates) {
    const remote = await apiRequest(`/cargo/${id}`, 'PATCH', updates);
    if (remote && remote.data) return remote.data;

    const list = StorageService.getData('cargo') || [];
    const index = list.findIndex(c => String(c.id).toLowerCase() === String(id).toLowerCase());
    if (index === -1) return null;

    list[index] = { ...list[index], ...updates };
    StorageService.saveData('cargo', list);
    return list[index];
  },

  async advanceProgress(id, increment = 15) {
    const list = StorageService.getData('cargo') || [];
    const item = list.find(c => String(c.id).toLowerCase() === String(id).toLowerCase());
    if (!item) return null;

    let newProgress = (item.progress || 0) + increment;
    let newStatus = item.status;

    if (newProgress >= 100) {
      newProgress = 100;
      newStatus = 'Delivered';
    } else if (newProgress >= 50) {
      newStatus = 'In Transit';
    } else if (newProgress >= 15) {
      newStatus = 'Loaded';
    }

    return await this.update(id, { progress: newProgress, status: newStatus });
  },

  async markDelivered(id) {
    return await this.update(id, { progress: 100, status: 'Delivered' });
  },

  async delete(id) {
    await apiRequest(`/cargo/${id}`, 'DELETE');
    let list = StorageService.getData('cargo') || [];
    list = list.filter(item => String(item.id).toLowerCase() !== String(id).toLowerCase());
    StorageService.saveData('cargo', list);
    return true;
  }
};

/**
 * Inventory Stock API Service
 */
export const InventoryAPI = {
  async getAll(filters = {}) {
    const remote = await apiRequest('/inventory');
    let list = (remote && Array.isArray(remote.data)) ? remote.data : (StorageService.getData('inventory') || []);

    if (filters.station && filters.station !== 'all') {
      list = list.filter(item => item.location.toLowerCase() === filters.station.toLowerCase());
    }

    if (filters.risk && filters.risk !== 'all') {
      list = list.filter(item => (item.risk || 'Low').toLowerCase() === filters.risk.toLowerCase());
    }

    if (filters.search) {
      const q = filters.search.toLowerCase();
      list = list.filter(item =>
        item.item.toLowerCase().includes(q) ||
        (item.responsible && item.responsible.toLowerCase().includes(q)) ||
        item.location.toLowerCase().includes(q)
      );
    }

    return list;
  },

  async getById(id) {
    const list = await this.getAll();
    return list.find(item => String(item.id) === String(id)) || null;
  },

  async create(itemData) {
    const remote = await apiRequest('/inventory', 'POST', itemData);
    if (remote && remote.data) return remote.data;

    const list = StorageService.getData('inventory') || [];
    const current = parseFloat(itemData.current) || 0;
    const threshold = parseFloat(itemData.threshold) || 1;

    let risk = 'Low';
    if (current < threshold) risk = 'High';
    else if (current < threshold * 1.5) risk = 'Moderate';

    const newItem = {
      id: itemData.id || Date.now(),
      item: itemData.item.trim(),
      current,
      threshold,
      location: itemData.location.trim(),
      responsible: itemData.responsible ? itemData.responsible.trim() : 'Station Officer',
      risk,
      icon: itemData.icon || 'fa-boxes-stacked',
      category: itemData.category || 'General Supplies',
      updatedAt: new Date().toISOString()
    };

    list.unshift(newItem);
    StorageService.saveData('inventory', list);
    return newItem;
  },

  async update(id, updates) {
    const remote = await apiRequest(`/inventory/${id}`, 'PATCH', updates);
    if (remote && remote.data) return remote.data;

    const list = StorageService.getData('inventory') || [];
    const index = list.findIndex(item => String(item.id) === String(id));
    if (index === -1) return null;

    const current = updates.current !== undefined ? parseFloat(updates.current) : list[index].current;
    const threshold = updates.threshold !== undefined ? parseFloat(updates.threshold) : list[index].threshold;

    let risk = 'Low';
    if (current < threshold) risk = 'High';
    else if (current < threshold * 1.5) risk = 'Moderate';

    list[index] = {
      ...list[index],
      ...updates,
      current,
      threshold,
      risk,
      updatedAt: new Date().toISOString()
    };

    StorageService.saveData('inventory', list);
    return list[index];
  },

  async adjustQuantity(id, delta) {
    const list = StorageService.getData('inventory') || [];
    const item = list.find(i => String(i.id) === String(id));
    if (!item) return null;

    const newCurrent = Math.max(0, (item.current || 0) + delta);
    return await this.update(id, { current: newCurrent });
  },

  async delete(id) {
    await apiRequest(`/inventory/${id}`, 'DELETE');
    let list = StorageService.getData('inventory') || [];
    list = list.filter(item => String(item.id) !== String(id));
    StorageService.saveData('inventory', list);
    return true;
  }
};

/**
 * Personnel Manifest API Service
 */
export const PersonnelAPI = {
  async getAll(filters = {}) {
    const remote = await apiRequest('/personnel');
    let list = (remote && Array.isArray(remote.data)) ? remote.data : (StorageService.getData('personnel') || []);

    if (filters.station && filters.station !== 'all') {
      list = list.filter(p => p.station.toLowerCase() === filters.station.toLowerCase());
    }

    if (filters.search) {
      const q = filters.search.toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.role.toLowerCase().includes(q) ||
        (p.email && p.email.toLowerCase().includes(q))
      );
    }

    return list;
  },

  async create(personData) {
    const remote = await apiRequest('/personnel', 'POST', personData);
    if (remote && remote.data) return remote.data;

    const list = StorageService.getData('personnel') || [];
    const newPerson = {
      id: personData.id || Date.now(),
      name: personData.name.trim(),
      role: personData.role.trim(),
      station: personData.station.trim(),
      clearance: personData.clearance || 'Level 3',
      team: personData.team || 'Scientific Wing',
      status: personData.status || 'Active',
      email: personData.email || `${personData.name.toLowerCase().replace(/\s+/g, '')}@gmail.com`,
      createdAt: new Date().toISOString()
    };

    list.unshift(newPerson);
    StorageService.saveData('personnel', list);
    return newPerson;
  },

  async delete(id) {
    await apiRequest(`/personnel/${id}`, 'DELETE');
    let list = StorageService.getData('personnel') || [];
    list = list.filter(p => String(p.id) !== String(id));
    StorageService.saveData('personnel', list);
    return true;
  }
};

/**
 * Unified Database Adapter
 * Used for programmatic export, import, or cloud syncing
 */
export const DatabaseAdapter = {
  async exportCompleteDatabase() {
    return {
      version: "1.0",
      exportedAt: new Date().toISOString(),
      expeditions: StorageService.getData('expeditions') || [],
      cargo: StorageService.getData('cargo') || [],
      inventory: StorageService.getData('inventory') || [],
      personnel: StorageService.getData('personnel') || []
    };
  },

  async importCompleteDatabase(jsonData) {
    if (!jsonData) return false;
    if (Array.isArray(jsonData.expeditions)) StorageService.saveData('expeditions', jsonData.expeditions);
    if (Array.isArray(jsonData.cargo)) StorageService.saveData('cargo', jsonData.cargo);
    if (Array.isArray(jsonData.inventory)) StorageService.saveData('inventory', jsonData.inventory);
    if (Array.isArray(jsonData.personnel)) StorageService.saveData('personnel', jsonData.personnel);
    return true;
  },

  async resetToBaseline() {
    StorageService.saveData('expeditions', defaultData.expeditions);
    StorageService.saveData('cargo', defaultData.cargo);
    StorageService.saveData('inventory', defaultData.inventory);
    StorageService.saveData('personnel', defaultData.personnel);
    return true;
  }
};

/**
 * Utility function to download data as a CSV file
 */
export function exportTableToCsv(filename, rows, headers) {
  if (!rows || !rows.length) {
    alert('No records available to export.');
    return;
  }

  const csvContent = [
    headers.map(h => `"${h.replace(/"/g, '""')}"`).join(','),
    ...rows.map(row =>
      row.map(val => {
        const str = String(val ?? '');
        return `"${str.replace(/"/g, '""')}"`;
      }).join(',')
    )
  ].join('\r\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
