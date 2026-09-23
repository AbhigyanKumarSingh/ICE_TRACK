import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Enable CORS for local testing
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// In-memory Database / Model Store (can be hooked to PostgreSQL, MongoDB, Cloud SQL, Firebase, SQLite)
const db = {
  expeditions: [
    { id: 1, name: "44th Indian Scientific Expedition to Antarctica", station: "Maitri & Bharati", start: "2024-11-15", end: "2025-03-30", ship: "MV Vasiliy Golovnin", priority: "High" },
    { id: 2, name: "Dakshin Gangotri Ice Core Drilling Survey", station: "Dakshin Camp", start: "2024-12-01", end: "2025-02-15", ship: "SA Agulhas II", priority: "Critical" },
    { id: 3, name: "Larsemann Hills Atmospheric & Ozone Profiling", station: "Bharati", start: "2025-01-10", end: "2025-04-20", ship: "RV Sagar Nidhi", priority: "Normal" }
  ],
  cargo: [
    { id: "CGO-4401", item: "Polar Heavy Generator Spares & Crankshafts", weight: 3400, weightKg: 3400, origin: "Mormugao Port (Goa)", destination: "Maitri Station", status: "Loaded", progress: 25, priority: "High" },
    { id: "CGO-4402", item: "Cryogenic Aviation Fuel & Jet-A1 Drums (2000L)", weight: 6200, weightKg: 6200, origin: "New Mangalore Port", destination: "Bharati Station", status: "In Transit", progress: 65, priority: "Critical" },
    { id: "CGO-4403", item: "Hydroponics Nutrient Solutions & Seed Modules", weight: 450, weightKg: 450, origin: "Mormugao Port (Goa)", destination: "Maitri Station", status: "Delivered", progress: 100, priority: "Normal" },
    { id: "CGO-4404", item: "Deep-Ice Core Electromechanical Drill Heads", weight: 1200, weightKg: 1200, origin: "Cape Town Transit Hub", destination: "Dakshin Ice Camp", status: "In Transit", progress: 40, priority: "High" }
  ],
  inventory: [
    { id: 1, item: "Extreme Polar Diesel (EPD -50°C)", category: "Fuel & Power", location: "Maitri", current: 42000, threshold: 25000, responsible: "Col. Rajesh Sharma", risk: "Low", icon: "fa-gas-pump" },
    { id: 2, item: "Cryogenic Jet A-1 Helicopter Fuel", category: "Fuel & Power", location: "Bharati", current: 11000, threshold: 14000, responsible: "Wg Cdr. K. Raman", risk: "Moderate", icon: "fa-plane" },
    { id: 3, item: "Freeze-Dried Rations (18-Month Reserve)", category: "Provisions & Food", location: "Maitri", current: 850, threshold: 300, responsible: "Dr. Sunita Rao", risk: "Low", icon: "fa-utensils" },
    { id: 4, item: "Oxygen & Nitrogen Medical Cylinders", category: "Medical & Cryo", location: "Maitri", current: 14, threshold: 20, responsible: "Surgeon Cdr. M. Patel", risk: "High", icon: "fa-notes-medical" },
    { id: 5, item: "Piston Rings for Cummins 250kVA GenSet", category: "Mechanical Spares", location: "Bharati", current: 4, threshold: 12, responsible: "Er. Amitav Ghosh", risk: "High", icon: "fa-gears" }
  ],
  personnel: [
    { id: 1, name: "Dr. Ananya Roy", role: "Chief Polar Scientist & Winter Team Leader", team: "Atmospheric Physics", station: "Maitri", status: "Active", clearance: "Level 5", email: "ananya.roy@ncpor.res.in" },
    { id: 2, name: "Col. Rajesh Sharma", role: "Station Commander & Logistics Lead", team: "Engineering Corps", station: "Maitri", status: "Active", clearance: "Level 5", email: "rajesh.sharma@indianarmy.nic.in" },
    { id: 3, name: "Dr. Vikram Sethi", role: "Glaciologist & Core Drilling Specialist", team: "Cryosphere Wing", station: "Bharati", status: "Active", clearance: "Level 4", email: "vikram.sethi@moes.gov.in" },
    { id: 4, name: "Surgeon Cdr. M. Patel", role: "Senior Medical Officer & Hypothermia Lead", team: "Medical Staff", station: "Maitri", status: "Active", clearance: "Level 4", email: "dr.patel@navalmed.gov.in" },
    { id: 5, name: "Er. Amitav Ghosh", role: "Electrical & Heating Systems Engineer", team: "Life Support", station: "Bharati", status: "Active", clearance: "Level 3", email: "amitav.ghosh@ncpor.res.in" }
  ]
};

// --- RESTful Backend API Endpoints (/api/v1) ---

app.get('/api/v1/health', (req, res) => {
  res.json({
    status: 'ok',
    system: 'ICETRACK Polar Logistics Backend Engine',
    version: '2.0.0',
    timestamp: new Date().toISOString(),
    databaseStatus: 'connected'
  });
});

// Authentication (Strictly locked to authorized credentials)
app.post('/api/v1/auth/login', (req, res) => {
  const { email, password, role } = req.body;
  const cleanEmail = (email || '').trim().toLowerCase();
  const cleanPass = (password || '').trim();

  if (cleanEmail === 'xyz@gmail.com' && cleanPass === 'XYZ@2026') {
    const user = {
      email: 'XYZ@gmail.com',
      name: 'XYZ',
      role: role || 'manager',
      station: 'Bharati',
      designation: 'Expedition Operations Lead',
      clearance: 'Level 4',
      token: `icetrack_sec_token_${Date.now()}`
    };
    return res.json({ success: true, token: user.token, user });
  }

  return res.status(401).json({
    success: false,
    error: 'Invalid Email or Password. Access Denied: Unauthorized Personnel.'
  });
});

// Expeditions
app.get('/api/v1/expeditions', (req, res) => {
  res.json({ success: true, count: db.expeditions.length, data: db.expeditions });
});

app.post('/api/v1/expeditions', (req, res) => {
  const newExp = { id: Date.now(), ...req.body };
  db.expeditions.unshift(newExp);
  res.status(201).json({ success: true, data: newExp });
});

app.delete('/api/v1/expeditions/:id', (req, res) => {
  const id = req.params.id;
  db.expeditions = db.expeditions.filter(e => String(e.id) !== String(id));
  res.json({ success: true });
});

// Cargo
app.get('/api/v1/cargo', (req, res) => {
  res.json({ success: true, count: db.cargo.length, data: db.cargo });
});

app.post('/api/v1/cargo', (req, res) => {
  const newCargo = {
    id: req.body.id || `CGO-${Math.floor(1000 + Math.random() * 9000)}`,
    ...req.body
  };
  db.cargo.unshift(newCargo);
  res.status(201).json({ success: true, data: newCargo });
});

app.patch('/api/v1/cargo/:id', (req, res) => {
  const id = req.params.id;
  const index = db.cargo.findIndex(c => String(c.id).toLowerCase() === String(id).toLowerCase());
  if (index === -1) return res.status(404).json({ error: 'Cargo not found' });
  db.cargo[index] = { ...db.cargo[index], ...req.body };
  res.json({ success: true, data: db.cargo[index] });
});

app.delete('/api/v1/cargo/:id', (req, res) => {
  const id = req.params.id;
  db.cargo = db.cargo.filter(c => String(c.id).toLowerCase() !== String(id).toLowerCase());
  res.json({ success: true });
});

// Inventory
app.get('/api/v1/inventory', (req, res) => {
  res.json({ success: true, count: db.inventory.length, data: db.inventory });
});

app.post('/api/v1/inventory', (req, res) => {
  const newItem = { id: Date.now(), ...req.body };
  db.inventory.unshift(newItem);
  res.status(201).json({ success: true, data: newItem });
});

app.patch('/api/v1/inventory/:id', (req, res) => {
  const id = req.params.id;
  const index = db.inventory.findIndex(item => String(item.id) === String(id));
  if (index === -1) return res.status(404).json({ error: 'Item not found' });
  db.inventory[index] = { ...db.inventory[index], ...req.body };
  res.json({ success: true, data: db.inventory[index] });
});

app.delete('/api/v1/inventory/:id', (req, res) => {
  const id = req.params.id;
  db.inventory = db.inventory.filter(item => String(item.id) !== String(id));
  res.json({ success: true });
});

// Personnel
app.get('/api/v1/personnel', (req, res) => {
  res.json({ success: true, count: db.personnel.length, data: db.personnel });
});

app.post('/api/v1/personnel', (req, res) => {
  const newPerson = { id: Date.now(), ...req.body };
  db.personnel.unshift(newPerson);
  res.status(201).json({ success: true, data: newPerson });
});

app.delete('/api/v1/personnel/:id', (req, res) => {
  const id = req.params.id;
  db.personnel = db.personnel.filter(p => String(p.id) !== String(id));
  res.json({ success: true });
});

// Database Full Export / Import
app.get('/api/v1/database/export', (req, res) => {
  res.json({
    version: "2.0",
    exportedAt: new Date().toISOString(),
    data: db
  });
});

app.post('/api/v1/database/import', (req, res) => {
  const imported = req.body.data || req.body;
  if (Array.isArray(imported.expeditions)) db.expeditions = imported.expeditions;
  if (Array.isArray(imported.cargo)) db.cargo = imported.cargo;
  if (Array.isArray(imported.inventory)) db.inventory = imported.inventory;
  if (Array.isArray(imported.personnel)) db.personnel = imported.personnel;
  res.json({ success: true, message: 'Database imported successfully' });
});

// Static file serving for standalone backend execution
app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`[ICETRACK Polar Ops] Server and REST API running at http://0.0.0.0:${PORT}`);
  console.log(`[ICETRACK Polar Ops] REST Endpoints live under /api/v1/*`);
});
