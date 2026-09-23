(() => {
  // js/i18n.js
  var i18n = {
    en: {
      heroTitle: "National Polar Operations & Logistics Command",
      heroDesc: "ICETRACK is the centralized command and logistics management portal of the Indian Antarctic Programme, Ministry of Earth Sciences, Government of India. It orchestrates real-time polar station telemetry, expedition vessel supply chains, cryo-inventory reserves, and extreme-weather emergency response across Maitri, Bharati, and Dakshin Ice Camp.",
      heroExpTitle: "Expeditions",
      heroExpDesc: "Plan and monitor live polar routes.",
      heroExpBtn: "Visit Expeditions",
      heroCargoTitle: "Cargo & Inventory",
      heroCargoDesc: "Manage global polar supplies.",
      heroCargoBtn: "Visit Logistics",
      heroMapTitle: "Live Map",
      heroMapDesc: "Real-time geospatial tracking.",
      heroMapBtn: "Visit Map",
      sysOverview: "System Overview",
      tagline: "National Polar Operations & Logistics Command Portal \u2022 Govt. of India",
      roleAdmin: "Admin",
      roleManager: "Expedition Manager",
      roleOfficer: "Field Officer",
      loginBtn: "ACCESS COMMAND",
      // Nav
      navDashboard: "Command Dashboard",
      navExpeditions: "Expeditions",
      navCargo: "Cargo",
      navInventory: "Inventory",
      navPersonnel: "Personnel",
      navMap: "Map View",
      navEmergency: "Emergency",
      navAnalytics: "Analytics",
      loggedInAs: "Logged in as",
      logoutBtn: "Logout",
      statusLive: "LIVE",
      topbarGlobeBtn: "3D Globe Map",
      // Dashboard
      metricActiveExpeditions: "Active Expeditions",
      metricCargoTracked: "Cargo Tracked",
      metricPersonnelDeployed: "Personnel Deployed",
      metricActiveAlerts: "Active Alerts",
      quickModules: "Quick Modules",
      // Expeditions
      planExpedition: "Plan Expedition",
      activeMissions: "Active Missions",
      lblMissionName: "Mission Name",
      lblTargetStation: "Target Station",
      lblStartDate: "Start Date",
      lblEndDate: "End Date",
      lblShipName: "Vessel/Ship",
      lblPriority: "Priority",
      btnCreateMission: "Create Mission",
      colName: "Name",
      colStation: "Station",
      colVessel: "Vessel",
      colTimeline: "Timeline",
      colPriority: "Priority",
      // Cargo
      cargoTracking: "Cargo Logistics Tracking",
      btnSimulateUpdate: "Simulate Update",
      colCargoId: "Cargo ID",
      colItem: "Item",
      colWeight: "Weight (kg)",
      colRoute: "Route",
      colStatus: "Status",
      colProgress: "Progress",
      // Inventory
      inventoryRiskChart: "Inventory Risk Assessment",
      // Personnel
      personnelMovement: "Personnel Movement",
      optAllStations: "All Stations",
      colRole: "Role",
      colTeam: "Team",
      colClearance: "Clearance",
      // Map
      liveMapMonitor: "Live Geolocation Monitor",
      // Emergency
      reportEmergency: "Report Emergency",
      lblIssueType: "Issue Type",
      lblSeverity: "Severity",
      lblMessage: "Message",
      btnTransmitSos: "TRANSMIT SOS",
      responseProtocol: "Automated Response Protocol",
      lblNearestSupport: "Nearest Support Station",
      lblAvailableResources: "Available Immediate Resources",
      // Analytics
      cargoStatusChart: "Cargo Delivery Progress"
    },
    hi: {
      heroTitle: "\u0930\u093E\u0937\u094D\u091F\u094D\u0930\u0940\u092F \u0927\u094D\u0930\u0941\u0935\u0940\u092F \u092A\u094D\u0930\u091A\u093E\u0932\u0928 \u090F\u0935\u0902 \u0930\u0938\u0926 \u0915\u092E\u093E\u0928",
      heroDesc: "\u0906\u0907\u0938\u091F\u094D\u0930\u0948\u0915 (ICETRACK) \u092D\u093E\u0930\u0924 \u0938\u0930\u0915\u093E\u0930 \u0915\u0947 \u092A\u0943\u0925\u094D\u0935\u0940 \u0935\u093F\u091C\u094D\u091E\u093E\u0928 \u092E\u0902\u0924\u094D\u0930\u093E\u0932\u092F \u0915\u0947 \u0905\u0902\u0924\u0930\u094D\u0917\u0924 \u092D\u093E\u0930\u0924\u0940\u092F \u0905\u0902\u091F\u093E\u0930\u094D\u0915\u091F\u093F\u0915 \u0915\u093E\u0930\u094D\u092F\u0915\u094D\u0930\u092E \u0915\u093E \u090F\u0915\u0940\u0915\u0943\u0924 \u0915\u092E\u093E\u0928 \u090F\u0935\u0902 \u0930\u0938\u0926 \u092A\u094D\u0930\u092C\u0902\u0927\u0928 \u092A\u094B\u0930\u094D\u091F\u0932 \u0939\u0948\u0964 \u092F\u0939 \u092E\u0948\u0924\u094D\u0930\u0940, \u092D\u093E\u0930\u0924\u0940 \u090F\u0935\u0902 \u0926\u0915\u094D\u0937\u093F\u0923 \u0906\u0907\u0938 \u0915\u0948\u0902\u092A \u092E\u0947\u0902 \u0935\u093E\u0938\u094D\u0924\u0935\u093F\u0915 \u0938\u092E\u092F \u0938\u094D\u091F\u0947\u0936\u0928 \u091F\u0947\u0932\u0940\u092E\u0947\u091F\u094D\u0930\u0940, \u0905\u092D\u093F\u092F\u093E\u0928 \u092A\u094B\u0924 \u0906\u092A\u0942\u0930\u094D\u0924\u093F \u0936\u094D\u0930\u0943\u0902\u0916\u0932\u093E, \u0915\u094D\u0930\u093E\u092F\u094B-\u092D\u0902\u0921\u093E\u0930 \u0914\u0930 \u092A\u094D\u0930\u0924\u093F\u0915\u0942\u0932 \u092E\u094C\u0938\u092E \u0906\u092A\u093E\u0924\u0915\u093E\u0932\u0940\u0928 \u0938\u092E\u0928\u094D\u0935\u092F \u0938\u0941\u0928\u093F\u0936\u094D\u091A\u093F\u0924 \u0915\u0930\u0924\u093E \u0939\u0948\u0964",
      heroExpTitle: "\u0905\u092D\u093F\u092F\u093E\u0928",
      heroExpDesc: "\u0932\u093E\u0907\u0935 \u0927\u094D\u0930\u0941\u0935\u0940\u092F \u092E\u093E\u0930\u094D\u0917\u094B\u0902 \u0915\u0940 \u092F\u094B\u091C\u0928\u093E \u092C\u0928\u093E\u090F\u0902 \u0914\u0930 \u0928\u093F\u0917\u0930\u093E\u0928\u0940 \u0915\u0930\u0947\u0902\u0964",
      heroExpBtn: "\u0905\u092D\u093F\u092F\u093E\u0928 \u0926\u0947\u0916\u0947\u0902",
      heroCargoTitle: "\u0915\u093E\u0930\u094D\u0917\u094B \u0914\u0930 \u0907\u0928\u094D\u0935\u0947\u0902\u091F\u0930\u0940",
      heroCargoDesc: "\u0935\u0948\u0936\u094D\u0935\u093F\u0915 \u0927\u094D\u0930\u0941\u0935\u0940\u092F \u0906\u092A\u0942\u0930\u094D\u0924\u093F \u0915\u093E \u092A\u094D\u0930\u092C\u0902\u0927\u0928 \u0915\u0930\u0947\u0902\u0964",
      heroCargoBtn: "\u0930\u0938\u0926 \u0926\u0947\u0916\u0947\u0902",
      heroMapTitle: "\u0932\u093E\u0907\u0935 \u092E\u093E\u0928\u091A\u093F\u0924\u094D\u0930",
      heroMapDesc: "\u0935\u093E\u0938\u094D\u0924\u0935\u093F\u0915 \u0938\u092E\u092F \u092D\u0942-\u0938\u094D\u0925\u093E\u0928\u093F\u0915 \u091F\u094D\u0930\u0948\u0915\u093F\u0902\u0917\u0964",
      heroMapBtn: "\u092E\u093E\u0928\u091A\u093F\u0924\u094D\u0930 \u0926\u0947\u0916\u0947\u0902",
      sysOverview: "\u092A\u094D\u0930\u0923\u093E\u0932\u0940 \u0905\u0935\u0932\u094B\u0915\u0928",
      tagline: "\u0930\u093E\u0937\u094D\u091F\u094D\u0930\u0940\u092F \u0927\u094D\u0930\u0941\u0935\u0940\u092F \u092A\u094D\u0930\u091A\u093E\u0932\u0928 \u090F\u0935\u0902 \u0930\u0938\u0926 \u0915\u092E\u093E\u0928 \u092A\u094B\u0930\u094D\u091F\u0932 \u2022 \u092D\u093E\u0930\u0924 \u0938\u0930\u0915\u093E\u0930",
      roleAdmin: "\u092A\u094D\u0930\u0936\u093E\u0938\u0915 (Admin)",
      roleManager: "\u0905\u092D\u093F\u092F\u093E\u0928 \u092A\u094D\u0930\u092C\u0902\u0927\u0915 (Manager)",
      roleOfficer: "\u0915\u094D\u0937\u0947\u0924\u094D\u0930 \u0905\u0927\u093F\u0915\u093E\u0930\u0940 (Field Officer)",
      loginBtn: "\u0915\u092E\u093E\u0902\u0921 \u090F\u0915\u094D\u0938\u0947\u0938 \u0915\u0930\u0947\u0902",
      // Nav
      navDashboard: "\u0915\u092E\u093E\u0902\u0921 \u0921\u0948\u0936\u092C\u094B\u0930\u094D\u0921",
      navExpeditions: "\u0905\u092D\u093F\u092F\u093E\u0928 (Expeditions)",
      navCargo: "\u0915\u093E\u0930\u094D\u0917\u094B (Cargo)",
      navInventory: "\u0907\u0928\u094D\u0935\u0947\u0902\u091F\u0930\u0940 (Inventory)",
      navPersonnel: "\u0915\u0930\u094D\u092E\u091A\u093E\u0930\u0940 (Personnel)",
      navMap: "\u092E\u093E\u0928\u091A\u093F\u0924\u094D\u0930 \u0926\u0943\u0936\u094D\u092F (Map)",
      navEmergency: "\u0906\u092A\u093E\u0924\u0915\u093E\u0932 (Emergency)",
      navAnalytics: "\u0935\u093F\u0936\u094D\u0932\u0947\u0937\u0923 (Analytics)",
      loggedInAs: "\u0932\u0949\u0917 \u0907\u0928:",
      logoutBtn: "\u0932\u0949\u0917 \u0906\u0909\u091F",
      statusLive: "\u0932\u093E\u0907\u0935",
      topbarGlobeBtn: "3D \u0917\u094D\u0932\u094B\u092C \u092E\u093E\u0928\u091A\u093F\u0924\u094D\u0930",
      // Dashboard
      metricActiveExpeditions: "\u0938\u0915\u094D\u0930\u093F\u092F \u0905\u092D\u093F\u092F\u093E\u0928",
      metricCargoTracked: "\u0915\u093E\u0930\u094D\u0917\u094B \u091F\u094D\u0930\u0948\u0915\u093F\u0902\u0917",
      metricPersonnelDeployed: "\u0924\u0948\u0928\u093E\u0924 \u0915\u0930\u094D\u092E\u091A\u093E\u0930\u0940",
      metricActiveAlerts: "\u0938\u0915\u094D\u0930\u093F\u092F \u0905\u0932\u0930\u094D\u091F",
      quickModules: "\u0924\u094D\u0935\u0930\u093F\u0924 \u092E\u0949\u0921\u094D\u092F\u0942\u0932",
      // Expeditions
      planExpedition: "\u0905\u092D\u093F\u092F\u093E\u0928 \u092F\u094B\u091C\u0928\u093E",
      activeMissions: "\u0938\u0915\u094D\u0930\u093F\u092F \u092E\u093F\u0936\u0928",
      lblMissionName: "\u092E\u093F\u0936\u0928 \u0915\u093E \u0928\u093E\u092E",
      lblTargetStation: "\u0932\u0915\u094D\u0937\u094D\u092F \u0938\u094D\u091F\u0947\u0936\u0928",
      lblStartDate: "\u0906\u0930\u0902\u092D \u0924\u093F\u0925\u093F",
      lblEndDate: "\u0938\u092E\u093E\u092A\u094D\u0924\u093F \u0924\u093F\u0925\u093F",
      lblShipName: "\u091C\u0939\u093E\u091C\u093C (Vessel)",
      lblPriority: "\u092A\u094D\u0930\u093E\u0925\u092E\u093F\u0915\u0924\u093E",
      btnCreateMission: "\u092E\u093F\u0936\u0928 \u092C\u0928\u093E\u090F\u0901",
      colName: "\u0928\u093E\u092E",
      colStation: "\u0938\u094D\u091F\u0947\u0936\u0928",
      colVessel: "\u091C\u0939\u093E\u091C\u093C",
      colTimeline: "\u0938\u092E\u092F \u0938\u0940\u092E\u093E",
      colPriority: "\u092A\u094D\u0930\u093E\u0925\u092E\u093F\u0915\u0924\u093E",
      // Cargo
      cargoTracking: "\u0915\u093E\u0930\u094D\u0917\u094B \u0930\u0938\u0926 \u091F\u094D\u0930\u0948\u0915\u093F\u0902\u0917",
      btnSimulateUpdate: "\u0905\u092A\u0921\u0947\u091F \u0905\u0928\u0941\u0915\u0930\u0923 \u0915\u0930\u0947\u0902",
      colCargoId: "\u0915\u093E\u0930\u094D\u0917\u094B \u0906\u0908\u0921\u0940",
      colItem: "\u0935\u0938\u094D\u0924\u0941",
      colWeight: "\u0935\u091C\u0928 (kg)",
      colRoute: "\u092E\u093E\u0930\u094D\u0917",
      colStatus: "\u0938\u094D\u0925\u093F\u0924\u093F",
      colProgress: "\u092A\u094D\u0930\u0917\u0924\u093F",
      // Inventory
      inventoryRiskChart: "\u0907\u0928\u094D\u0935\u0947\u0902\u091F\u0930\u0940 \u091C\u094B\u0916\u093F\u092E \u0906\u0915\u0932\u0928",
      // Personnel
      personnelMovement: "\u0915\u0930\u094D\u092E\u091A\u093E\u0930\u0940 \u0906\u0935\u093E\u0917\u092E\u0928",
      optAllStations: "\u0938\u092D\u0940 \u0938\u094D\u091F\u0947\u0936\u0928",
      colRole: "\u092D\u0942\u092E\u093F\u0915\u093E",
      colTeam: "\u091F\u0940\u092E",
      colClearance: "\u092E\u0902\u091C\u0942\u0930\u0940",
      // Map
      liveMapMonitor: "\u0932\u093E\u0907\u0935 \u092D\u0942-\u0938\u094D\u0925\u093E\u0928 \u092E\u0949\u0928\u093F\u091F\u0930",
      // Emergency
      reportEmergency: "\u0906\u092A\u093E\u0924\u0915\u093E\u0932 \u0915\u0940 \u0930\u093F\u092A\u094B\u0930\u094D\u091F \u0915\u0930\u0947\u0902",
      lblIssueType: "\u0938\u092E\u0938\u094D\u092F\u093E \u0915\u093E \u092A\u094D\u0930\u0915\u093E\u0930",
      lblSeverity: "\u0917\u0902\u092D\u0940\u0930\u0924\u093E",
      lblMessage: "\u0938\u0902\u0926\u0947\u0936",
      btnTransmitSos: "SOS \u092A\u094D\u0930\u0947\u0937\u093F\u0924 \u0915\u0930\u0947\u0902",
      responseProtocol: "\u0938\u094D\u0935\u091A\u093E\u0932\u093F\u0924 \u092A\u094D\u0930\u0924\u093F\u0915\u094D\u0930\u093F\u092F\u093E \u092A\u094D\u0930\u094B\u091F\u094B\u0915\u0949\u0932",
      lblNearestSupport: "\u0928\u093F\u0915\u091F\u0924\u092E \u0938\u0939\u093E\u092F\u0924\u093E \u0938\u094D\u091F\u0947\u0936\u0928",
      lblAvailableResources: "\u0909\u092A\u0932\u092C\u094D\u0927 \u0924\u0924\u094D\u0915\u093E\u0932 \u0938\u0902\u0938\u093E\u0927\u0928",
      // Analytics
      cargoStatusChart: "\u0915\u093E\u0930\u094D\u0917\u094B \u0935\u093F\u0924\u0930\u0923 \u092A\u094D\u0930\u0917\u0924\u093F"
    }
  };

  // js/data.js
  var AUTHORIZED_OFFICERS = [
    {
      name: "XYZ",
      email: "XYZ@gmail.com",
      password: "XYZ@2026",
      defaultRole: "manager",
      station: "Bharati",
      designation: "Expedition Operations Lead",
      clearance: "Level 4"
    }
  ];
  var defaultData = {
    expeditions: [],
    cargo: [],
    inventory: [
      { id: 1, item: "Food Stock (Days)", current: 45, threshold: 30, location: "Maitri", responsible: "XYZ", risk: "Low", icon: "fa-bowl-food", category: "Rations" },
      { id: 2, item: "Aviation Fuel (L)", current: 1200, threshold: 1500, location: "Bharati", responsible: "XYZ", risk: "High", icon: "fa-gas-pump", category: "Fuel & Power" },
      { id: 3, item: "Oxygen Cylinders", current: 85, threshold: 50, location: "Dakshin Ice Camp", responsible: "XYZ", risk: "Low", icon: "fa-wind", category: "Life Support" },
      { id: 4, item: "Medical Kits Level 1", current: 8, threshold: 10, location: "Maitri", responsible: "XYZ", risk: "Moderate", icon: "fa-suitcase-medical", category: "Medical" },
      { id: 5, item: "Arctic ATF-50 Low-Temp Diesel (KL)", current: 142, threshold: 160, location: "Maitri", responsible: "XYZ", risk: "Moderate", icon: "fa-oil-well", category: "Fuel & Power" },
      { id: 6, item: "Deep Permafrost Thermal Probes", current: 24, threshold: 12, location: "Bharati", responsible: "XYZ", risk: "Low", icon: "fa-temperature-low", category: "Scientific Instruments" },
      { id: 7, item: "Extreme Cold Weather (ECW) Parkas", current: 38, threshold: 25, location: "Dakshin Ice Camp", responsible: "XYZ", risk: "Low", icon: "fa-vest", category: "Survival Gear" },
      { id: 8, item: "SATCOM Satellite Transceivers", current: 6, threshold: 8, location: "Bharati", responsible: "XYZ", risk: "Moderate", icon: "fa-satellite-dish", category: "Communications" }
    ],
    personnel: [
      { id: 1, name: "XYZ", role: "Expedition Operations Lead", team: "Command Wing", station: "Bharati", status: "Active", clearance: "Level 4", email: "XYZ@gmail.com" },
      { id: 2, name: "Abhigyan", role: "Chief Polar Commander", team: "Command Wing", station: "Maitri", status: "Active", clearance: "Level 5", email: "abhigyan@ncpor.res.in" },
      { id: 3, name: "Dr. K. Swaminathan", role: "Ice Core Drilling Specialist", team: "Echo", station: "Dakshin Ice Camp", status: "Active", clearance: "Level 3", email: "swaminathan@ncpor.res.in" },
      { id: 4, name: "Dr. Meera Sen", role: "Meteorological Analyst", team: "Alpha", station: "Maitri", status: "Active", clearance: "Level 3", email: "meera.sen@ncpor.res.in" },
      { id: 5, name: "Commander Vikram Rao", role: "Oceanographic Technician", team: "Naval Wing", station: "Bharati", status: "Active", clearance: "Level 3", email: "vikram.rao@ncpor.res.in" },
      { id: 6, name: "Eng. Rajiv Menon", role: "Power & Life Support Engineer", team: "Bravo", station: "Dakshin Ice Camp", status: "Active", clearance: "Level 3", email: "rajiv.menon@ncpor.res.in" }
    ]
  };
  var memoryStore = {};
  function safeGetItem(key) {
    try {
      const val = localStorage.getItem(key);
      return val !== null ? val : memoryStore[key] || null;
    } catch {
      return memoryStore[key] || null;
    }
  }
  function safeSetItem(key, val) {
    memoryStore[key] = val;
    try {
      localStorage.setItem(key, val);
    } catch {
    }
  }
  var StorageService = {
    init() {
      const raw = safeGetItem("icetrack_data");
      if (!raw) {
        safeSetItem("icetrack_data", JSON.stringify(defaultData));
      } else {
        try {
          const stored = JSON.parse(raw) || {};
          let modified = false;
          if (!Array.isArray(stored.inventory)) {
            stored.inventory = defaultData.inventory;
            modified = true;
          }
          if (!Array.isArray(stored.cargo)) {
            stored.cargo = defaultData.cargo;
            modified = true;
          }
          if (!Array.isArray(stored.expeditions)) {
            stored.expeditions = defaultData.expeditions;
            modified = true;
          }
          if (!Array.isArray(stored.personnel)) {
            stored.personnel = defaultData.personnel;
            modified = true;
          }
          if (modified) {
            safeSetItem("icetrack_data", JSON.stringify(stored));
          }
        } catch {
          safeSetItem("icetrack_data", JSON.stringify(defaultData));
        }
      }
      if (!safeGetItem("icetrack_lang")) {
        safeSetItem("icetrack_lang", "en");
      }
    },
    getData(key) {
      try {
        const raw = safeGetItem("icetrack_data");
        const data = raw ? JSON.parse(raw) : defaultData;
        return key ? data[key] || [] : data;
      } catch {
        return key ? defaultData[key] || [] : defaultData;
      }
    },
    saveData(key, newData) {
      try {
        const raw = safeGetItem("icetrack_data");
        const data = raw ? JSON.parse(raw) : { ...defaultData };
        data[key] = newData;
        safeSetItem("icetrack_data", JSON.stringify(data));
      } catch (e) {
        console.warn("Storage save fallback error:", e);
      }
    },
    getLang() {
      return safeGetItem("icetrack_lang") || "en";
    },
    setLang(lang) {
      safeSetItem("icetrack_lang", lang);
    },
    getItem(key) {
      return safeGetItem(key);
    },
    setItem(key, val) {
      safeSetItem(key, val);
    },
    removeItem(key) {
      delete memoryStore[key];
      try {
        localStorage.removeItem(key);
      } catch {
      }
    }
  };
  var INDIAN_PORTS = [
    {
      id: "mormugao",
      name: "Mormugao Port (Goa)",
      state: "Goa",
      lon: 73.801,
      lat: 15.412,
      type: "port",
      category: "Primary Polar Expedition Base (NCPOR)",
      description: "Official embarkation and departure port for all Indian Scientific Expeditions to Antarctica. Managed in direct operational coordination with NCPOR Vasco da Gama, Goa.",
      internalDetails: "Berth 10/11 Polar Staging Wharf (Length 450m, Draft 13.5m); Headland Sada Cryogenic Sample Depot (-20\xB0C & -80\xB0C vaults); Dedicated Bunkering Arm for Arctic Diesel (LADD-45); Heavy-Lift Gantry (100-ton SWL); Direct customs green-corridor to Goa Dabolim Air Cargo Hub.",
      facilities: "Dedicated polar staging berths, sample quarantine, cryogenic storage vaults, 100T gantry crane, vessel bunkering",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=15.412,73.801",
      berths: ["Berth 10 (Polar Charter Mooring)", "Berth 11 (Heavy Science Cargo)", "Berth 8 (Bunkering & Lube)"],
      weather: "29\xB0C \u2022 Wind 11 kts WSW \u2022 Humidity 74% \u2022 Sea State Calm",
      distToAntarctica: "Approx. 9,450 km (5,100 nautical miles)",
      clearance: "Level 4 (MoES Antarctic Command)",
      activeOps: "Voyage 44 Staging & Fuel Bunkering"
    },
    {
      id: "jnpt",
      name: "Jawaharlal Nehru Port (JNPT / Mumbai)",
      state: "Maharashtra",
      lon: 72.951,
      lat: 18.95,
      type: "port",
      category: "Major Container & Heavy Logistics Terminal",
      description: "Primary western maritime gateway handling containerized scientific payload, tracked PistenBully snow-vehicles, and specialized modular habitat shelters.",
      internalDetails: "Terminal 4 (BMCT) Polar Heavy-Lift Quay; Nhava Sheva Special Hazardous Storage Yard; Cold-Chain Container Yard with 440V reefer points; Dedicated tracked vehicle ramp for PistenBully 300 Polar loaders; Rail freight corridor linked to Delhi scientific institutions.",
      facilities: "Super-post-panamax container cranes, customs bonded polar transit bays, reefer yards, hazardous cargo handling",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=18.950,72.951",
      berths: ["BMCT Terminal 4 Berth A", "GTI Terminal Berth 2", "Shallow Water Berth (Heavy Lighterage)"],
      weather: "28\xB0C \u2022 Wind 8 kts NW \u2022 Humidity 68% \u2022 Visibility 10 km",
      distToAntarctica: "Approx. 9,800 km",
      clearance: "Level 3",
      activeOps: "Cryo-Laboratory Module Clearance"
    },
    {
      id: "cochin",
      name: "Cochin Port (Kochi)",
      state: "Kerala",
      lon: 76.271,
      lat: 9.966,
      type: "port",
      category: "Southern Oceanographic Staging Hub",
      description: "Strategic southern deep-water hub providing rapid replenishment, naval survey ship support, and deep-ocean research equipment loading.",
      internalDetails: "Willingdon Island North Coal Berth & Polar Repair Jetty; Cochin Shipyard Drydock 1 (Polar Hull Servicing & Ice-Belt Reinforcement); CMLRE Oceanographic Laboratory calibration quay; Indian Navy Southern Command bunker station.",
      facilities: "Cochin Shipyard dry-docks, oceanographic bunkering, hull inspection pens, deep-draft polar berths",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=9.966,76.271",
      berths: ["North Coal Berth (Polar Staging)", "Q7 Berth (Naval Survey Support)", "CSL Repair Basin"],
      weather: "27\xB0C \u2022 Wind 6 kts SW \u2022 Humidity 82% \u2022 Tropical Clear",
      distToAntarctica: "Approx. 8,900 km",
      clearance: "Level 3",
      activeOps: "ORV Sagar Kanya Sensor Calibration"
    },
    {
      id: "chennai",
      name: "Chennai Port",
      state: "Tamil Nadu",
      lon: 80.294,
      lat: 13.084,
      type: "port",
      category: "Coromandel Polar & NIOT Support Port",
      description: "East coast maritime gateway partnering with the National Institute of Ocean Technology (NIOT) for polar submersibles and underwater observation moorings.",
      internalDetails: "Jawahar Dock Berth 3; NIOT Deep-Sea Technology Staging Shed; Autonomous Underwater Vehicle (AUV) testing basin; Direct pipeline for low-viscosity hydraulic fluids certified for Antarctic sub-zero environments.",
      facilities: "Oceanographic staging berths, marine research vessel handling, NIOT integration yard, 60T crane",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=13.084,80.294",
      berths: ["Jawahar Dock Berth 3", "JD Berth 5 (Submersible Trials)", "South Quay 2"],
      weather: "31\xB0C \u2022 Wind 12 kts SE \u2022 Humidity 70% \u2022 Clear Sky",
      distToAntarctica: "Approx. 9,250 km",
      clearance: "Level 3",
      activeOps: "Deep-Sea Mooring Assembly"
    },
    {
      id: "visakhapatnam",
      name: "Visakhapatnam Port",
      state: "Andhra Pradesh",
      lon: 83.298,
      lat: 17.69,
      type: "port",
      category: "Deepwater Polar Support Terminal",
      description: "Major eastern natural deepwater harbour supporting heavy polar replenishment vessels and naval escort coordination.",
      internalDetails: "Inner Harbour East Quay (EQ-1 & EQ-2, Draft 14.5m); Naval Dockyard synergy berth with underwater diver hull verification; Heavy equipment fabrication shops for blizzard-proof mast antenna structures.",
      facilities: "All-weather deep draft berths, heavy payload cranes, naval logistics synergy, protected inner basin",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=17.690,83.298",
      berths: ["EQ-1 Polar Deepwater Berth", "EQ-2 Bulk Supply", "Outer Harbour Container Berth"],
      weather: "30\xB0C \u2022 Wind 9 kts ESE \u2022 Humidity 73% \u2022 Fair",
      distToAntarctica: "Approx. 9,600 km",
      clearance: "Level 3",
      activeOps: "Polar Structural Steel Inspection"
    },
    {
      id: "kolkata",
      name: "Syama Prasad Mookerjee Port (Kolkata)",
      state: "West Bengal",
      lon: 88.31,
      lat: 22.548,
      type: "port",
      category: "Eastern Riverine Maritime Hub",
      description: "Historic maritime port supporting geological survey stores, ice core drills, and eastern regional polar candidate training mobilization.",
      internalDetails: "Netaji Subhas Dock Berth 4; Geological Survey of India (GSI) polar core drill warehouse; Heavy wooden timber packing yard for polar survival sledges; Riverine tidal lock gates for draught management.",
      facilities: "Inland polar inventory depots, GSI core staging, customs inspection hubs, riverine lighterage",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=22.548,88.310",
      berths: ["Netaji Subhas Dock 4", "Kidderpore Dock Berth 9", "Garden Reach Jetty"],
      weather: "29\xB0C \u2022 Wind 7 kts S \u2022 Humidity 76% \u2022 Haze",
      distToAntarctica: "Approx. 10,200 km",
      clearance: "Level 3",
      activeOps: "Geological Core Drill Packaging"
    },
    {
      id: "mangalore",
      name: "New Mangalore Port",
      state: "Karnataka",
      lon: 74.82,
      lat: 12.93,
      type: "port",
      category: "Coastal Petroleum & Supply Base",
      description: "Supplies aviation turbine fuel (ATF), low-pour-point Arctic diesel (LADD), and lubricants for Antarctic expedition charter vessels.",
      internalDetails: "Oil Jetty 8 & 9 with direct pipeline links to Mangalore Refinery (MRPL); Sub-zero additive blending manifold; Nitrogen purging station for ship fuel tanks before polar departure.",
      facilities: "Dedicated liquid fuel bunkering jetties, hazardous polar lubricant tanks, nitrogen purging system",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=12.930,74.820",
      berths: ["Oil Jetty 8 (LADD Bunkering)", "Oil Jetty 9 (ATF-50 Line)", "General Cargo Berth 5"],
      weather: "28\xB0C \u2022 Wind 10 kts W \u2022 Humidity 79% \u2022 Clear",
      distToAntarctica: "Approx. 9,150 km",
      clearance: "Level 3",
      activeOps: "Arctic Fuel Bunkering (LADD-45)"
    },
    {
      id: "kandla",
      name: "Deendayal Port (Kandla)",
      state: "Gujarat",
      lon: 70.22,
      lat: 23.004,
      type: "port",
      category: "North-Western Heavy Cargo Terminal",
      description: "Specialized dry-bulk and heavy engineering transit port for polar habitat structural steel and prefabricated container modules.",
      internalDetails: "Cargo Berth 12; Open marshalling yard for prefabricated ISO containers; High-tensile steel truss storage area for station structural expansions; Ro-Ro heavy ramp for multi-axle trailers.",
      facilities: "Extensive open-yard staging, heavy machinery handling, multi-axle trailer Ro-Ro ramp",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=23.004,70.220",
      berths: ["Cargo Berth 12", "Dry Bulk Berth 7", "Oil Jetty 3"],
      weather: "32\xB0C \u2022 Wind 14 kts WNW \u2022 Humidity 55% \u2022 Sunny",
      distToAntarctica: "Approx. 10,100 km",
      clearance: "Level 3",
      activeOps: "Heavy Fabrication Staging"
    }
  ];
  var ANTARCTICA_STATIONS = [
    {
      id: "maitri",
      name: "Maitri Station",
      region: "Schirmacher Oasis, Queen Maud Land",
      lon: 11.734,
      lat: -70.767,
      type: "antarctica",
      category: "Active Permanent Research Base (India)",
      description: "India's second permanent Antarctic research station, operational year-round since 1989. Features atmospheric, meteorological, geomagnetism, biomedical, and geological laboratories beside freshwater Lake Priyadarshini.",
      internalDetails: "Main Living Module (Block A: Crew Quarters & Medical Bay; Block B: Galley & Comms Center); Lake Priyadarshini Potable Water Pump & Heat-Tracing Line (400m); Atmospheric Physics & Geomagnetic Observatory; Helipad Bravo (Concrete Pad for Kamov Ka-32 / Chetak); Cryo-Fuel Tank Farm (8 x 15,000L Arctic Diesel Tanks); Boiler & Heating System with redundant backup; Emergency Survival Shelter 'Dakshin Hut' (1.5 km west).",
      facilities: "Accommodates 25 winter / 65 summer personnel, satellite earth station (GSAT uplink to NCPOR), greenhouse, automated weather array, snowmobile workshop",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=-70.767,11.734",
      modules: ["Main Block A & B", "Lake Priyadarshini Pump House", "Atmospheric Radar Shack", "Helipad Bravo", "Cryo-Fuel Farm", "Emergency Shelter"],
      weather: "-28.4\xB0C \u2022 Wind 34 kts ESE \u2022 Pressure 984 hPa \u2022 Ice Thickness 1.8m",
      distToAntarctica: "Station located in Queen Maud Land",
      status: "Operational \u2022 Full Telemetry Active",
      clearance: "Level 4 (MoES Antarctic Command)",
      established: "1989",
      activeOps: "Wintering Team 44 Active \u2022 Atmospheric Radar Scanning"
    },
    {
      id: "bharati",
      name: "Bharati Station",
      region: "Larsemann Hills, East Antarctica",
      lon: 76.187,
      lat: -69.407,
      type: "antarctica",
      category: "Active State-of-the-Art Research Base (India)",
      description: "India's third Antarctic research station, commissioned in 2012. Ultra-modern, energy-efficient complex constructed on stilts to withstand extreme polar blizzards and thermal variations with high-speed satellite telemetry to NRSC Hyderabad.",
      internalDetails: "Three-Story Aerodynamic Main Complex constructed from 134 interlinked ISO container units; Level 1: Workshop, Desalination Plant, Power Generators (3 x 100 kVA Scania CHP Units); Level 2: Crew Quarters, Hospital, Gym, Galley; Level 3: Earth Station Control, ISRO Ground Station, Optics & Polar Science Labs; Rooftop Radome (4.5m X/S-Band Antenna); Twin Helipads H-1 & H-2; Quayside Fast-Ice Mooring Beacon.",
      facilities: "Real-time NRSC/ISRO satellite transmission, 30 winter capacity, combined heat & power plant, twin helipads, reverse osmosis desalination, optical lab",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=-69.407,76.187",
      modules: ["3-Story Containerized Main Block", "ISRO Satellite Tracking Radome", "CHP Power Plant (300 kVA)", "Helipads H-1 & H-2", "Desalination Unit", "Fast-Ice Offloading Ramp"],
      weather: "-21.2\xB0C \u2022 Wind 22 kts NE \u2022 Pressure 992 hPa \u2022 Clear Satellite Link",
      distToAntarctica: "Station located in Larsemann Hills",
      status: "Operational \u2022 High-Bandwidth Satellite Uplink",
      clearance: "Level 5 (MoES Master Station)",
      established: "2012",
      activeOps: "ISRO Remote Sensing Uplink \u2022 Geomagnetic Observatory"
    },
    {
      id: "dakshin_gangotri",
      name: "Dakshin Gangotri",
      region: "Princess Astrid Coast",
      lon: 12,
      lat: -70.093,
      type: "antarctica",
      category: "Historic 1st Station (1983) & Supply Depot",
      description: "India's pioneering first station in Antarctica, established during the third Indian expedition in 1983-84. Currently preserved as an unmanned historic site, automated weather monitoring post, and emergency supply cache.",
      internalDetails: "Submerged Ice-Shelf Timber Station Structure (preserved under 15m firn/ice); Topside Surface Observation Mast with Automated Weather Station (AWS); Cached emergency survival drums (5,000L LADD fuel, vacuum rations for 10 personnel for 30 days); National Commemorative Plaque & Flagpost.",
      facilities: "Historical Antarctic monument, automated telemetry beacon, cached emergency rations & fuel, AWS weather sensor",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=-70.093,12.000",
      modules: ["Sub-Ice Historical Station Block", "AWS Solar Weather Mast", "Emergency Cache Depot", "National Flagpost"],
      weather: "-32.1\xB0C \u2022 Wind 38 kts SE \u2022 Pressure 979 hPa \u2022 Surface Firn Drifting",
      distToAntarctica: "Ice Shelf Location",
      status: "Unmanned Monitored Depot",
      clearance: "Level 3",
      established: "1983",
      activeOps: "Automated Weather Beacon Active"
    },
    {
      id: "india_bay",
      name: "India Bay (Shelf Mooring & Offloading Port)",
      region: "Antarctic Ice Shelf Edge",
      lon: 11.917,
      lat: -69.98,
      type: "antarctica",
      category: "Expedition Maritime Discharge & Mooring Port",
      description: "Designated ice-shelf landing point where Indian expedition charter ships moor against fast ice to offload snow vehicles (PistenBullys), fuel bladders, and container modules for convoy traverse to Maitri.",
      internalDetails: "Fast-Ice Mooring Anchor Bollards (Ice screw array); Groomed Snow Ramp for Convoy Vehicle Access; Temporary Fuel Transfer Hose Line (2 km marine grade); Ski-Way Runway (1,200m groomed ice for Dornier 228 / Twin Otter ski-planes); Convoy staging parking yard.",
      facilities: "Fast-ice mooring anchors, heavy cargo ramp, ski-way runway, mobile fuel pump skids, convoy radio shack",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=-69.980,11.917",
      modules: ["Fast-Ice Vessel Mooring Berth", "Heavy Vehicle Snow Ramp", "Ski-Way Airfield", "Mobile Convoy Radio Shelter"],
      weather: "-25.6\xB0C \u2022 Wind 28 kts E \u2022 Fast-Ice Thickness 2.4m \u2022 Open Lead 1.2 NM",
      distToAntarctica: "Ice Shelf Margin",
      status: "Active Seasonal Discharge Zone",
      clearance: "Level 4",
      established: "Seasonal",
      activeOps: "Ice Runway Prepared for Ski-Planes"
    },
    {
      id: "south_pole",
      name: "Geographic South Pole (Amundsen-Scott)",
      region: "Polar Plateau",
      lon: 0,
      lat: -90,
      type: "antarctica",
      category: "Geographic South Pole Benchmark",
      description: "The southernmost point on Earth (90\xB000\u2032 S). International scientific reference datum for Indian polar traverse navigation.",
      internalDetails: "Geographic Ceremonial South Pole Marker; Clean Air Sector Atmospheric Baseline Observatory; Ice Drilling IceCube Neutrino Array; Skiway Runway 02/20 (3,658m ice runway); Station Dome & Elevated Dormitory Complex.",
      facilities: "Continental reference datum, atmospheric baseline observatory, skiway runway, international scientific benchmark",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=-90.000,0.000",
      modules: ["Ceremonial Pole Marker", "Clean Air Sector", "IceCube Neutrino Array", "Skiway 02/20"],
      weather: "-48.7\xB0C \u2022 Wind 14 kts N \u2022 Elevation 2,835 m \u2022 Severe Cold",
      distToAntarctica: "Center of Continental Ice Sheet (Elevation: 2,835 m)",
      status: "Reference Benchmark",
      clearance: "Open Scientific Datum",
      established: "1911",
      activeOps: "Geodetic Zero Coordinate"
    }
  ];
  var POLAR_VESSELS = [
    {
      id: "sagar_nidhi",
      name: "ORV Sagar Nidhi",
      lon: 67.5,
      lat: -38.2,
      type: "ship",
      category: "MoES Ice-Class Oceanographic Vessel",
      status: "Underway \u2022 Speed 12.4 kn",
      speed: "12.4 knots",
      heading: "192\xB0 South",
      mission: "Deploying ARGO polar ocean floats and conducting Southern Ocean water column profiling."
    },
    {
      id: "vasiliy_golovnin",
      name: "MV Vasiliy Golovnin (Expedition Cargo)",
      lon: 48,
      lat: -58.4,
      type: "ship",
      category: "Chartered Polar Ice-Strengthened Vessel",
      status: "Approaching Fast Ice \u2022 Speed 9.8 kn",
      speed: "9.8 knots",
      heading: "174\xB0 South-South-East",
      mission: "Carrying 1,200 metric tonnes of polar fuel (LADD-45), food containers, and wintering expedition crew."
    },
    {
      id: "sagar_kanya",
      name: "ORV Sagar Kanya",
      lon: 71,
      lat: -12.5,
      type: "ship",
      category: "Deep-Sea Research Vessel",
      status: "Tropical Passage \u2022 Speed 10.5 kn",
      speed: "10.5 knots",
      heading: "185\xB0 South",
      mission: "Atmospheric and monsoon boundary layer observations along India-Antarctica maritime trajectory."
    }
  ];
  var EXPEDITION_ROUTES = [
    {
      id: "main_polar_voyage",
      name: "Goa to Maitri / India Bay Route",
      coordinates: [
        [73.801, 15.412],
        // Mormugao Port
        [68.5, 5],
        [60, -10],
        [57.5, -20.1],
        // Mauritius waypoint
        [48, -35],
        [35, -50],
        [22, -62],
        [11.917, -69.98]
        // India Bay / Maitri
      ]
    },
    {
      id: "bharati_route",
      name: "Mauritius to Bharati Corridor",
      coordinates: [
        [57.5, -20.1],
        [65, -38],
        [70, -50],
        [76.187, -69.407]
        // Bharati Station
      ]
    },
    {
      id: "mumbai_feeder",
      name: "JNPT / Mumbai to Goa Feeder",
      coordinates: [
        [72.951, 18.95],
        [73.801, 15.412]
      ]
    },
    {
      id: "kochi_feeder",
      name: "Kochi to Polar Corridor",
      coordinates: [
        [76.271, 9.966],
        [68.5, 5]
      ]
    },
    {
      id: "chennai_feeder",
      name: "Chennai to Southern Corridor",
      coordinates: [
        [80.294, 13.084],
        [78, 5],
        [68.5, 5]
      ]
    },
    {
      id: "kolkata_feeder",
      name: "Kolkata to Bay of Bengal Link",
      coordinates: [
        [88.31, 22.548],
        [85, 15],
        [80.294, 13.084]
      ]
    }
  ];

  // js/api.js
  var API_CONFIG = {
    // Mode: 'auto' (detects if remote server responds), true (enforce remote), or false (local only)
    MODE: "auto",
    // Remote API Base URL (e.g., '/api/v1' or 'http://localhost:3000/api/v1')
    API_BASE_URL: "/api/v1",
    REQUEST_TIMEOUT: 4e3,
    AUTH_TOKEN_KEY: "icetrack_auth_token",
    HEADERS: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    // Set to true once verified active remote connection
    isRemoteAvailable: false
  };
  function isLocalFileProtocol() {
    try {
      return typeof window !== "undefined" && window.location.protocol === "file:";
    } catch {
      return false;
    }
  }
  async function apiRequest(endpoint, method = "GET", payload = null) {
    if (isLocalFileProtocol() || API_CONFIG.MODE === false) {
      return null;
    }
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.REQUEST_TIMEOUT);
      const token = StorageService.getItem(API_CONFIG.AUTH_TOKEN_KEY);
      const headers = { ...API_CONFIG.HEADERS };
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
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
      API_CONFIG.isRemoteAvailable = false;
    }
    return null;
  }
  var ExpeditionsAPI = {
    async getAll() {
      const remote = await apiRequest("/expeditions");
      if (remote && Array.isArray(remote.data)) {
        return remote.data;
      }
      return StorageService.getData("expeditions") || [];
    },
    async getById(id) {
      const list = await this.getAll();
      return list.find((e) => String(e.id) === String(id)) || null;
    },
    async create(expeditionData) {
      const remote = await apiRequest("/expeditions", "POST", expeditionData);
      if (remote && remote.data) {
        return remote.data;
      }
      const list = StorageService.getData("expeditions") || [];
      const newExp = {
        id: expeditionData.id || Date.now(),
        name: expeditionData.name.trim(),
        station: expeditionData.station.trim(),
        start: expeditionData.start,
        end: expeditionData.end,
        ship: expeditionData.ship.trim(),
        priority: expeditionData.priority || "Normal",
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      list.unshift(newExp);
      StorageService.saveData("expeditions", list);
      return newExp;
    },
    async update(id, updates) {
      const remote = await apiRequest(`/expeditions/${id}`, "PATCH", updates);
      if (remote && remote.data) {
        return remote.data;
      }
      const list = StorageService.getData("expeditions") || [];
      const index = list.findIndex((e) => String(e.id) === String(id));
      if (index === -1) return null;
      list[index] = { ...list[index], ...updates };
      StorageService.saveData("expeditions", list);
      return list[index];
    },
    async delete(id) {
      await apiRequest(`/expeditions/${id}`, "DELETE");
      let list = StorageService.getData("expeditions") || [];
      list = list.filter((e) => String(e.id) !== String(id));
      StorageService.saveData("expeditions", list);
      return true;
    }
  };
  var CargoAPI = {
    async getAll(filters = {}) {
      const remote = await apiRequest("/cargo");
      let list = remote && Array.isArray(remote.data) ? remote.data : StorageService.getData("cargo") || [];
      if (filters.status && filters.status !== "all") {
        list = list.filter((item) => item.status.toLowerCase() === filters.status.toLowerCase());
      }
      if (filters.search) {
        const q = filters.search.toLowerCase();
        list = list.filter(
          (item) => item.id.toLowerCase().includes(q) || item.item.toLowerCase().includes(q) || item.origin && item.origin.toLowerCase().includes(q) || item.destination && item.destination.toLowerCase().includes(q)
        );
      }
      return list;
    },
    async getById(id) {
      const list = await this.getAll();
      return list.find((item) => String(item.id).toLowerCase() === String(id).toLowerCase()) || null;
    },
    async create(cargoData) {
      const remote = await apiRequest("/cargo", "POST", cargoData);
      if (remote && remote.data) return remote.data;
      const list = StorageService.getData("cargo") || [];
      const newCargo = {
        id: cargoData.id || `CGO-${Math.floor(1e3 + Math.random() * 9e3)}`,
        item: cargoData.item.trim(),
        weight: parseFloat(cargoData.weight || cargoData.weightKg) || 0,
        weightKg: parseFloat(cargoData.weight || cargoData.weightKg) || 0,
        origin: cargoData.origin ? cargoData.origin.trim() : "Mormugao Port (Goa)",
        destination: cargoData.destination.trim(),
        status: cargoData.status || "In Transit",
        progress: parseInt(cargoData.progress, 10) || 15,
        priority: cargoData.priority || "Normal",
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      list.unshift(newCargo);
      StorageService.saveData("cargo", list);
      return newCargo;
    },
    async update(id, updates) {
      const remote = await apiRequest(`/cargo/${id}`, "PATCH", updates);
      if (remote && remote.data) return remote.data;
      const list = StorageService.getData("cargo") || [];
      const index = list.findIndex((c) => String(c.id).toLowerCase() === String(id).toLowerCase());
      if (index === -1) return null;
      list[index] = { ...list[index], ...updates };
      StorageService.saveData("cargo", list);
      return list[index];
    },
    async advanceProgress(id, increment = 15) {
      const list = StorageService.getData("cargo") || [];
      const item = list.find((c) => String(c.id).toLowerCase() === String(id).toLowerCase());
      if (!item) return null;
      let newProgress = (item.progress || 0) + increment;
      let newStatus = item.status;
      if (newProgress >= 100) {
        newProgress = 100;
        newStatus = "Delivered";
      } else if (newProgress >= 50) {
        newStatus = "In Transit";
      } else if (newProgress >= 15) {
        newStatus = "Loaded";
      }
      return await this.update(id, { progress: newProgress, status: newStatus });
    },
    async markDelivered(id) {
      return await this.update(id, { progress: 100, status: "Delivered" });
    },
    async delete(id) {
      await apiRequest(`/cargo/${id}`, "DELETE");
      let list = StorageService.getData("cargo") || [];
      list = list.filter((item) => String(item.id).toLowerCase() !== String(id).toLowerCase());
      StorageService.saveData("cargo", list);
      return true;
    }
  };
  var InventoryAPI = {
    async getAll(filters = {}) {
      const remote = await apiRequest("/inventory");
      let list = remote && Array.isArray(remote.data) ? remote.data : StorageService.getData("inventory") || [];
      if (filters.station && filters.station !== "all") {
        list = list.filter((item) => item.location.toLowerCase() === filters.station.toLowerCase());
      }
      if (filters.risk && filters.risk !== "all") {
        list = list.filter((item) => (item.risk || "Low").toLowerCase() === filters.risk.toLowerCase());
      }
      if (filters.search) {
        const q = filters.search.toLowerCase();
        list = list.filter(
          (item) => item.item.toLowerCase().includes(q) || item.responsible && item.responsible.toLowerCase().includes(q) || item.location.toLowerCase().includes(q)
        );
      }
      return list;
    },
    async getById(id) {
      const list = await this.getAll();
      return list.find((item) => String(item.id) === String(id)) || null;
    },
    async create(itemData) {
      const remote = await apiRequest("/inventory", "POST", itemData);
      if (remote && remote.data) return remote.data;
      const list = StorageService.getData("inventory") || [];
      const current = parseFloat(itemData.current) || 0;
      const threshold = parseFloat(itemData.threshold) || 1;
      let risk = "Low";
      if (current < threshold) risk = "High";
      else if (current < threshold * 1.5) risk = "Moderate";
      const newItem = {
        id: itemData.id || Date.now(),
        item: itemData.item.trim(),
        current,
        threshold,
        location: itemData.location.trim(),
        responsible: itemData.responsible ? itemData.responsible.trim() : "Station Officer",
        risk,
        icon: itemData.icon || "fa-boxes-stacked",
        category: itemData.category || "General Supplies",
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      list.unshift(newItem);
      StorageService.saveData("inventory", list);
      return newItem;
    },
    async update(id, updates) {
      const remote = await apiRequest(`/inventory/${id}`, "PATCH", updates);
      if (remote && remote.data) return remote.data;
      const list = StorageService.getData("inventory") || [];
      const index = list.findIndex((item) => String(item.id) === String(id));
      if (index === -1) return null;
      const current = updates.current !== void 0 ? parseFloat(updates.current) : list[index].current;
      const threshold = updates.threshold !== void 0 ? parseFloat(updates.threshold) : list[index].threshold;
      let risk = "Low";
      if (current < threshold) risk = "High";
      else if (current < threshold * 1.5) risk = "Moderate";
      list[index] = {
        ...list[index],
        ...updates,
        current,
        threshold,
        risk,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      StorageService.saveData("inventory", list);
      return list[index];
    },
    async adjustQuantity(id, delta) {
      const list = StorageService.getData("inventory") || [];
      const item = list.find((i) => String(i.id) === String(id));
      if (!item) return null;
      const newCurrent = Math.max(0, (item.current || 0) + delta);
      return await this.update(id, { current: newCurrent });
    },
    async delete(id) {
      await apiRequest(`/inventory/${id}`, "DELETE");
      let list = StorageService.getData("inventory") || [];
      list = list.filter((item) => String(item.id) !== String(id));
      StorageService.saveData("inventory", list);
      return true;
    }
  };
  var PersonnelAPI = {
    async getAll(filters = {}) {
      const remote = await apiRequest("/personnel");
      let list = remote && Array.isArray(remote.data) ? remote.data : StorageService.getData("personnel") || [];
      if (filters.station && filters.station !== "all") {
        list = list.filter((p) => p.station.toLowerCase() === filters.station.toLowerCase());
      }
      if (filters.search) {
        const q = filters.search.toLowerCase();
        list = list.filter(
          (p) => p.name.toLowerCase().includes(q) || p.role.toLowerCase().includes(q) || p.email && p.email.toLowerCase().includes(q)
        );
      }
      return list;
    },
    async create(personData) {
      const remote = await apiRequest("/personnel", "POST", personData);
      if (remote && remote.data) return remote.data;
      const list = StorageService.getData("personnel") || [];
      const newPerson = {
        id: personData.id || Date.now(),
        name: personData.name.trim(),
        role: personData.role.trim(),
        station: personData.station.trim(),
        clearance: personData.clearance || "Level 3",
        team: personData.team || "Scientific Wing",
        status: personData.status || "Active",
        email: personData.email || `${personData.name.toLowerCase().replace(/\s+/g, "")}@gmail.com`,
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      list.unshift(newPerson);
      StorageService.saveData("personnel", list);
      return newPerson;
    },
    async delete(id) {
      await apiRequest(`/personnel/${id}`, "DELETE");
      let list = StorageService.getData("personnel") || [];
      list = list.filter((p) => String(p.id) !== String(id));
      StorageService.saveData("personnel", list);
      return true;
    }
  };
  function exportTableToCsv(filename, rows, headers) {
    if (!rows || !rows.length) {
      alert("No records available to export.");
      return;
    }
    const csvContent = [
      headers.map((h) => `"${h.replace(/"/g, '""')}"`).join(","),
      ...rows.map(
        (row) => row.map((val) => {
          const str = String(val ?? "");
          return `"${str.replace(/"/g, '""')}"`;
        }).join(",")
      )
    ].join("\r\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  // js/analytics.js
  var AnalyticsEngine = class {
    constructor() {
      this.isZeroBaseline = StorageService.getItem("icetrack_analytics_zero_baseline") === "true";
    }
    init() {
      this.bindEvents();
      this.render();
    }
    bindEvents() {
      const btnAddCargo = document.getElementById("btnAnalyticsQuickAddCargo");
      if (btnAddCargo && !btnAddCargo.hasAttribute("data-bound")) {
        btnAddCargo.setAttribute("data-bound", "true");
        btnAddCargo.addEventListener("click", () => {
          this.quickAddCargo();
        });
      }
      const btnDeliver = document.getElementById("btnAnalyticsQuickDeliver");
      if (btnDeliver && !btnDeliver.hasAttribute("data-bound")) {
        btnDeliver.setAttribute("data-bound", "true");
        btnDeliver.addEventListener("click", () => {
          this.quickDeliverCargo();
        });
      }
      const btnReset = document.getElementById("btnAnalyticsResetZero");
      if (btnReset && !btnReset.hasAttribute("data-bound")) {
        btnReset.setAttribute("data-bound", "true");
        btnReset.addEventListener("click", () => {
          this.resetToZero();
        });
      }
    }
    // Quick action: Add new consignment
    quickAddCargo() {
      this.isZeroBaseline = false;
      StorageService.removeItem("icetrack_analytics_zero_baseline");
      const cargoList = StorageService.getData("cargo") || [];
      const newId = `CGO-${Math.floor(1e3 + Math.random() * 9e3)}`;
      const destinations = ["Maitri Station", "Bharati Station", "Dakshin Ice Camp"];
      const dest = destinations[Math.floor(Math.random() * destinations.length)];
      const newItem = {
        id: newId,
        item: "Cryogenic Liquid Nitrogen & Battery Buffer",
        weightKg: 650,
        destination: dest,
        priority: "High",
        status: "In Transit",
        dispatchedDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
      };
      cargoList.unshift(newItem);
      StorageService.saveData("cargo", cargoList);
      this.render();
      if (window.IceTrack && typeof window.IceTrack.renderCargo === "function") {
        window.IceTrack.renderCargo();
      }
      if (window.IceTrack && typeof window.IceTrack.renderDashboardMetrics === "function") {
        window.IceTrack.renderDashboardMetrics();
      }
    }
    // Quick action: Mark a consignment delivered
    quickDeliverCargo() {
      this.isZeroBaseline = false;
      StorageService.removeItem("icetrack_analytics_zero_baseline");
      const cargoList = StorageService.getData("cargo") || [];
      const nonDelivered = cargoList.find((c) => !c.status || !c.status.toLowerCase().includes("deliver"));
      if (nonDelivered) {
        nonDelivered.status = "Delivered";
        StorageService.saveData("cargo", cargoList);
      } else {
        const newId = `CGO-${Math.floor(1e3 + Math.random() * 9e3)}`;
        cargoList.unshift({
          id: newId,
          item: "Geophysical Core Drill Bits & Spares",
          weightKg: 420,
          destination: "Bharati Station",
          priority: "Normal",
          status: "Delivered",
          dispatchedDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
        });
        StorageService.saveData("cargo", cargoList);
      }
      this.render();
      if (window.IceTrack && typeof window.IceTrack.renderCargo === "function") {
        window.IceTrack.renderCargo();
      }
      if (window.IceTrack && typeof window.IceTrack.renderDashboardMetrics === "function") {
        window.IceTrack.renderDashboardMetrics();
      }
    }
    // Reset to 0% baseline
    resetToZero() {
      this.isZeroBaseline = true;
      StorageService.setItem("icetrack_analytics_zero_baseline", "true");
      this.render();
    }
    render() {
      let totalCargo = 0;
      let deliveredCount = 0;
      let transitCount = 0;
      let preparingCount = 0;
      let totalGrossMass = 0;
      let totalInv = 0;
      let safeCount = 0;
      let modCount = 0;
      let highCount = 0;
      let totalExpeditions = 0;
      if (!this.isZeroBaseline) {
        const cargoList = StorageService.getData("cargo") || [];
        const invList = StorageService.getData("inventory") || [];
        const expList = StorageService.getData("expeditions") || [];
        totalCargo = cargoList.length;
        totalExpeditions = expList.length;
        cargoList.forEach((c) => {
          const weight = Number(c.weightKg || c.weight || 0);
          totalGrossMass += weight;
          const st = (c.status || "").toLowerCase();
          if (st.includes("deliver")) {
            deliveredCount++;
          } else if (st.includes("transit") || st.includes("ocean") || st.includes("route")) {
            transitCount++;
          } else {
            preparingCount++;
          }
        });
        totalInv = invList.length;
        invList.forEach((i) => {
          const qty = Number(i.quantity || 0);
          const min = Number(i.minRequired || i.threshold || 100);
          if (qty >= min) {
            safeCount++;
          } else if (qty >= min * 0.5) {
            modCount++;
          } else {
            highCount++;
          }
        });
      }
      const deliveredPct = totalCargo > 0 ? Math.round(deliveredCount / totalCargo * 100) : 0;
      const transitPct = totalCargo > 0 ? Math.round(transitCount / totalCargo * 100) : 0;
      const preparingPct = totalCargo > 0 ? Math.round(preparingCount / totalCargo * 100) : 0;
      const safeStockPct = totalInv > 0 ? Math.round(safeCount / totalInv * 100) : 0;
      const elTotal = document.getElementById("analyticsMetricTotal");
      if (elTotal) elTotal.textContent = totalCargo;
      const elSubTotal = document.getElementById("analyticsSubTotal");
      if (elSubTotal) elSubTotal.textContent = `${(totalGrossMass / 1e3).toFixed(1)} MT Gross Mass`;
      const elDeliveredRate = document.getElementById("analyticsMetricDeliveredRate");
      if (elDeliveredRate) elDeliveredRate.textContent = `${deliveredPct}%`;
      const elSubDelivered = document.getElementById("analyticsSubDelivered");
      if (elSubDelivered) elSubDelivered.textContent = `${deliveredCount} of ${totalCargo} Consignments`;
      const elSafeStock = document.getElementById("analyticsMetricSafeStock");
      if (elSafeStock) elSafeStock.textContent = `${safeStockPct}%`;
      const elSubSafe = document.getElementById("analyticsSubSafe");
      if (elSubSafe) elSubSafe.textContent = `${safeCount} of ${totalInv} Safe Reserves`;
      const elExp = document.getElementById("analyticsMetricExpeditions");
      if (elExp) elExp.textContent = totalExpeditions;
      const elCargoCounter = document.getElementById("analyticsCargoCounter");
      if (elCargoCounter) elCargoCounter.textContent = `${totalCargo} records`;
      const elDeliveredPct = document.getElementById("analyticsDeliveredPct");
      if (elDeliveredPct) elDeliveredPct.textContent = `${deliveredPct}%`;
      const elDeliveredBar = document.getElementById("analyticsDeliveredBar");
      if (elDeliveredBar) elDeliveredBar.style.width = `${deliveredPct}%`;
      const elDeliveredCount = document.getElementById("analyticsDeliveredCount");
      if (elDeliveredCount) elDeliveredCount.textContent = `${deliveredCount} consignments`;
      const elTransitPct = document.getElementById("analyticsTransitPct");
      if (elTransitPct) elTransitPct.textContent = `${transitPct}%`;
      const elTransitBar = document.getElementById("analyticsTransitBar");
      if (elTransitBar) elTransitBar.style.width = `${transitPct}%`;
      const elTransitCount = document.getElementById("analyticsTransitCount");
      if (elTransitCount) elTransitCount.textContent = `${transitCount} consignments`;
      const elPreparingPct = document.getElementById("analyticsPreparingPct");
      if (elPreparingPct) elPreparingPct.textContent = `${preparingPct}%`;
      const elPreparingBar = document.getElementById("analyticsPreparingBar");
      if (elPreparingBar) elPreparingBar.style.width = `${preparingPct}%`;
      const elPreparingCount = document.getElementById("analyticsPreparingCount");
      if (elPreparingCount) elPreparingCount.textContent = `${preparingCount} consignments`;
      const elInvCounter = document.getElementById("analyticsInventoryCounter");
      if (elInvCounter) elInvCounter.textContent = `${totalInv} items`;
      const elSafePct = document.getElementById("analyticsSafeStockPct");
      if (elSafePct) elSafePct.textContent = `${safeStockPct}%`;
      const elRiskCircle = document.getElementById("analyticsRiskCircle");
      if (elRiskCircle) {
        elRiskCircle.setAttribute("stroke-dasharray", `${safeStockPct}, 100`);
      }
      const elLowRisk = document.getElementById("analyticsCountLowRisk");
      if (elLowRisk) elLowRisk.textContent = safeCount;
      const elModRisk = document.getElementById("analyticsCountModerateRisk");
      if (elModRisk) elModRisk.textContent = modCount;
      const elHighRisk = document.getElementById("analyticsCountHighRisk");
      if (elHighRisk) elHighRisk.textContent = highCount;
    }
  };

  // js/app.js
  var IceTrackApp = class {
    constructor() {
      this.currentLang = "en";
      this.currentUser = null;
      this.currentOfficer = null;
      this.authorizedOfficers = AUTHORIZED_OFFICERS;
      this.timerInterval = null;
      this.analyticsEngine = null;
      this.mapMode = "detailed";
      this.detailedMap = null;
      this.dashboardMap = null;
      this.currentDetailedLayer = null;
      this.detailedLayers = {};
      this.globe = {
        projection: null,
        svg: null,
        path: null,
        countries: null,
        currentRotation: [-75, 5, 0],
        currentScale: 280,
        baseScale: 280,
        isAutoRotating: false,
        autoRotateTimer: null,
        showGraticule: true,
        selectedTarget: null,
        isDragging: false,
        initialized: false,
        elements: {}
      };
      try {
        this.init();
      } catch (e) {
        console.warn("Non-fatal initialization warning in IceTrackApp:", e);
      }
    }
    init() {
      try {
        StorageService.init();
      } catch (e) {
        console.warn("StorageService init warning:", e);
      }
      try {
        this.currentLang = StorageService.getLang();
        this.applyLanguage(this.currentLang);
      } catch (e) {
        console.warn("Language init warning:", e);
      }
      try {
        this.bindAuthEvents();
      } catch (e) {
        console.warn("bindAuthEvents warning:", e);
      }
      try {
        this.bindNavigation();
      } catch (e) {
        console.warn("bindNavigation warning:", e);
      }
      try {
        this.bindLanguageSwitch();
      } catch (e) {
        console.warn("bindLanguageSwitch warning:", e);
      }
      try {
        this.initGovPortalUtilities();
      } catch (e) {
        console.warn("initGovPortalUtilities warning:", e);
      }
      try {
        this.initWireframeCarousel();
      } catch (e) {
        console.warn("initWireframeCarousel warning:", e);
      }
      try {
        this.updateClock();
      } catch (e) {
        console.warn("updateClock warning:", e);
      }
      try {
        this.analyticsEngine = new AnalyticsEngine();
        this.analyticsEngine.init();
      } catch (e) {
        console.warn("AnalyticsEngine init warning:", e);
      }
      try {
        const savedEmail = StorageService.getItem("icetrack_user_email");
        if (savedEmail && savedEmail.toLowerCase() === "xyz@gmail.com") {
          this.currentOfficer = {
            name: "XYZ",
            email: "XYZ@gmail.com",
            defaultRole: "manager",
            station: "Bharati",
            designation: "Expedition Operations Lead",
            clearance: "Level 4"
          };
        } else {
          StorageService.removeItem("icetrack_user_email");
          StorageService.removeItem("icetrack_user_name");
          StorageService.removeItem("icetrack_user_role");
          this.currentOfficer = {
            name: "XYZ",
            email: "XYZ@gmail.com",
            defaultRole: "manager",
            station: "Bharati",
            designation: "Expedition Operations Lead",
            clearance: "Level 4"
          };
        }
      } catch (e) {
        console.warn("Officer restore warning:", e);
      }
      if (!this.currentOfficer) {
        this.currentOfficer = this.authorizedOfficers[0];
      }
      try {
        this.updateOfficerUI();
      } catch (e) {
        console.warn("updateOfficerUI warning:", e);
      }
    }
    // --- Auth & Language ---
    bindAuthEvents() {
      const loginForm = document.getElementById("loginForm");
      const logoutBtn = document.getElementById("logoutBtn");
      const oldLogoutBtn = document.getElementById("oldLogoutBtn");
      if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
          e.preventDefault();
          this.handleLoginSubmit();
        });
      }
      if (logoutBtn) {
        logoutBtn.addEventListener("click", () => this.logout());
      }
      if (oldLogoutBtn) {
        oldLogoutBtn.addEventListener("click", () => this.logout());
      }
      const togglePasswordBtn = document.getElementById("togglePasswordBtn");
      if (togglePasswordBtn && !togglePasswordBtn.hasAttribute("data-bound")) {
        togglePasswordBtn.setAttribute("data-bound", "true");
        togglePasswordBtn.addEventListener("click", (e) => {
          if (typeof window.toggleLoginPassword === "function") {
            window.toggleLoginPassword(e);
          } else {
            const passInput = document.getElementById("loginPassword");
            const icon = document.getElementById("togglePasswordIcon");
            if (passInput) {
              if (passInput.type === "password") {
                passInput.type = "text";
                if (icon) icon.className = "fa-solid fa-eye-slash";
              } else {
                passInput.type = "password";
                if (icon) icon.className = "fa-solid fa-eye";
              }
            }
          }
        });
      }
    }
    escapeHtml(str) {
      if (!str) return "";
      return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    }
    handleLoginSubmit() {
      const emailInput = document.getElementById("loginEmail");
      const passwordInput = document.getElementById("loginPassword");
      const roleSelect = document.getElementById("loginRole");
      const alertBox = document.getElementById("loginAlert");
      const enteredEmail = (emailInput?.value || "").trim();
      const enteredPassword = (passwordInput?.value || "").trim();
      if (!enteredEmail || !enteredPassword) {
        this.showLoginError("Please enter both your official email ID and security password.");
        if (!enteredEmail && emailInput) {
          emailInput.focus();
        } else if (passwordInput) {
          passwordInput.focus();
        }
        return;
      }
      const normalizedEmail = enteredEmail.toLowerCase();
      const targetEmail = "xyz@gmail.com";
      const targetPassword = "XYZ@2026";
      if (normalizedEmail !== targetEmail || enteredPassword !== targetPassword) {
        this.showLoginError("Invalid Email or Password. Access Denied: Unauthorized Personnel.");
        if (passwordInput) {
          passwordInput.value = "";
          passwordInput.focus();
        }
        return;
      }
      if (alertBox) alertBox.classList.add("d-none");
      const matchedOfficer = {
        name: "XYZ",
        email: "XYZ@gmail.com",
        defaultRole: roleSelect?.value || "manager",
        station: "Bharati",
        designation: "Expedition Operations Lead",
        clearance: "Level 4"
      };
      const role = roleSelect?.value || "manager";
      this.login(role, matchedOfficer);
    }
    showLoginError(message) {
      const alertBox = document.getElementById("loginAlert");
      const alertText = document.getElementById("loginAlertText");
      if (alertBox && alertText) {
        alertText.textContent = message;
        alertBox.classList.remove("d-none");
        alertBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }
    login(role, officer = null) {
      this.currentUser = role;
      this.currentOfficer = officer || this.authorizedOfficers[0];
      try {
        StorageService.setItem("icetrack_user_email", this.currentOfficer.email);
        StorageService.setItem("icetrack_user_name", this.currentOfficer.name);
        StorageService.setItem("icetrack_user_role", role);
      } catch (e) {
        console.warn("StorageService session warning:", e);
      }
      const loginSection = document.getElementById("loginSection");
      const appSection = document.getElementById("appSection");
      if (loginSection) {
        loginSection.classList.remove("active");
        loginSection.classList.add("d-none");
        loginSection.style.setProperty("display", "none", "important");
      }
      if (appSection) {
        appSection.classList.remove("d-none");
        appSection.style.setProperty("display", "flex", "important");
      }
      try {
        this.updateOfficerUI(role);
      } catch (e) {
        console.warn("Officer UI update warning:", e);
      }
      try {
        this.renderAll();
      } catch (e) {
        console.warn("renderAll execution warning:", e);
      }
      try {
        this.switchView("dashboard");
      } catch (e) {
        console.warn("Dashboard view switch warning:", e);
      }
    }
    logout() {
      this.currentUser = null;
      try {
        StorageService.removeItem("icetrack_user_role");
        StorageService.removeItem("icetrack_user_email");
        StorageService.removeItem("icetrack_user_name");
      } catch {
      }
      const wheelWrapper = document.getElementById("commandWheel");
      if (wheelWrapper) {
        wheelWrapper.classList.remove("active");
      }
      const appSection = document.getElementById("appSection");
      const loginSection = document.getElementById("loginSection");
      if (appSection) {
        appSection.classList.add("d-none");
        appSection.style.setProperty("display", "none", "important");
      }
      if (loginSection) {
        loginSection.classList.remove("d-none");
        loginSection.classList.add("active");
        loginSection.style.setProperty("display", "block", "important");
      }
      const alertBox = document.getElementById("loginAlert");
      if (alertBox) alertBox.classList.add("d-none");
    }
    updateOfficerUI(role = this.currentUser) {
      if (!this.currentOfficer) return;
      const roleName = role === "admin" ? "System Administrator" : role === "manager" ? "Expedition Operations Lead" : "Polar Field Officer";
      const displayRole = document.getElementById("displayRole");
      if (displayRole) displayRole.textContent = this.currentOfficer.designation || roleName;
      const displayOfficerName = document.getElementById("displayOfficerName");
      if (displayOfficerName) displayOfficerName.textContent = this.currentOfficer.name;
      const displayOfficerEmail = document.getElementById("displayOfficerEmail");
      if (displayOfficerEmail) displayOfficerEmail.textContent = this.currentOfficer.email;
      const topbarUserName = document.getElementById("topbarUserName");
      if (topbarUserName) topbarUserName.textContent = this.currentOfficer.name;
      const topbarUserEmail = document.getElementById("topbarUserEmail");
      if (topbarUserEmail) topbarUserEmail.textContent = this.currentOfficer.email;
      const topbarUserAvatar = document.getElementById("topbarUserAvatar");
      if (topbarUserAvatar) topbarUserAvatar.textContent = (this.currentOfficer.name || "A").charAt(0).toUpperCase();
      const homepageHeroUserEmail = document.getElementById("homepageHeroUserEmail");
      if (homepageHeroUserEmail) homepageHeroUserEmail.textContent = this.currentOfficer.email;
      const homepageHeroRoleBadge = document.getElementById("homepageHeroRoleBadge");
      if (homepageHeroRoleBadge) homepageHeroRoleBadge.textContent = this.currentOfficer.designation || roleName;
      const homepageCardUserName = document.getElementById("homepageCardUserName");
      if (homepageCardUserName) homepageCardUserName.textContent = this.currentOfficer.name;
      const homepageCardUserEmail = document.getElementById("homepageCardUserEmail");
      if (homepageCardUserEmail) homepageCardUserEmail.textContent = this.currentOfficer.email;
      const homepageCardAvatar = document.getElementById("homepageCardAvatar");
      if (homepageCardAvatar) homepageCardAvatar.textContent = (this.currentOfficer.name || "A").charAt(0).toUpperCase();
      const homepageCardClearance = document.getElementById("homepageCardClearance");
      if (homepageCardClearance) homepageCardClearance.textContent = `${this.currentOfficer.clearance || "Level 4"} (${this.currentOfficer.station || "Maitri"})`;
    }
    bindLanguageSwitch() {
      const btn = document.getElementById("langSwitchBtn");
      const topCheckbox = document.getElementById("topLangSwitchCheckbox");
      if (topCheckbox) {
        topCheckbox.checked = this.currentLang === "hi";
      }
      const toggleLang = () => {
        this.currentLang = this.currentLang === "en" ? "hi" : "en";
        StorageService.setLang(this.currentLang);
        this.applyLanguage(this.currentLang);
        this.renderAll();
        if (topCheckbox) {
          topCheckbox.checked = this.currentLang === "hi";
        }
      };
      if (btn) {
        btn.addEventListener("click", toggleLang);
      }
      if (topCheckbox) {
        topCheckbox.addEventListener("change", toggleLang);
      }
    }
    applyLanguage(lang) {
      const dict = i18n[lang];
      if (!dict) return;
      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (dict[key]) {
          el.textContent = dict[key];
        }
      });
      const langLabel = document.getElementById("currentLangLabel");
      if (langLabel) {
        langLabel.textContent = lang === "en" ? "ENG" : "HIN";
      }
      const topLangLabel = document.getElementById("topCurrentLangLabel");
      if (topLangLabel) {
        topLangLabel.textContent = lang === "en" ? "ENG" : "HIN";
      }
    }
    updateClock() {
      const clockEl = document.getElementById("globalTime");
      const istEl = document.getElementById("dashLiveIST");
      const utcEl = document.getElementById("dashLiveUTC");
      const updateTimes = () => {
        const now = /* @__PURE__ */ new Date();
        if (clockEl) {
          clockEl.textContent = now.toISOString().substring(11, 19) + " UTC";
        }
        if (istEl) {
          istEl.textContent = now.toLocaleTimeString("en-GB", { timeZone: "Asia/Kolkata", hour12: false }) + " IST";
        }
        if (utcEl) {
          utcEl.textContent = now.toISOString().substring(11, 19) + " UTC";
        }
      };
      updateTimes();
      this.timerInterval = setInterval(updateTimes, 1e3);
    }
    // --- Navigation & View Management ---
    bindNavigation() {
      document.querySelectorAll(".nav-link[data-target], .module-chip[data-target], .gov-top-nav-btn[data-target]").forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const target = e.currentTarget.getAttribute("data-target");
          this.switchView(target);
        });
      });
      const mobileToggle = document.getElementById("mobileMenuToggle");
      if (mobileToggle) {
        mobileToggle.addEventListener("click", () => {
          document.querySelector(".sidebar").classList.toggle("show");
        });
      }
      document.querySelectorAll(".sidebar-nav .nav-link").forEach((link) => {
        link.addEventListener("click", () => {
          if (window.innerWidth <= 768) {
            document.querySelector(".sidebar").classList.remove("show");
          }
        });
      });
      const wheelWrapper = document.getElementById("commandWheel");
      const wheelBtn = document.getElementById("commandWheelBtn");
      if (wheelBtn && wheelWrapper) {
        wheelBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          wheelWrapper.classList.toggle("active");
        });
        document.addEventListener("click", (e) => {
          if (!wheelWrapper.contains(e.target)) {
            wheelWrapper.classList.remove("active");
          }
        });
      }
      window.quickNavigate = (viewId) => this.quickNavigate(viewId);
      const btnDetailed = document.getElementById("btnModeDetailed");
      const btnGlobe = document.getElementById("btnModeGlobe");
      if (btnDetailed) {
        btnDetailed.addEventListener("click", () => this.setMapMode("detailed"));
      }
      if (btnGlobe) {
        btnGlobe.addEventListener("click", () => this.setMapMode("globe"));
      }
    }
    quickNavigate(viewId) {
      const wheelWrapper = document.getElementById("commandWheel");
      if (wheelWrapper) wheelWrapper.classList.remove("active");
      if (!this.currentUser) {
        const defaultOfficer = this.authorizedOfficers[0];
        this.login(defaultOfficer.defaultRole || "manager", defaultOfficer);
      }
      this.switchView(viewId);
    }
    switchView(viewId) {
      document.querySelectorAll(".view-section").forEach((view) => {
        if (view.id !== `view-${viewId}`) {
          view.classList.remove("active");
          setTimeout(() => {
            if (!view.classList.contains("active")) {
              view.classList.add("d-none");
            }
          }, 300);
        }
      });
      document.querySelectorAll(".nav-link, .gov-top-nav-btn").forEach((link) => {
        link.classList.remove("active");
      });
      const targetView = document.getElementById(`view-${viewId}`);
      if (targetView) {
        targetView.classList.remove("d-none");
        setTimeout(() => {
          targetView.classList.add("active");
          if (viewId === "dashboard") {
            this.renderWireframeSlide();
            if (this.dashboardMap) {
              setTimeout(() => this.dashboardMap?.invalidateSize(), 80);
            } else {
              this.initDashboardMap();
            }
          } else if (viewId === "map") {
            if (this.mapMode === "detailed") {
              if (!this.detailedMap) {
                this.initDetailedMap();
              } else {
                setTimeout(() => this.detailedMap?.invalidateSize(), 80);
              }
            } else {
              if (!this.globe.initialized) {
                this.initGlobe();
              } else {
                this.resizeGlobe();
              }
            }
          } else if (viewId === "analytics") {
            if (!this.analyticsEngine) {
              this.analyticsEngine = new AnalyticsEngine();
            }
            this.analyticsEngine.init();
          }
        }, 50);
      }
      document.querySelectorAll(`.nav-link[data-target="${viewId}"], .gov-top-nav-btn[data-target="${viewId}"]`).forEach((link) => {
        link.classList.add("active");
      });
      const targetLink = document.querySelector(`.nav-link[data-target="${viewId}"]`);
      if (targetLink) {
        const pageTitle = document.getElementById("pageTitle");
        if (pageTitle) {
          pageTitle.textContent = targetLink.textContent.trim();
        }
      }
    }
    // --- Minimalist Wireframe Homepage Logic (Directly Inspired by Uploaded Diagram) ---
    initWireframeCarousel() {
      this.wireframeSlideIndex = 0;
      this.wireframeSlides = [
        {
          title: "RV Sagar Nidhi \u2014 Southern Ocean Transit",
          subtitle: "Antarctic Resupply Vessel (ISEA-44 Logistics Voyage)",
          badge: "EXPEDITION ACTIVE",
          badgeClass: "bg-success text-white",
          icon: "fa-ship",
          iconColor: "text-primary",
          description: "Ice-class cargo carrier transporting 124 MT of arctic low-temp diesel, high-altitude rations, and deep ice-drilling sensors. Currently holding course at 54\xB012'S 68\xB030'E toward Prydz Bay.",
          metric1: { label: "Speed", value: "14.2 kts" },
          metric2: { label: "Cargo Buffer", value: "94% Optimal" },
          actionText: "Track Vessel in Cargo \u2197",
          actionView: "cargo"
        },
        {
          title: "Maitri Station \u2014 Schirmacher Oasis Telemetry",
          subtitle: "India's Inland Polar Research Hub (70\xB045'S 11\xB044'E)",
          badge: "BLIZZARD LEVEL-2",
          badgeClass: "bg-warning text-dark",
          icon: "fa-snowflake",
          iconColor: "text-info",
          description: "Atmospheric aerosol monitoring and deep permafrost thermal profiling. Ambient temperature is -24.2\xB0C with katabatic gusts to 48 kts. Heating life support fully stabilized.",
          metric1: { label: "Wintering Crew", value: "18 Scientists" },
          metric2: { label: "Life Support", value: "275 Days" },
          actionText: "View Station in Map \u2197",
          actionView: "map"
        },
        {
          title: "Bharati Station \u2014 Larsemann Hills Space Relay",
          subtitle: "Coastal Station & High-Latitude Earth Observation Base",
          badge: "SATCOM OPTIMAL",
          badgeClass: "bg-primary text-white",
          icon: "fa-satellite-dish",
          iconColor: "text-success",
          description: "Continuous polar satellite downlink via ISRO GSAT-7A transponder. Utilizing co-generation wind and solar power with zero uninterrupted communication downtime.",
          metric1: { label: "Data Uplink", value: "99.98% Transponder" },
          metric2: { label: "Deployed Crew", value: "28 Personnel" },
          actionText: "Check Telemetry Analytics \u2197",
          actionView: "analytics"
        }
      ];
      document.addEventListener("click", (e) => {
        const dropdown = document.getElementById("wireframeStationsDropdown");
        if (dropdown && !dropdown.contains(e.target)) {
          dropdown.classList.remove("open");
        }
      });
      this.renderWireframeSlide();
    }
    renderWireframeSlide() {
      const container = document.getElementById("wireframeSlideDisplay");
      if (!container || !this.wireframeSlides) return;
      const slide = this.wireframeSlides[this.wireframeSlideIndex];
      if (!slide) return;
      container.innerHTML = `
      <div class="d-flex align-items-center gap-2 mb-2">
        <span class="badge ${slide.badgeClass}" style="font-size: 0.68rem; font-weight: 700;">${slide.badge}</span>
        <span class="text-muted font-monospace" style="font-size: 0.75rem;">MISSION ${this.wireframeSlideIndex + 1} OF ${this.wireframeSlides.length}</span>
      </div>
      <div class="mb-2">
        <i class="fa-solid ${slide.icon} ${slide.iconColor}" style="font-size: 2.2rem;"></i>
      </div>
      <h5 class="fw-bold text-dark mb-1">${slide.title}</h5>
      <div class="text-muted small mb-2">${slide.subtitle}</div>
      <p class="text-secondary small mb-3" style="max-width: 540px; line-height: 1.5;">${slide.description}</p>
      
      <div class="d-flex align-items-center gap-3 mb-3 font-monospace small bg-white border border-dark px-3 py-1">
        <div><strong>${slide.metric1.label}:</strong> <span class="text-primary">${slide.metric1.value}</span></div>
        <div class="text-muted">|</div>
        <div><strong>${slide.metric2.label}:</strong> <span class="text-success">${slide.metric2.value}</span></div>
      </div>

      <button class="btn btn-sm btn-dark px-3 fw-bold rounded-0" onclick="window.IceTrack.switchView('${slide.actionView}')">
        ${slide.actionText}
      </button>
    `;
      const dots = document.querySelectorAll("#wireframeCarouselDots .wireframe-dot");
      dots.forEach((dot, idx) => {
        if (idx === this.wireframeSlideIndex) {
          dot.classList.add("active");
        } else {
          dot.classList.remove("active");
        }
      });
    }
    nextWireframeSlide() {
      if (!this.wireframeSlides) return;
      this.wireframeSlideIndex = (this.wireframeSlideIndex + 1) % this.wireframeSlides.length;
      this.renderWireframeSlide();
    }
    prevWireframeSlide() {
      if (!this.wireframeSlides) return;
      this.wireframeSlideIndex = (this.wireframeSlideIndex - 1 + this.wireframeSlides.length) % this.wireframeSlides.length;
      this.renderWireframeSlide();
    }
    setWireframeSlide(idx) {
      if (!this.wireframeSlides || idx < 0 || idx >= this.wireframeSlides.length) return;
      this.wireframeSlideIndex = idx;
      this.renderWireframeSlide();
    }
    toggleWireframeDropdown(event) {
      if (event) event.stopPropagation();
      const dropdown = document.getElementById("wireframeStationsDropdown");
      if (dropdown) {
        dropdown.classList.toggle("open");
      }
    }
    toggleWireframeDrawer() {
      const drawer = document.getElementById("wireframeDrawer");
      const backdrop = document.getElementById("wireframeDrawerBackdrop");
      if (drawer && backdrop) {
        drawer.classList.toggle("show");
        backdrop.classList.toggle("show");
      }
    }
    closeWireframeDrawer() {
      const drawer = document.getElementById("wireframeDrawer");
      const backdrop = document.getElementById("wireframeDrawerBackdrop");
      if (drawer && backdrop) {
        drawer.classList.remove("show");
        backdrop.classList.remove("show");
      }
    }
    drawerNavigate(viewId) {
      this.closeWireframeDrawer();
      this.switchView(viewId);
    }
    // Official Gazette Modal / Notification
    showGovGazetteModal() {
      alert("ICETRACK OFFICIAL GAZETTE DIRECTIVES\n\n\u2022 NCPOR/POLAR/2026/044: Winter fuel rationing & emergency heating fuel reserve cleared for Maitri.\n\u2022 MoES/ISEA44/MAR/012: RV Sagar Nidhi ice-class vessel departure clearance from Mormugao Port.\n\u2022 ISRO/SATCOM/7A/99: Polar GSAT-7A transponder frequency security update and encryption key rotation.");
    }
    // Download Gazette PDF action
    downloadGazettePDF(circularNo) {
      alert(`[OFFICIAL DOCUMENT VERIFIED]

Generating sealed MoES/NCPOR clearance docket for circular: ${circularNo}

Digital Signature: VALID (STQC / NIC SHA-256)
Status: Ready for Field Download.`);
    }
    // Quick Dispatch Action
    triggerDispatchAction(type) {
      if (type === "advisory") {
        alert("STATION ADVISORY ISSUED\n\nAdvisory Level-2 Blizzard Warning transmitted to Maitri and Dakshin Camp via GSAT-7A transponder. Station wintering crew notified.");
      } else if (type === "fuel") {
        alert("CRYO-FUEL RATIONING AUTHORIZED\n\nDirective logged with NCPOR Polar Wing. Cryogenic reserve heating allocation locked for 275 sub-zero operating days.");
      }
    }
    // SATCOM Ping Action
    triggerSatcomPing() {
      alert("GSAT-7A MIL-SATCOM UPLINK TEST\n\nTarget: Antarctic Station Relay Transponder CH-12\nLatency: 98 ms\nSignal Integrity: 99.98% Optimal\nStatus: SECURE TELEMETRY ACTIVE");
    }
    // --- Rendering & Logic ---
    renderAll() {
      try {
        this.renderDashboardMetrics();
      } catch (e) {
        console.warn("renderDashboardMetrics warning:", e);
      }
      try {
        this.renderExpeditions();
      } catch (e) {
        console.warn("renderExpeditions warning:", e);
      }
      try {
        this.renderCargo();
      } catch (e) {
        console.warn("renderCargo warning:", e);
      }
      try {
        this.renderInventory();
      } catch (e) {
        console.warn("renderInventory warning:", e);
      }
      try {
        this.renderPersonnel();
      } catch (e) {
        console.warn("renderPersonnel warning:", e);
      }
      try {
        this.bindForms();
      } catch (e) {
        console.warn("bindForms warning:", e);
      }
      try {
        this.initDashboardMap();
      } catch (e) {
        console.warn("initDashboardMap warning:", e);
      }
      try {
        this.initMap();
      } catch (e) {
        console.warn("initMap warning:", e);
      }
      try {
        if (this.analyticsEngine) {
          this.analyticsEngine.render();
        }
      } catch (e) {
        console.warn("AnalyticsEngine render warning:", e);
      }
    }
    // --- Geospatial Command & Map Orchestration ---
    setMapMode(mode) {
      this.mapMode = mode;
      const btnDetailed = document.getElementById("btnModeDetailed");
      const btnGlobe = document.getElementById("btnModeGlobe");
      const leafletCont = document.getElementById("leafletMapContainer");
      const globeCont = document.getElementById("d3MapContainer");
      const layerGroup = document.getElementById("leafletLayerGroup");
      const globeControls = document.getElementById("globeSpecificControls");
      const mapHeading = document.getElementById("mapMainHeading");
      const mapHint = document.getElementById("mapModeHint");
      if (mode === "detailed") {
        btnDetailed?.classList.add("active", "btn-primary");
        btnDetailed?.classList.remove("btn-outline-primary");
        btnGlobe?.classList.remove("active", "btn-primary");
        btnGlobe?.classList.add("btn-outline-primary");
        leafletCont?.classList.remove("d-none");
        globeCont?.classList.add("d-none");
        layerGroup?.classList.remove("d-none");
        globeControls?.classList.add("d-none");
        if (mapHeading) mapHeading.textContent = "Polar Operations Geospatial Command (Detailed Map)";
        if (mapHint) mapHint.innerHTML = '<i class="fa-solid fa-circle-info text-warning me-1"></i> Interactive Detailed Map &bull; Click any port or station for intelligence dossier &bull; Zoom into berths';
        if (!this.detailedMap) {
          this.initDetailedMap();
        } else {
          setTimeout(() => this.detailedMap?.invalidateSize(), 80);
        }
      } else {
        btnGlobe?.classList.add("active", "btn-primary");
        btnGlobe?.classList.remove("btn-outline-primary");
        btnDetailed?.classList.remove("active", "btn-primary");
        btnDetailed?.classList.add("btn-outline-primary");
        globeCont?.classList.remove("d-none");
        leafletCont?.classList.add("d-none");
        globeControls?.classList.remove("d-none");
        layerGroup?.classList.add("d-none");
        if (mapHeading) mapHeading.textContent = "Rotatable 3D Polar Operations Globe (India & Antarctica)";
        if (mapHint) mapHint.innerHTML = '<i class="fa-solid fa-hand-pointer text-warning me-1"></i> Click & drag in any direction to rotate 3D globe &bull; Scroll to zoom &bull; Click markers for dossier';
        if (!this.globe.initialized) {
          this.initGlobe();
        } else {
          this.resizeGlobe();
        }
      }
    }
    initMap() {
      this.populateLocationPills();
      this.bindGlobeControls();
      if (this.mapMode === "detailed") {
        this.initDetailedMap();
      } else {
        this.initGlobe();
      }
      this.showLocationDossier(INDIAN_PORTS[0]);
    }
    // --- Detailed Leaflet Map (Geospatial View) ---
    initDetailedMap() {
      const container = document.getElementById("leafletMapContainer");
      if (!container || this.detailedMap || typeof L === "undefined") return;
      try {
        const map = L.map("leafletMapContainer", {
          center: [-10, 75],
          zoom: 3,
          minZoom: 2,
          maxZoom: 18,
          zoomControl: false,
          attributionControl: false
        });
        L.control.zoom({ position: "bottomleft" }).addTo(map);
        const googleHybridLayer = L.tileLayer("https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}", {
          maxZoom: 20,
          subdomains: ["mt0", "mt1", "mt2", "mt3"]
        });
        const googleRoadLayer = L.tileLayer("https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
          maxZoom: 20,
          subdomains: ["mt0", "mt1", "mt2", "mt3"]
        });
        const oceanLayer = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}", { maxZoom: 13 });
        const voyagerLayer = L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", { maxZoom: 19, subdomains: "abcd" });
        const satelliteLayer = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", { maxZoom: 18 });
        googleHybridLayer.addTo(map);
        this.currentDetailedLayer = googleHybridLayer;
        this.detailedLayers = {
          googleHybrid: googleHybridLayer,
          googleRoad: googleRoadLayer,
          ocean: oceanLayer,
          voyager: voyagerLayer,
          satellite: satelliteLayer
        };
        const btnGHybrid = document.getElementById("btnLayerGoogleHybrid");
        const btnGRoad = document.getElementById("btnLayerGoogleRoad");
        const btnOcean = document.getElementById("btnLayerOcean");
        const btnVoyager = document.getElementById("btnLayerVoyager");
        const btnSat = document.getElementById("btnLayerSatellite");
        const allLayerBtns = [btnGHybrid, btnGRoad, btnOcean, btnVoyager, btnSat];
        const setLayer = (name, activeBtn) => {
          allLayerBtns.forEach((b) => {
            b?.classList.remove("active", "btn-primary");
            b?.classList.add("btn-outline-secondary");
          });
          activeBtn?.classList.add("active", "btn-primary");
          activeBtn?.classList.remove("btn-outline-secondary");
          if (this.currentDetailedLayer) {
            map.removeLayer(this.currentDetailedLayer);
          }
          this.currentDetailedLayer = this.detailedLayers[name];
          this.currentDetailedLayer.addTo(map);
        };
        btnGHybrid?.addEventListener("click", () => setLayer("googleHybrid", btnGHybrid));
        btnGRoad?.addEventListener("click", () => setLayer("googleRoad", btnGRoad));
        btnOcean?.addEventListener("click", () => setLayer("ocean", btnOcean));
        btnVoyager?.addEventListener("click", () => setLayer("voyager", btnVoyager));
        btnSat?.addEventListener("click", () => setLayer("satellite", btnSat));
        EXPEDITION_ROUTES.forEach((route) => {
          const latlngs = route.coordinates.map((coord) => [coord[1], coord[0]]);
          const polyline = L.polyline(latlngs, {
            color: "#0284c7",
            weight: 3.5,
            dashArray: "8, 8",
            opacity: 0.85
          }).addTo(map);
          polyline.bindTooltip(`<b>${route.name}</b>`, { sticky: true });
        });
        INDIAN_PORTS.forEach((port) => {
          const icon = L.divIcon({
            className: "leaflet-custom-marker",
            html: `<div class="tactical-marker-pin port-pin" title="${port.name}">
                  <i class="fa-solid fa-anchor" style="font-size: 13px;"></i>
                  <div class="tactical-pulse-ring"></div>
                 </div>`,
            iconSize: [34, 34],
            iconAnchor: [17, 17]
          });
          const marker = L.marker([port.lat, port.lon], { icon }).addTo(map);
          marker.on("click", () => this.showLocationDossier(port));
          marker.bindPopup(`
          <div class="tactical-map-popup p-1" style="min-width: 220px;">
            <div class="tactical-popup-header d-flex justify-content-between align-items-center mb-1">
              <strong class="text-warning"><i class="fa-solid fa-anchor me-1"></i>${port.name}</strong>
              <span class="badge bg-warning text-dark" style="font-size: 0.65rem;">PORT</span>
            </div>
            <div class="small text-light mb-1">${port.category || port.state}</div>
            <div class="small text-muted font-monospace mb-2">${port.lat.toFixed(3)}\xB0N, ${port.lon.toFixed(3)}\xB0E</div>
            <div class="small text-info mb-2"><i class="fa-solid fa-boxes-packing me-1"></i>${port.activeOps}</div>
            <button class="btn btn-xs btn-primary w-100" onclick="window.IceTrack.showLocationDossierById('port', '${port.id}')">
              <i class="fa-solid fa-circle-info me-1"></i> Open Dossier
            </button>
          </div>
        `);
        });
        ANTARCTICA_STATIONS.forEach((station) => {
          const icon = L.divIcon({
            className: "leaflet-custom-marker",
            html: `<div class="tactical-marker-pin base-pin" title="${station.name}">
                  <i class="fa-solid fa-snowflake" style="font-size: 13px;"></i>
                  <div class="tactical-pulse-ring"></div>
                 </div>`,
            iconSize: [34, 34],
            iconAnchor: [17, 17]
          });
          const marker = L.marker([station.lat, station.lon], { icon }).addTo(map);
          marker.on("click", () => this.showLocationDossier(station));
          marker.bindPopup(`
          <div class="tactical-map-popup p-1" style="min-width: 220px;">
            <div class="tactical-popup-header d-flex justify-content-between align-items-center mb-1">
              <strong class="text-info"><i class="fa-solid fa-snowflake me-1"></i>${station.name}</strong>
              <span class="badge bg-info text-dark" style="font-size: 0.65rem;">${station.status?.split("\u2022")[0] || "STATION"}</span>
            </div>
            <div class="small text-light mb-1">${station.region}</div>
            <div class="small text-muted font-monospace mb-2">${Math.abs(station.lat).toFixed(3)}\xB0S, ${station.lon.toFixed(3)}\xB0E</div>
            <div class="small text-warning mb-2"><i class="fa-solid fa-satellite-dish me-1"></i>${station.activeOps}</div>
            <button class="btn btn-xs btn-info text-dark fw-bold w-100" onclick="window.IceTrack.showLocationDossierById('antarctica', '${station.id}')">
              <i class="fa-solid fa-circle-info me-1"></i> Open Dossier
            </button>
          </div>
        `);
        });
        POLAR_VESSELS.forEach((vessel) => {
          const icon = L.divIcon({
            className: "leaflet-custom-marker",
            html: `<div class="tactical-marker-pin ship-pin" title="${vessel.name}">
                  <i class="fa-solid fa-ship" style="font-size: 12px;"></i>
                  <div class="tactical-pulse-ring"></div>
                 </div>`,
            iconSize: [32, 32],
            iconAnchor: [16, 16]
          });
          const marker = L.marker([vessel.lat, vessel.lon], { icon }).addTo(map);
          marker.on("click", () => this.showLocationDossier(vessel));
          marker.bindPopup(`
          <div class="tactical-map-popup p-1" style="min-width: 220px;">
            <div class="tactical-popup-header d-flex justify-content-between align-items-center mb-1">
              <strong class="text-success"><i class="fa-solid fa-ship me-1"></i>${vessel.name}</strong>
              <span class="badge bg-success text-white" style="font-size: 0.65rem;">VESSEL</span>
            </div>
            <div class="small text-light mb-1">${vessel.status}</div>
            <div class="small text-muted mb-2">Heading: ${vessel.heading} &bull; ${vessel.speed}</div>
            <button class="btn btn-xs btn-success text-white w-100" onclick="window.IceTrack.showLocationDossierById('ship', '${vessel.id}')">
              <i class="fa-solid fa-circle-info me-1"></i> Open Dossier
            </button>
          </div>
        `);
        });
        this.detailedMap = map;
        setTimeout(() => map.invalidateSize(), 150);
      } catch (err) {
        console.warn("Detailed Map initialization error:", err);
      }
    }
    // --- Live Operational Map on Dashboard ---
    initDashboardMap() {
      const container = document.getElementById("dashboardLeafletMap");
      if (!container || this.dashboardMap || typeof L === "undefined") return;
      try {
        const map = L.map("dashboardLeafletMap", {
          center: [-15, 75],
          zoom: 3,
          minZoom: 2,
          maxZoom: 12,
          zoomControl: false,
          attributionControl: false
        });
        L.control.zoom({ position: "bottomleft" }).addTo(map);
        L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
          maxZoom: 18,
          subdomains: "abcd"
        }).addTo(map);
        EXPEDITION_ROUTES.forEach((route) => {
          const latlngs = route.coordinates.map((coord) => [coord[1], coord[0]]);
          L.polyline(latlngs, {
            color: "#0284c7",
            weight: 2.8,
            dashArray: "6, 6",
            opacity: 0.75
          }).addTo(map).bindTooltip(`<b>${route.name}</b>`);
        });
        INDIAN_PORTS.forEach((port) => {
          const icon = L.divIcon({
            className: "leaflet-custom-marker",
            html: `<div class="tactical-marker-pin port-pin" title="${port.name}">
                  <i class="fa-solid fa-anchor" style="font-size: 11px;"></i>
                  <div class="tactical-pulse-ring"></div>
                 </div>`,
            iconSize: [28, 28],
            iconAnchor: [14, 14]
          });
          const marker = L.marker([port.lat, port.lon], { icon }).addTo(map);
          marker.bindPopup(`
          <div class="tactical-map-popup p-1" style="min-width: 200px;">
            <div class="tactical-popup-header d-flex justify-content-between align-items-center mb-1">
              <strong class="text-warning"><i class="fa-solid fa-anchor me-1"></i>${port.name}</strong>
            </div>
            <div class="small text-light mb-1">${port.category || port.state}</div>
            <div class="small text-info mb-2">${port.activeOps}</div>
            <button class="btn btn-xs btn-primary w-100" onclick="window.IceTrack.inspectFromMap('port', '${port.id}')">
              <i class="fa-solid fa-compass me-1"></i> Geospatial Dossier
            </button>
          </div>
        `);
        });
        ANTARCTICA_STATIONS.forEach((station) => {
          const icon = L.divIcon({
            className: "leaflet-custom-marker",
            html: `<div class="tactical-marker-pin base-pin" title="${station.name}">
                  <i class="fa-solid fa-snowflake" style="font-size: 11px;"></i>
                  <div class="tactical-pulse-ring"></div>
                 </div>`,
            iconSize: [28, 28],
            iconAnchor: [14, 14]
          });
          const marker = L.marker([station.lat, station.lon], { icon }).addTo(map);
          marker.bindPopup(`
          <div class="tactical-map-popup p-1" style="min-width: 200px;">
            <div class="tactical-popup-header d-flex justify-content-between align-items-center mb-1">
              <strong class="text-info"><i class="fa-solid fa-snowflake me-1"></i>${station.name}</strong>
            </div>
            <div class="small text-light mb-1">${station.region}</div>
            <div class="small text-warning mb-2">${station.status}</div>
            <button class="btn btn-xs btn-info text-dark fw-bold w-100" onclick="window.IceTrack.inspectFromMap('antarctica', '${station.id}')">
              <i class="fa-solid fa-compass me-1"></i> Geospatial Dossier
            </button>
          </div>
        `);
        });
        POLAR_VESSELS.forEach((vessel) => {
          const icon = L.divIcon({
            className: "leaflet-custom-marker",
            html: `<div class="tactical-marker-pin ship-pin" title="${vessel.name}">
                  <i class="fa-solid fa-ship" style="font-size: 11px;"></i>
                  <div class="tactical-pulse-ring"></div>
                 </div>`,
            iconSize: [28, 28],
            iconAnchor: [14, 14]
          });
          const marker = L.marker([vessel.lat, vessel.lon], { icon }).addTo(map);
          marker.bindPopup(`
          <div class="tactical-map-popup p-1" style="min-width: 200px;">
            <div class="tactical-popup-header d-flex justify-content-between align-items-center mb-1">
              <strong class="text-success"><i class="fa-solid fa-ship me-1"></i>${vessel.name}</strong>
            </div>
            <div class="small text-light mb-1">${vessel.status}</div>
            <div class="small text-muted mb-2">${vessel.speed} &bull; ${vessel.heading}</div>
            <button class="btn btn-xs btn-success text-white w-100" onclick="window.IceTrack.inspectFromMap('ship', '${vessel.id}')">
              <i class="fa-solid fa-compass me-1"></i> Geospatial Dossier
            </button>
          </div>
        `);
        });
        this.dashboardMap = map;
        document.getElementById("btnDashFocusIndia")?.addEventListener("click", () => {
          map.flyTo([18.5, 77.5], 5, { duration: 1.2 });
        });
        document.getElementById("btnDashFocusAntarctica")?.addEventListener("click", () => {
          map.flyTo([-72, 45], 4, { duration: 1.2 });
        });
        document.getElementById("btnDashFitAll")?.addEventListener("click", () => {
          map.flyTo([-15, 75], 3, { duration: 1.2 });
        });
        setTimeout(() => map.invalidateSize(), 150);
      } catch (err) {
        console.warn("Dashboard Map initialization error:", err);
      }
    }
    inspectFromMap(type, id) {
      this.switchView("map");
      this.showLocationDossierById(type, id);
    }
    showLocationDossierById(type, id) {
      let target = null;
      if (type === "port") target = INDIAN_PORTS.find((p) => p.id === id);
      else if (type === "antarctica") target = ANTARCTICA_STATIONS.find((s) => s.id === id);
      else if (type === "ship") target = POLAR_VESSELS.find((v) => v.id === id);
      if (target) {
        this.showLocationDossier(target);
        this.focusLocation(target);
      }
    }
    focusPreset(name) {
      if (this.mapMode === "detailed" && this.detailedMap) {
        if (name === "india") this.detailedMap.flyTo([18.5, 77.5], 5, { duration: 1.2 });
        else if (name === "antarctica") this.detailedMap.flyTo([-72, 45], 4, { duration: 1.2 });
        else if (name === "corridor") this.detailedMap.flyTo([-15, 75], 3, { duration: 1.2 });
        else this.detailedMap.flyTo([-10, 75], 3, { duration: 1.2 });
      } else if (this.globe.initialized) {
        if (name === "india") this.flyTo(77, 18, this.globe.baseScale * 1.35);
        else if (name === "antarctica") this.flyTo(45, -78, this.globe.baseScale * 1.35);
        else if (name === "corridor") this.flyTo(65, -30, this.globe.baseScale * 1.05);
        else this.flyTo(75, 5, this.globe.baseScale);
      }
    }
    focusLocation(item) {
      if (!item) return;
      if (this.mapMode === "detailed" && this.detailedMap) {
        const zoom = item.type === "port" ? 8 : item.type === "antarctica" ? 6 : 6;
        this.detailedMap.flyTo([item.lat, item.lon], zoom, { duration: 1.2 });
      } else if (this.globe.initialized) {
        const scale = item.type === "port" ? this.globe.baseScale * 1.4 : this.globe.baseScale * 1.35;
        this.flyTo(item.lon, item.lat, scale);
      }
    }
    // --- Rotatable 3D Polar Operations Globe (Indian Ports & Antarctica) ---
    async initGlobe() {
      const container = document.getElementById("d3MapContainer");
      if (!container) return;
      if (typeof d3 === "undefined") {
        container.innerHTML = `
        <div class="d-flex flex-column align-items-center justify-content-center h-100 p-4 text-center">
          <i class="fa-solid fa-earth-americas fa-3x text-primary mb-3"></i>
          <h5 class="fw-bold">Polar Geospatial Visualization</h5>
          <p class="text-muted small mb-0">Interactive 3D vector projection ready. Switch to Detailed Satellite Map for high-resolution navigation.</p>
        </div>
      `;
        return;
      }
      if (this.globe.initialized) {
        this.resizeGlobe();
        return;
      }
      const width = container.clientWidth || 800;
      const height = container.clientHeight || 540;
      const radius = Math.min(width, height) * 0.42;
      this.globe.baseScale = radius;
      this.globe.currentScale = radius;
      this.globe.currentRotation = [-75, 5, 0];
      container.innerHTML = "";
      const svg = d3.select("#d3MapContainer").append("svg").attr("width", "100%").attr("height", "100%").attr("viewBox", `0 0 ${width} ${height}`).attr("preserveAspectRatio", "xMidYMid meet");
      this.globe.svg = svg;
      this.globe.width = width;
      this.globe.height = height;
      const projection = d3.geoOrthographic().scale(this.globe.currentScale).rotate(this.globe.currentRotation).translate([width / 2, height / 2]).clipAngle(90).precision(0.3);
      const path = d3.geoPath().projection(projection);
      this.globe.projection = projection;
      this.globe.path = path;
      const defs = svg.append("defs");
      const oceanGrad = defs.append("radialGradient").attr("id", "oceanGradient").attr("cx", "50%").attr("cy", "50%").attr("r", "50%");
      oceanGrad.append("stop").attr("offset", "0%").attr("stop-color", "#0e2a47");
      oceanGrad.append("stop").attr("offset", "70%").attr("stop-color", "#07182c");
      oceanGrad.append("stop").attr("offset", "100%").attr("stop-color", "#020a14");
      const glowFilter = defs.append("filter").attr("id", "globeGlow").attr("x", "-20%").attr("y", "-20%").attr("width", "140%").attr("height", "140%");
      glowFilter.append("feGaussianBlur").attr("stdDeviation", "3").attr("result", "glow");
      const feMerge = glowFilter.append("feMerge");
      feMerge.append("feMergeNode").attr("in", "glow");
      feMerge.append("feMergeNode").attr("in", "SourceGraphic");
      const gAtmosphere = svg.append("g").attr("class", "layer-atmosphere");
      const gOcean = svg.append("g").attr("class", "layer-ocean");
      const gGraticule = svg.append("g").attr("class", "layer-graticule");
      const gLand = svg.append("g").attr("class", "layer-land");
      const gRoutes = svg.append("g").attr("class", "layer-routes");
      const gShips = svg.append("g").attr("class", "layer-ships");
      const gPorts = svg.append("g").attr("class", "layer-ports");
      const gBases = svg.append("g").attr("class", "layer-bases");
      const atmosphereCircle = gAtmosphere.append("circle").attr("class", "globe-atmosphere").attr("cx", width / 2).attr("cy", height / 2).attr("r", this.globe.currentScale + 2);
      const oceanSphere = gOcean.append("path").datum({ type: "Sphere" }).attr("class", "globe-sphere").attr("d", path);
      const graticulePath = gGraticule.append("path").datum(d3.geoGraticule10()).attr("class", "globe-graticule").attr("d", path);
      this.globe.elements = {
        atmosphereCircle,
        oceanSphere,
        graticulePath,
        gLand,
        gRoutes,
        gShips,
        gPorts,
        gBases
      };
      let startPos = [0, 0];
      let startRot = [...this.globe.currentRotation];
      const drag = d3.drag().on("start", (event) => {
        this.stopAutoRotate();
        this.globe.isDragging = true;
        startPos = [event.x, event.y];
        startRot = [...this.globe.projection.rotate()];
      }).on("drag", (event) => {
        const k = 70 / this.globe.projection.scale();
        const dx = event.x - startPos[0];
        const dy = event.y - startPos[1];
        const newLon = startRot[0] + dx * k;
        const newLat = Math.max(-85, Math.min(85, startRot[1] - dy * k));
        this.globe.currentRotation = [newLon, newLat, 0];
        this.globe.projection.rotate(this.globe.currentRotation);
        this.updateGlobe();
      }).on("end", () => {
        this.globe.isDragging = false;
      });
      svg.call(drag);
      svg.on("wheel", (event) => {
        event.preventDefault();
        const zoomFactor = event.deltaY < 0 ? 1.12 : 0.89;
        const minScale = this.globe.baseScale * 0.55;
        const maxScale = this.globe.baseScale * 3.8;
        this.globe.currentScale = Math.max(minScale, Math.min(maxScale, this.globe.currentScale * zoomFactor));
        this.globe.projection.scale(this.globe.currentScale);
        this.updateGlobe();
      });
      try {
        let worldData;
        try {
          worldData = await d3.json("/countries-110m.json");
        } catch (err) {
          worldData = await d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json");
        }
        if (worldData && worldData.objects && worldData.objects.countries) {
          this.globe.countries = topojson.feature(worldData, worldData.objects.countries).features;
          this.renderGlobeWorld();
        }
      } catch (e) {
        console.warn("Could not load full world atlas topojson, falling back to sphere overview:", e);
      }
      this.renderExpeditionRoutes();
      this.renderIndianPorts();
      this.renderAntarcticaBases();
      this.renderPolarVessels();
      this.globe.initialized = true;
      this.updateGlobe();
      window.addEventListener("resize", () => {
        this.resizeGlobe();
      });
    }
    renderGlobeWorld() {
      if (!this.globe.countries || !this.globe.elements.gLand) return;
      this.globe.elements.gLand.selectAll("path").data(this.globe.countries).enter().append("path").attr("class", (d) => {
        if (d.id === "356" || d.properties && d.properties.name === "India") {
          return "globe-country india-land";
        }
        if (d.id === "010" || d.properties && d.properties.name === "Antarctica") {
          return "globe-country antarctica-land";
        }
        return "globe-country";
      }).attr("d", this.globe.path);
    }
    renderExpeditionRoutes() {
      if (!this.globe.elements.gRoutes) return;
      const routeFeatures = EXPEDITION_ROUTES.map((r) => ({
        type: "Feature",
        properties: { name: r.name, id: r.id },
        geometry: {
          type: "LineString",
          coordinates: r.coordinates
        }
      }));
      this.globe.elements.gRoutes.selectAll(".globe-route-glow").data(routeFeatures).enter().append("path").attr("class", "globe-route-glow").attr("d", this.globe.path);
      this.globe.elements.gRoutes.selectAll(".globe-route-path").data(routeFeatures).enter().append("path").attr("class", "globe-route-path").attr("d", this.globe.path);
    }
    renderIndianPorts() {
      if (!this.globe.elements.gPorts) return;
      const g = this.globe.elements.gPorts;
      g.selectAll(".port-marker-group").remove();
      const groups = g.selectAll(".port-marker-group").data(INDIAN_PORTS).enter().append("g").attr("class", "globe-marker-group port-marker-group").attr("id", (d) => `marker-${d.id}`).on("click", (event, d) => {
        event.stopPropagation();
        this.showLocationDossier(d);
        this.flyTo(d.lon, d.lat, this.globe.baseScale * 1.4);
      });
      groups.append("circle").attr("r", 9).attr("fill", "none").attr("stroke", "#f59e0b").attr("stroke-width", 1.5).attr("opacity", 0.7);
      groups.append("circle").attr("class", "marker-core").attr("r", 5).attr("fill", "#f59e0b").attr("stroke", "#ffffff").attr("stroke-width", 1.5);
      groups.append("text").attr("class", "globe-marker-label port-label").attr("x", 10).attr("y", 3).text((d) => d.name.replace(/ \(.*\)/, ""));
    }
    renderAntarcticaBases() {
      if (!this.globe.elements.gBases) return;
      const g = this.globe.elements.gBases;
      g.selectAll(".base-marker-group").remove();
      const groups = g.selectAll(".base-marker-group").data(ANTARCTICA_STATIONS).enter().append("g").attr("class", "globe-marker-group base-marker-group").attr("id", (d) => `marker-${d.id}`).on("click", (event, d) => {
        event.stopPropagation();
        this.showLocationDossier(d);
        this.flyTo(d.lon, d.lat, this.globe.baseScale * 1.4);
      });
      groups.append("circle").attr("class", "globe-marker-pulse").attr("r", 6).attr("fill", "none").attr("stroke", "#38bdf8").attr("stroke-width", 1.8);
      groups.append("circle").attr("class", "marker-core").attr("r", 5).attr("fill", "#0284c7").attr("stroke", "#ffffff").attr("stroke-width", 1.8);
      groups.append("text").attr("class", "globe-marker-label base-label").attr("x", 11).attr("y", 4).text((d) => d.name);
    }
    renderPolarVessels() {
      if (!this.globe.elements.gShips) return;
      const g = this.globe.elements.gShips;
      g.selectAll(".ship-marker-group").remove();
      const groups = g.selectAll(".ship-marker-group").data(POLAR_VESSELS).enter().append("g").attr("class", "globe-marker-group ship-marker-group").attr("id", (d) => `marker-${d.id}`).on("click", (event, d) => {
        event.stopPropagation();
        this.showLocationDossier(d);
        this.flyTo(d.lon, d.lat, this.globe.baseScale * 1.3);
      });
      groups.append("circle").attr("r", 7).attr("fill", "none").attr("stroke", "#10b981").attr("stroke-width", 1.2).attr("stroke-dasharray", "2 2");
      groups.append("circle").attr("class", "marker-core").attr("r", 4.5).attr("fill", "#10b981").attr("stroke", "#ffffff").attr("stroke-width", 1.5);
      groups.append("text").attr("class", "globe-marker-label ship-label").attr("x", 10).attr("y", 3).text((d) => d.name);
    }
    updateGlobe() {
      if (!this.globe.projection || !this.globe.path) return;
      const path = this.globe.path;
      const projection = this.globe.projection;
      const currentRot = projection.rotate();
      const isVisible = (lon, lat) => {
        const centerLon = -currentRot[0];
        const centerLat = -currentRot[1];
        return d3.geoDistance([lon, lat], [centerLon, centerLat]) < 1.57079;
      };
      if (this.globe.elements.atmosphereCircle) {
        this.globe.elements.atmosphereCircle.attr("r", projection.scale() + 2);
      }
      if (this.globe.elements.oceanSphere) {
        this.globe.elements.oceanSphere.attr("d", path);
      }
      if (this.globe.elements.graticulePath && this.globe.showGraticule) {
        this.globe.elements.graticulePath.attr("d", path);
      }
      if (this.globe.elements.gLand) {
        this.globe.elements.gLand.selectAll("path").attr("d", path);
      }
      if (this.globe.elements.gRoutes) {
        this.globe.elements.gRoutes.selectAll("path").attr("d", path);
      }
      if (this.globe.elements.gPorts) {
        this.globe.elements.gPorts.selectAll(".port-marker-group").each(function(d) {
          const visible = isVisible(d.lon, d.lat);
          if (visible) {
            const coords = projection([d.lon, d.lat]);
            if (coords) {
              d3.select(this).style("display", "inline").attr("transform", `translate(${coords[0]},${coords[1]})`);
            }
          } else {
            d3.select(this).style("display", "none");
          }
        });
      }
      if (this.globe.elements.gBases) {
        this.globe.elements.gBases.selectAll(".base-marker-group").each(function(d) {
          const visible = isVisible(d.lon, d.lat);
          if (visible) {
            const coords = projection([d.lon, d.lat]);
            if (coords) {
              d3.select(this).style("display", "inline").attr("transform", `translate(${coords[0]},${coords[1]})`);
            }
          } else {
            d3.select(this).style("display", "none");
          }
        });
      }
      if (this.globe.elements.gShips) {
        this.globe.elements.gShips.selectAll(".ship-marker-group").each(function(d) {
          const visible = isVisible(d.lon, d.lat);
          if (visible) {
            const coords = projection([d.lon, d.lat]);
            if (coords) {
              d3.select(this).style("display", "inline").attr("transform", `translate(${coords[0]},${coords[1]})`);
            }
          } else {
            d3.select(this).style("display", "none");
          }
        });
      }
    }
    flyTo(targetLon, targetLat, targetScale, duration = 800) {
      this.stopAutoRotate();
      const startRot = [...this.globe.projection.rotate()];
      const endRot = [-targetLon, -targetLat, 0];
      const startScale = this.globe.projection.scale();
      const endScale = targetScale || this.globe.currentScale;
      let diffLon = endRot[0] - startRot[0];
      while (diffLon > 180) diffLon -= 360;
      while (diffLon < -180) diffLon += 360;
      endRot[0] = startRot[0] + diffLon;
      const startTime = performance.now();
      const animateStep = (time) => {
        const elapsed = time - startTime;
        const t = Math.min(1, elapsed / duration);
        const ease = 1 - Math.pow(1 - t, 3);
        const curLon = startRot[0] + (endRot[0] - startRot[0]) * ease;
        const curLat = startRot[1] + (endRot[1] - startRot[1]) * ease;
        const curScale = startScale + (endScale - startScale) * ease;
        this.globe.currentRotation = [curLon, curLat, 0];
        this.globe.currentScale = curScale;
        this.globe.projection.rotate(this.globe.currentRotation).scale(curScale);
        this.updateGlobe();
        if (t < 1) {
          requestAnimationFrame(animateStep);
        }
      };
      requestAnimationFrame(animateStep);
    }
    bindGlobeControls() {
      const btnFocusIndia = document.getElementById("btnFocusIndia");
      if (btnFocusIndia) {
        btnFocusIndia.addEventListener("click", () => {
          this.focusPreset("india");
        });
      }
      const btnFocusAntarctica = document.getElementById("btnFocusAntarctica");
      if (btnFocusAntarctica) {
        btnFocusAntarctica.addEventListener("click", () => {
          this.focusPreset("antarctica");
        });
      }
      const btnFocusCorridor = document.getElementById("btnFocusCorridor");
      if (btnFocusCorridor) {
        btnFocusCorridor.addEventListener("click", () => {
          this.focusPreset("corridor");
        });
      }
      const btnResetGlobe = document.getElementById("btnResetGlobe");
      if (btnResetGlobe) {
        btnResetGlobe.addEventListener("click", () => {
          this.focusPreset("reset");
        });
      }
      const btnToggleAutoRotate = document.getElementById("btnToggleAutoRotate");
      if (btnToggleAutoRotate) {
        btnToggleAutoRotate.addEventListener("click", () => {
          this.toggleAutoRotate();
        });
      }
      const btnZoomIn = document.getElementById("btnZoomIn");
      const btnZoomOut = document.getElementById("btnZoomOut");
      if (btnZoomIn) {
        btnZoomIn.addEventListener("click", () => {
          if (this.mapMode === "detailed" && this.detailedMap) {
            this.detailedMap.zoomIn();
          } else if (this.globe.initialized) {
            const targetScale = Math.min(this.globe.baseScale * 3.8, this.globe.currentScale * 1.25);
            this.globe.currentScale = targetScale;
            this.globe.projection.scale(targetScale);
            this.updateGlobe();
          }
        });
      }
      if (btnZoomOut) {
        btnZoomOut.addEventListener("click", () => {
          if (this.mapMode === "detailed" && this.detailedMap) {
            this.detailedMap.zoomOut();
          } else if (this.globe.initialized) {
            const targetScale = Math.max(this.globe.baseScale * 0.55, this.globe.currentScale * 0.8);
            this.globe.currentScale = targetScale;
            this.globe.projection.scale(targetScale);
            this.updateGlobe();
          }
        });
      }
      const btnToggleGraticule = document.getElementById("btnToggleGraticule");
      if (btnToggleGraticule) {
        btnToggleGraticule.addEventListener("click", () => {
          this.globe.showGraticule = !this.globe.showGraticule;
          if (this.globe.elements.graticulePath) {
            this.globe.elements.graticulePath.style("display", this.globe.showGraticule ? "inline" : "none");
          }
          btnToggleGraticule.classList.toggle("active", this.globe.showGraticule);
        });
      }
      const closeInspectorBtn = document.getElementById("closeInspectorBtn");
      const inspectorCard = document.getElementById("globeInspectorCard");
      if (closeInspectorBtn && inspectorCard) {
        closeInspectorBtn.addEventListener("click", () => {
          inspectorCard.classList.add("collapsed");
        });
      }
      const inspFlyBtn = document.getElementById("inspFlyBtn");
      if (inspFlyBtn) {
        inspFlyBtn.addEventListener("click", () => {
          if (this.globe.selectedTarget) {
            this.focusLocation(this.globe.selectedTarget);
          }
        });
      }
    }
    toggleAutoRotate() {
      if (this.globe.isAutoRotating) {
        this.stopAutoRotate();
      } else {
        this.startAutoRotate();
      }
    }
    startAutoRotate() {
      this.globe.isAutoRotating = true;
      const btn = document.getElementById("btnToggleAutoRotate");
      const icon = document.getElementById("autoRotateIcon");
      const label = document.getElementById("autoRotateLabel");
      if (btn) btn.classList.replace("btn-dark", "btn-primary");
      if (icon) icon.className = "fa-solid fa-pause me-1";
      if (label) label.textContent = "Pause";
      const loop = () => {
        if (!this.globe.isAutoRotating) return;
        this.globe.currentRotation[0] -= 0.3;
        this.globe.projection.rotate(this.globe.currentRotation);
        this.updateGlobe();
        this.globe.autoRotateTimer = requestAnimationFrame(loop);
      };
      if (this.globe.autoRotateTimer) cancelAnimationFrame(this.globe.autoRotateTimer);
      this.globe.autoRotateTimer = requestAnimationFrame(loop);
    }
    stopAutoRotate() {
      this.globe.isAutoRotating = false;
      if (this.globe.autoRotateTimer) {
        cancelAnimationFrame(this.globe.autoRotateTimer);
        this.globe.autoRotateTimer = null;
      }
      const btn = document.getElementById("btnToggleAutoRotate");
      const icon = document.getElementById("autoRotateIcon");
      const label = document.getElementById("autoRotateLabel");
      if (btn) btn.classList.replace("btn-primary", "btn-dark");
      if (icon) icon.className = "fa-solid fa-play me-1";
      if (label) label.textContent = "Auto-Rotate";
    }
    populateLocationPills() {
      const container = document.getElementById("locationPillsContainer");
      if (!container) return;
      container.innerHTML = "";
      INDIAN_PORTS.forEach((port) => {
        const btn = document.createElement("button");
        btn.className = "loc-quick-pill pill-india";
        btn.dataset.id = port.id;
        btn.innerHTML = `<i class="fa-solid fa-anchor text-warning me-1"></i>${port.name.replace(/ \(.*\)/, "")}`;
        btn.addEventListener("click", () => {
          this.showLocationDossier(port);
          this.focusLocation(port);
        });
        container.appendChild(btn);
      });
      ANTARCTICA_STATIONS.forEach((st) => {
        const btn = document.createElement("button");
        btn.className = "loc-quick-pill pill-antarctica";
        btn.dataset.id = st.id;
        btn.innerHTML = `<i class="fa-solid fa-snowflake text-info me-1"></i>${st.name}`;
        btn.addEventListener("click", () => {
          this.showLocationDossier(st);
          this.focusLocation(st);
        });
        container.appendChild(btn);
      });
      POLAR_VESSELS.forEach((ship) => {
        const btn = document.createElement("button");
        btn.className = "loc-quick-pill pill-ship";
        btn.dataset.id = ship.id;
        btn.innerHTML = `<i class="fa-solid fa-ship text-success me-1"></i>${ship.name}`;
        btn.addEventListener("click", () => {
          this.showLocationDossier(ship);
          this.focusLocation(ship);
        });
        container.appendChild(btn);
      });
    }
    showLocationDossier(item) {
      this.globe.selectedTarget = item;
      const card = document.getElementById("globeInspectorCard");
      if (!card) return;
      card.classList.remove("collapsed");
      const badge = document.getElementById("inspBadge");
      const title = document.getElementById("inspTitle");
      const subtitle = document.getElementById("inspSubtitle");
      const coords = document.getElementById("inspCoords");
      const dist = document.getElementById("inspDist");
      const clearance = document.getElementById("inspClearance");
      const desc = document.getElementById("inspDesc");
      const ops = document.getElementById("inspOps");
      if (badge) {
        if (item.type === "port") {
          badge.className = "badge bg-warning text-dark";
          badge.textContent = item.category || "INDIAN MARITIME PORT";
        } else if (item.type === "antarctica") {
          badge.className = "badge bg-info text-dark";
          badge.textContent = item.category || "ANTARCTIC RESEARCH BASE";
        } else {
          badge.className = "badge bg-success text-white";
          badge.textContent = item.category || "POLAR EXPEDITION VESSEL";
        }
      }
      if (title) title.textContent = item.name;
      if (subtitle) subtitle.textContent = item.region || item.state || item.mission || "Active Maritime Unit";
      if (coords) {
        const latStr = `${Math.abs(item.lat).toFixed(3)}\xB0 ${item.lat >= 0 ? "N" : "S"}`;
        const lonStr = `${Math.abs(item.lon).toFixed(3)}\xB0 ${item.lon >= 0 ? "E" : "W"}`;
        coords.textContent = `${latStr}, ${lonStr}`;
      }
      if (dist) dist.textContent = item.distToAntarctica || item.speed || "~9,400 km";
      if (clearance) clearance.textContent = item.clearance || item.status || "Level 4 (MoES)";
      if (desc) desc.textContent = item.description || item.mission || "";
      if (ops) ops.textContent = item.activeOps || item.facilities || item.heading || "Normal Operations";
      const weatherText = document.getElementById("inspWeatherText");
      const weatherBadge = document.getElementById("inspWeatherBadge");
      if (weatherText) {
        if (item.weather) {
          weatherText.textContent = `${item.weather.temp}, ${item.weather.conditions || ""}, Wind: ${item.weather.wind}`;
          if (weatherBadge) weatherBadge.textContent = item.weather.iceCondition || "OPERATIONAL";
        } else {
          weatherText.textContent = "Telemetry linked & nominal";
          if (weatherBadge) weatherBadge.textContent = "NOMINAL";
        }
      }
      const internalText = document.getElementById("inspInternalDetails");
      if (internalText) {
        let details = item.internalDetails || "";
        if (item.berths) details += (details ? " \u2022 " : "") + `Berths: ${item.berths}`;
        if (item.modules) details += (details ? " \u2022 " : "") + `Modules: ${item.modules}`;
        if (!details && item.facilities) details = item.facilities;
        internalText.textContent = details || "Dedicated polar navigation equipment, telemetry transponders, satellite communication array.";
      }
      const gmapsBtn = document.getElementById("inspGoogleMapsBtn");
      if (gmapsBtn) {
        gmapsBtn.href = item.googleMapsUrl || `https://www.google.com/maps/search/?api=1&query=${item.lat},${item.lon}`;
      }
      document.querySelectorAll(".loc-quick-pill").forEach((pill) => {
        pill.classList.toggle("active", pill.dataset.id === item.id);
      });
    }
    resizeGlobe() {
      const container = document.getElementById("d3MapContainer");
      if (!container || !this.globe.projection || !this.globe.svg) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      if (width === 0 || height === 0) return;
      this.globe.width = width;
      this.globe.height = height;
      this.globe.svg.attr("viewBox", `0 0 ${width} ${height}`);
      this.globe.projection.translate([width / 2, height / 2]);
      const radius = Math.min(width, height) * 0.42;
      this.globe.baseScale = radius;
      if (this.globe.currentScale < radius * 0.55) {
        this.globe.currentScale = radius;
        this.globe.projection.scale(radius);
      }
      this.updateGlobe();
    }
    renderDashboardMetrics() {
      const data = StorageService.getData();
      const countExp = document.getElementById("countExpeditions");
      if (countExp) countExp.textContent = data.expeditions?.length || 0;
      const countCargo = document.getElementById("countCargo");
      if (countCargo) countCargo.textContent = data.cargo?.length || 0;
      const countPersonnel = document.getElementById("countPersonnel");
      if (countPersonnel) countPersonnel.textContent = data.personnel?.length || 0;
      const alertCount = (data.inventory || []).filter((i) => i.risk === "High").length;
      const countAlerts = document.getElementById("countAlerts");
      if (countAlerts) countAlerts.textContent = alertCount;
      if (this.analyticsEngine) {
        this.analyticsEngine.render();
      }
    }
    renderExpeditions() {
      const expeditions = StorageService.getData("expeditions") || [];
      const tbody = document.getElementById("expeditionTableBody");
      if (!tbody) return;
      tbody.innerHTML = "";
      if (expeditions.length === 0) {
        tbody.innerHTML = `
        <tr>
          <td colspan="5" class="text-center py-4 text-muted">
            <i class="fa-solid fa-compass fs-3 d-block mb-2 text-secondary"></i>
            No expeditions recorded yet. Enter your mission parameters below to register a new expedition.
          </td>
        </tr>
      `;
        return;
      }
      expeditions.forEach((exp) => {
        let priorityClass = "text-primary";
        if (exp.priority === "High") priorityClass = "text-warning";
        if (exp.priority === "Critical") priorityClass = "text-danger";
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td class="fw-semibold">${exp.name}</td>
        <td><i class="fa-solid fa-location-dot text-cyan me-1"></i> ${exp.station}</td>
        <td>${exp.ship}</td>
        <td><small class="text-muted">${exp.start} to ${exp.end}</small></td>
        <td class="${priorityClass} fw-bold">${exp.priority}</td>
        <td class="text-end text-nowrap">
          <button class="btn btn-xs btn-outline-danger btn-delete-exp" data-id="${exp.id}" title="Remove Expedition Record">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </td>
      `;
        tbody.appendChild(tr);
      });
      if (!tbody.hasAttribute("data-actions-bound")) {
        tbody.setAttribute("data-actions-bound", "true");
        tbody.addEventListener("click", (e) => {
          const btnDelete = e.target.closest(".btn-delete-exp");
          if (btnDelete) {
            const id = btnDelete.getAttribute("data-id");
            let currentList = StorageService.getData("expeditions") || [];
            currentList = currentList.filter((item) => String(item.id) !== String(id));
            StorageService.saveData("expeditions", currentList);
            this.renderExpeditions();
            this.renderDashboardMetrics();
            if (this.analyticsEngine) this.analyticsEngine.render();
          }
        });
      }
    }
    async renderCargo() {
      const tbody = document.getElementById("cargoTableBody");
      if (!tbody) return;
      const searchInput = document.getElementById("cargoSearchInput");
      const statusSelect = document.getElementById("cargoFilterStatus");
      const destSelect = document.getElementById("cargoFilterDestination");
      const filters = {
        search: searchInput ? searchInput.value.trim() : "",
        status: statusSelect ? statusSelect.value : "all",
        destination: destSelect ? destSelect.value : "all"
      };
      let cargo = await CargoAPI.getAll(filters);
      if (filters.destination && filters.destination !== "all") {
        cargo = cargo.filter((c) => c.destination.toLowerCase() === filters.destination.toLowerCase());
      }
      const totalConsignments = cargo.length;
      const totalMassKg = cargo.reduce((sum, c) => sum + (Number(c.weight) || 0), 0);
      const grossMassMT = (totalMassKg / 1e3).toFixed(1) + " MT";
      const activeTransit = cargo.filter((c) => c.status === "In Transit").length;
      const deliveredCount = cargo.filter((c) => c.status === "Delivered").length;
      const elTotal = document.getElementById("cargoMetricTotal");
      const elWeight = document.getElementById("cargoMetricWeight");
      const elTransit = document.getElementById("cargoMetricTransit");
      const elDelivered = document.getElementById("cargoMetricDelivered");
      const elFilterCount = document.getElementById("cargoFilterCount");
      if (elTotal) elTotal.textContent = totalConsignments;
      if (elWeight) elWeight.textContent = grossMassMT;
      if (elTransit) elTransit.textContent = activeTransit;
      if (elDelivered) elDelivered.textContent = deliveredCount;
      if (elFilterCount) {
        elFilterCount.textContent = `Displaying ${totalConsignments} active consignment${totalConsignments === 1 ? "" : "s"}`;
      }
      tbody.innerHTML = "";
      if (cargo.length === 0) {
        tbody.innerHTML = `
        <tr>
          <td colspan="7" class="text-center py-4 text-muted">
            <i class="fa-solid fa-box-open fs-3 d-block mb-2 text-secondary"></i>
            No cargo consignments recorded yet. Click <strong>"Register Consignment"</strong> to add your shipment.
          </td>
        </tr>
      `;
        return;
      }
      cargo.forEach((c) => {
        let statusBadge = "bg-secondary";
        if (c.status === "Loaded") statusBadge = "bg-primary";
        if (c.status === "In Transit") statusBadge = "bg-warning text-dark";
        if (c.status === "Delivered") statusBadge = "bg-success";
        let priorityBadge = "";
        if (c.priority === "Critical") priorityBadge = '<span class="badge bg-danger ms-1 text-white">CRITICAL</span>';
        else if (c.priority === "High") priorityBadge = '<span class="badge bg-warning text-dark ms-1">HIGH</span>';
        const progressVal = Math.min(100, Math.max(0, c.progress || 0));
        const isDelivered = c.status === "Delivered" || progressVal >= 100;
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td class="text-monospace fw-bold text-cyan">${c.id}</td>
        <td>
          <div class="fw-semibold text-dark">${c.item} ${priorityBadge}</div>
        </td>
        <td class="text-monospace fw-semibold">${Number(c.weight).toLocaleString()} kg</td>
        <td>
          <small class="text-muted d-flex align-items-center gap-1">
            <span class="text-dark fw-medium">${c.origin}</span>
            <i class="fa-solid fa-arrow-right text-muted mx-1" style="font-size: 10px;"></i>
            <span class="text-cyan fw-bold">${c.destination}</span>
          </small>
        </td>
        <td><span class="badge ${statusBadge}">${c.status}</span></td>
        <td style="min-width: 140px;">
          <div class="d-flex justify-content-between align-items-center mb-1">
            <small class="text-muted" style="font-size: 11px;">${progressVal}%</small>
          </div>
          <div class="progress bg-white bg-opacity-75 shadow-sm" style="height: 6px;">
            <div class="progress-bar ${isDelivered ? "bg-success" : "bg-cyan"}" style="width: ${progressVal}%"></div>
          </div>
        </td>
        <td class="text-end text-nowrap">
          ${!isDelivered ? `
            <button class="btn btn-xs btn-outline-primary me-1 btn-advance-cargo" data-id="${c.id}" title="Advance Progress (+15%)">
              <i class="fa-solid fa-forward-step"></i>
            </button>
            <button class="btn btn-xs btn-outline-success me-1 btn-deliver-cargo" data-id="${c.id}" title="Mark as Delivered">
              <i class="fa-solid fa-check"></i>
            </button>
          ` : ""}
          <button class="btn btn-xs btn-outline-danger btn-delete-cargo" data-id="${c.id}" title="Archive/Delete Consignment">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </td>
      `;
        tbody.appendChild(tr);
      });
      if (!tbody.hasAttribute("data-actions-bound")) {
        tbody.setAttribute("data-actions-bound", "true");
        tbody.addEventListener("click", async (e) => {
          const btnAdvance = e.target.closest(".btn-advance-cargo");
          const btnDeliver = e.target.closest(".btn-deliver-cargo");
          const btnDelete = e.target.closest(".btn-delete-cargo");
          if (btnAdvance) {
            const id = btnAdvance.getAttribute("data-id");
            await CargoAPI.advanceProgress(id, 15);
            await this.renderCargo();
            this.renderDashboardMetrics();
            if (this.analyticsEngine) this.analyticsEngine.render();
          } else if (btnDeliver) {
            const id = btnDeliver.getAttribute("data-id");
            await CargoAPI.markDelivered(id);
            await this.renderCargo();
            this.renderDashboardMetrics();
            if (this.analyticsEngine) this.analyticsEngine.render();
          } else if (btnDelete) {
            const id = btnDelete.getAttribute("data-id");
            await CargoAPI.delete(id);
            await this.renderCargo();
            this.renderDashboardMetrics();
            if (this.analyticsEngine) this.analyticsEngine.render();
          }
        });
      }
      if (searchInput && !searchInput.hasAttribute("data-bound")) {
        searchInput.setAttribute("data-bound", "true");
        searchInput.addEventListener("input", () => this.renderCargo());
      }
      if (statusSelect && !statusSelect.hasAttribute("data-bound")) {
        statusSelect.setAttribute("data-bound", "true");
        statusSelect.addEventListener("change", () => this.renderCargo());
      }
      if (destSelect && !destSelect.hasAttribute("data-bound")) {
        destSelect.setAttribute("data-bound", "true");
        destSelect.addEventListener("change", () => this.renderCargo());
      }
      const btnExport = document.getElementById("btnExportCargoCsv");
      if (btnExport && !btnExport.hasAttribute("data-bound")) {
        btnExport.setAttribute("data-bound", "true");
        btnExport.addEventListener("click", () => {
          const allCargo = StorageService.getData("cargo") || [];
          const rows = allCargo.map((c) => [
            c.id,
            c.item,
            c.weight,
            c.origin,
            c.destination,
            c.status,
            c.progress + "%",
            c.priority || "Normal"
          ]);
          const headers = ["Cargo ID", "Item Description", "Weight (kg)", "Origin Port", "Destination Station", "Status", "Progress", "Priority"];
          exportTableToCsv("icetrack_cargo_manifest.csv", rows, headers);
        });
      }
      const updateBtn = document.getElementById("btnUpdateCargo");
      if (updateBtn && !updateBtn.hasAttribute("data-bound")) {
        updateBtn.setAttribute("data-bound", "true");
        updateBtn.addEventListener("click", async () => {
          const activeList = await CargoAPI.getAll();
          for (const c of activeList) {
            if (c.progress < 100) {
              await CargoAPI.advanceProgress(c.id, Math.floor(Math.random() * 15) + 10);
            }
          }
          await this.renderCargo();
          this.renderDashboardMetrics();
        });
      }
    }
    async renderInventory() {
      const container = document.getElementById("inventoryCardsContainer");
      const alertBox = document.getElementById("inventoryAlertBox");
      const alertText = document.getElementById("inventoryAlertText");
      if (!container) return;
      const searchInput = document.getElementById("invSearchInput");
      const stationSelect = document.getElementById("invFilterStation");
      const riskSelect = document.getElementById("invFilterRisk");
      const filters = {
        search: searchInput ? searchInput.value.trim() : "",
        station: stationSelect ? stationSelect.value : "all",
        risk: riskSelect ? riskSelect.value : "all"
      };
      const inventory = await InventoryAPI.getAll(filters);
      const totalCount = inventory.length;
      const criticalCount = inventory.filter((i) => (i.current || 0) < (i.threshold || 0)).length;
      const moderateCount = inventory.filter((i) => {
        const isCritical = (i.current || 0) < (i.threshold || 0);
        return !isCritical && (i.current || 0) < i.threshold * 1.5;
      }).length;
      const optimalCount = totalCount - criticalCount - moderateCount;
      const elTotal = document.getElementById("invMetricTotal");
      const elCritical = document.getElementById("invMetricCritical");
      const elModerate = document.getElementById("invMetricModerate");
      const elOptimal = document.getElementById("invMetricOptimal");
      const elFilterCount = document.getElementById("invFilterCount");
      if (elTotal) elTotal.textContent = totalCount;
      if (elCritical) elCritical.textContent = criticalCount;
      if (elModerate) elModerate.textContent = moderateCount;
      if (elOptimal) elOptimal.textContent = optimalCount;
      if (elFilterCount) {
        elFilterCount.textContent = `Displaying ${totalCount} monitored stock reserve${totalCount === 1 ? "" : "s"}`;
      }
      container.innerHTML = "";
      const alertMsgs = [];
      if (inventory.length === 0) {
        container.innerHTML = `
        <div class="col-12 text-center py-5 text-muted glass-panel">
          <i class="fa-solid fa-boxes-packing fs-2 mb-2 d-block text-secondary"></i>
          No station inventory items matched the selected filters.
        </div>
      `;
      }
      inventory.forEach((inv) => {
        const isCritical = inv.current < inv.threshold;
        const isModerate = !isCritical && inv.current < inv.threshold * 1.5;
        let computedRisk = "Low";
        if (isCritical) {
          computedRisk = "High";
          alertMsgs.push(`${inv.item} at ${inv.location} (${inv.current} remaining vs ${inv.threshold} minimum threshold)`);
        } else if (isModerate) {
          computedRisk = "Moderate";
        }
        let riskBadgeClass = "bg-success text-white";
        let cardBorder = "";
        if (computedRisk === "Moderate") {
          riskBadgeClass = "bg-warning text-dark";
        } else if (computedRisk === "High") {
          riskBadgeClass = "bg-danger text-white pulse-anim";
          cardBorder = "border-2 border-danger shadow-sm";
        }
        const ratio = Math.min(100, Math.round(inv.current / Math.max(1, inv.threshold) * 100));
        let gaugeColor = "bg-success";
        if (computedRisk === "Moderate") gaugeColor = "bg-warning";
        if (computedRisk === "High") gaugeColor = "bg-danger";
        let prediction = "";
        if (computedRisk === "High") {
          prediction = `<small class="text-danger d-block mt-2 fw-medium"><i class="fa-solid fa-triangle-exclamation me-1"></i> Critical shortage: re-supply required urgently.</small>`;
        } else if (computedRisk === "Moderate") {
          prediction = `<small class="text-warning d-block mt-2"><i class="fa-solid fa-clock me-1"></i> Approaching safety threshold buffer.</small>`;
        }
        const col = document.createElement("div");
        col.className = "col-md-6 col-lg-4";
        col.innerHTML = `
        <div class="glass-panel p-4 h-100 d-flex flex-column justify-content-between ${cardBorder}">
          <div>
            <div class="d-flex justify-content-between align-items-center mb-3">
              <div class="d-flex align-items-center gap-2">
                <i class="fa-solid ${inv.icon || "fa-boxes-stacked"} fs-3 text-cyan"></i>
                <span class="badge bg-light text-muted border text-uppercase" style="font-size: 10px;">${inv.category || "Supplies"}</span>
              </div>
              <span class="badge ${riskBadgeClass}">${computedRisk} Risk</span>
            </div>

            <h6 class="mb-1 fw-bold text-dark">${inv.item}</h6>
            <p class="text-muted small mb-3">
              <i class="fa-solid fa-location-dot me-1 text-cyan"></i> ${inv.location}
              ${inv.responsible ? `&bull; <span class="text-dark">${inv.responsible}</span>` : ""}
            </p>

            <div class="d-flex justify-content-between align-items-end mb-2">
              <div>
                <div class="text-muted small" style="font-size: 11px;">Current Reserve</div>
                <div class="fs-4 fw-bold text-monospace ${isCritical ? "text-danger" : "text-dark"}">${inv.current}</div>
              </div>
              <div class="text-end">
                <div class="text-muted small" style="font-size: 11px;">Safety Threshold</div>
                <div class="fs-6 text-monospace text-secondary">${inv.threshold}</div>
              </div>
            </div>

            <div class="progress bg-white bg-opacity-75 mb-1" style="height: 6px;">
              <div class="progress-bar ${gaugeColor}" style="width: ${ratio}%"></div>
            </div>
            ${prediction}
          </div>

          <!-- Quick Action Buttons -->
          <div class="pt-3 mt-3 border-top d-flex justify-content-between align-items-center">
            <div class="d-flex gap-1">
              <button class="btn btn-xs btn-outline-success btn-restock-inv" data-id="${inv.id}" title="Restock +10 units">
                <i class="fa-solid fa-plus me-1"></i>+10
              </button>
              <button class="btn btn-xs btn-outline-warning btn-consume-inv" data-id="${inv.id}" title="Consume -5 units">
                <i class="fa-solid fa-minus me-1"></i>-5
              </button>
            </div>
            <button class="btn btn-xs btn-outline-danger btn-delete-inv" data-id="${inv.id}" title="Delete Record">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      `;
        container.appendChild(col);
      });
      if (alertMsgs.length > 0 && alertBox) {
        alertBox.classList.remove("d-none");
        if (alertText) {
          alertText.innerHTML = `<strong>Critical Stock Alert:</strong> ${alertMsgs.slice(0, 3).join(" &bull; ")}`;
        }
      } else if (alertBox) {
        alertBox.classList.add("d-none");
      }
      if (!container.hasAttribute("data-actions-bound")) {
        container.setAttribute("data-actions-bound", "true");
        container.addEventListener("click", async (e) => {
          const btnRestock = e.target.closest(".btn-restock-inv");
          const btnConsume = e.target.closest(".btn-consume-inv");
          const btnDelete = e.target.closest(".btn-delete-inv");
          if (btnRestock) {
            const id = Number(btnRestock.getAttribute("data-id")) || btnRestock.getAttribute("data-id");
            await InventoryAPI.adjustQuantity(id, 10);
            await this.renderInventory();
            this.renderDashboardMetrics();
          } else if (btnConsume) {
            const id = Number(btnConsume.getAttribute("data-id")) || btnConsume.getAttribute("data-id");
            await InventoryAPI.adjustQuantity(id, -5);
            await this.renderInventory();
            this.renderDashboardMetrics();
          } else if (btnDelete) {
            const id = Number(btnDelete.getAttribute("data-id")) || btnDelete.getAttribute("data-id");
            await InventoryAPI.delete(id);
            await this.renderInventory();
            this.renderDashboardMetrics();
          }
        });
      }
      if (searchInput && !searchInput.hasAttribute("data-bound")) {
        searchInput.setAttribute("data-bound", "true");
        searchInput.addEventListener("input", () => this.renderInventory());
      }
      if (stationSelect && !stationSelect.hasAttribute("data-bound")) {
        stationSelect.setAttribute("data-bound", "true");
        stationSelect.addEventListener("change", () => this.renderInventory());
      }
      if (riskSelect && !riskSelect.hasAttribute("data-bound")) {
        riskSelect.setAttribute("data-bound", "true");
        riskSelect.addEventListener("change", () => this.renderInventory());
      }
      const btnExportInv = document.getElementById("btnExportInventoryCsv");
      if (btnExportInv && !btnExportInv.hasAttribute("data-bound")) {
        btnExportInv.setAttribute("data-bound", "true");
        btnExportInv.addEventListener("click", () => {
          const allInv = StorageService.getData("inventory") || [];
          const rows = allInv.map((i) => [
            i.id,
            i.item,
            i.category || "General",
            i.location,
            i.current,
            i.threshold,
            i.risk || "Low",
            i.responsible || "Officer"
          ]);
          const headers = ["Record ID", "Item Name", "Category", "Station Location", "Current Stock", "Safety Threshold", "Risk Level", "Responsible Lead"];
          exportTableToCsv("icetrack_station_inventory.csv", rows, headers);
        });
      }
    }
    renderPersonnel() {
      const personnel = StorageService.getData("personnel");
      const tbody = document.getElementById("personnelTableBody");
      const filter = document.getElementById("filterPersonnelStation");
      if (!tbody || !filter) return;
      const renderData = (data) => {
        tbody.innerHTML = "";
        data.forEach((p) => {
          let statusBadge = "bg-success";
          if (p.status === "On-route") statusBadge = "bg-cyan text-dark";
          if (p.status === "Medical Hold") statusBadge = "bg-warning text-dark";
          if (p.status === "Emergency") statusBadge = "bg-danger text-white";
          const tr = document.createElement("tr");
          tr.innerHTML = `
          <td class="fw-semibold"><i class="fa-solid fa-circle-user text-muted me-2"></i>${p.name}</td>
          <td>${p.role}</td>
          <td><span class="badge border border-secondary text-light">${p.team}</span></td>
          <td><i class="fa-solid fa-location-crosshairs text-primary me-1"></i> ${p.station}</td>
          <td><span class="badge ${statusBadge}">${p.status}</span></td>
          <td class="text-monospace small text-muted">${p.clearance}</td>
          <td class="text-end text-nowrap">
            <button class="btn btn-xs btn-outline-danger btn-delete-person" data-id="${p.id}" title="Remove Personnel Record">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </td>
        `;
          tbody.appendChild(tr);
        });
      };
      renderData(personnel);
      if (!tbody.hasAttribute("data-actions-bound")) {
        tbody.setAttribute("data-actions-bound", "true");
        tbody.addEventListener("click", (e) => {
          const btnDelete = e.target.closest(".btn-delete-person");
          if (btnDelete) {
            const id = btnDelete.getAttribute("data-id");
            let currentList = StorageService.getData("personnel") || [];
            currentList = currentList.filter((item) => String(item.id) !== String(id));
            StorageService.saveData("personnel", currentList);
            this.renderPersonnel();
            this.renderDashboardMetrics();
          }
        });
      }
      if (!filter.hasAttribute("data-bound")) {
        filter.setAttribute("data-bound", "true");
        filter.addEventListener("change", (e) => {
          const val = e.target.value;
          const freshPersonnel = StorageService.getData("personnel") || [];
          if (val === "all") renderData(freshPersonnel);
          else renderData(freshPersonnel.filter((p) => p.station === val));
        });
      }
    }
    // Helper for closing modals cleanly across all environments (including offline/local)
    closeModal(modalId) {
      const modalEl = document.getElementById(modalId);
      if (!modalEl) return;
      if (window.bootstrap && window.bootstrap.Modal) {
        try {
          const modalInstance = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
          modalInstance.hide();
        } catch {
        }
      }
      modalEl.classList.remove("show");
      modalEl.setAttribute("aria-hidden", "true");
      modalEl.style.display = "none";
      document.querySelectorAll(".modal-backdrop").forEach((b) => b.remove());
      document.body.classList.remove("modal-open");
      document.body.style.removeProperty("padding-right");
      document.body.style.removeProperty("overflow");
    }
    bindForms() {
      const expForm = document.getElementById("expeditionForm");
      if (expForm && !expForm.hasAttribute("data-bound")) {
        expForm.setAttribute("data-bound", "true");
        expForm.addEventListener("submit", async (e) => {
          e.preventDefault();
          const newExp = {
            name: document.getElementById("expName").value,
            station: document.getElementById("expStation").value,
            start: document.getElementById("expStart").value,
            end: document.getElementById("expEnd").value,
            ship: document.getElementById("expShip").value,
            priority: document.getElementById("expPriority").value
          };
          await ExpeditionsAPI.create(newExp);
          this.renderExpeditions();
          this.renderDashboardMetrics();
          if (this.analyticsEngine) {
            this.analyticsEngine.render();
          }
          expForm.reset();
        });
      }
      const sosForm = document.getElementById("emergencyForm");
      if (sosForm && !sosForm.hasAttribute("data-bound")) {
        sosForm.setAttribute("data-bound", "true");
        sosForm.addEventListener("submit", (e) => {
          e.preventDefault();
          const mapAlert = document.getElementById("mapAlertMarker");
          if (mapAlert) mapAlert.classList.remove("d-none");
          const personnel = StorageService.getData("personnel");
          if (personnel.length > 0) {
            personnel[0].status = "Emergency";
            StorageService.saveData("personnel", personnel);
            this.renderPersonnel();
          }
          const sosRespPanel = document.getElementById("sosResponsePanel");
          if (sosRespPanel) sosRespPanel.classList.remove("d-none");
          const sosLocInput = document.getElementById("sosLocation");
          const location = sosLocInput ? sosLocInput.value.toLowerCase() : "";
          let support = "Maitri Base";
          if (location.includes("bharati") || location.includes("east")) support = "Bharati Base";
          const sosStationEl = document.getElementById("sosSupportStation");
          if (sosStationEl) sosStationEl.textContent = support;
          const btn = sosForm.querySelector("button");
          btn.innerHTML = '<i class="fa-solid fa-check me-2"></i> SOS SENT';
          btn.classList.replace("btn-danger", "btn-secondary");
          setTimeout(() => {
            btn.innerHTML = "TRANSMIT SOS";
            btn.classList.replace("btn-secondary", "btn-danger");
            sosForm.reset();
          }, 3e3);
        });
      }
      const cargoForm = document.getElementById("formAddCargo");
      if (cargoForm && !cargoForm.hasAttribute("data-bound")) {
        cargoForm.setAttribute("data-bound", "true");
        cargoForm.addEventListener("submit", async (e) => {
          e.preventDefault();
          const payload = {
            id: document.getElementById("newCargoId").value.trim() || void 0,
            item: document.getElementById("newCargoItem").value.trim(),
            weight: parseFloat(document.getElementById("newCargoWeight").value) || 0,
            origin: document.getElementById("newCargoOrigin").value,
            destination: document.getElementById("newCargoDestination").value,
            status: document.getElementById("newCargoStatus").value,
            priority: document.getElementById("newCargoPriority").value,
            progress: document.getElementById("newCargoStatus").value === "Delivered" ? 100 : document.getElementById("newCargoStatus").value === "In Transit" ? 50 : 10
          };
          await CargoAPI.create(payload);
          this.closeModal("modalAddCargo");
          cargoForm.reset();
          await this.renderCargo();
          this.renderDashboardMetrics();
          if (this.analyticsEngine) {
            this.analyticsEngine.render();
          }
        });
      }
      const invForm = document.getElementById("formAddInventory");
      if (invForm && !invForm.hasAttribute("data-bound")) {
        invForm.setAttribute("data-bound", "true");
        invForm.addEventListener("submit", async (e) => {
          e.preventDefault();
          const payload = {
            item: document.getElementById("newInvItem").value.trim(),
            category: document.getElementById("newInvCategory").value,
            location: document.getElementById("newInvLocation").value,
            current: parseFloat(document.getElementById("newInvCurrent").value) || 0,
            threshold: parseFloat(document.getElementById("newInvThreshold").value) || 1,
            responsible: document.getElementById("newInvResponsible").value.trim() || "Logistics Lead",
            icon: document.getElementById("newInvIcon").value || "fa-boxes-stacked"
          };
          await InventoryAPI.create(payload);
          this.closeModal("modalAddInventory");
          invForm.reset();
          await this.renderInventory();
          this.renderDashboardMetrics();
        });
      }
      const personnelForm = document.getElementById("formAddPersonnel");
      if (personnelForm && !personnelForm.hasAttribute("data-bound")) {
        personnelForm.setAttribute("data-bound", "true");
        personnelForm.addEventListener("submit", async (e) => {
          e.preventDefault();
          const personnel = StorageService.getData("personnel") || [];
          const nextLetter = String.fromCharCode(65 + personnel.length % 26);
          const nameVal = document.getElementById("newPersonName")?.value.trim() || `Person ${nextLetter}`;
          const newPerson = {
            name: nameVal,
            role: document.getElementById("newPersonRole")?.value.trim() || "Logistics Specialist",
            team: document.getElementById("newPersonTeam")?.value || "Command Wing",
            station: document.getElementById("newPersonStation")?.value || "Maitri",
            status: document.getElementById("newPersonStatus")?.value || "Active",
            clearance: document.getElementById("newPersonClearance")?.value || "Level 3"
          };
          await PersonnelAPI.create(newPerson);
          this.closeModal("modalAddPersonnel");
          personnelForm.reset();
          this.renderPersonnel();
          this.renderDashboardMetrics();
        });
      }
    }
    // Backend Integration & Synchronization API
    async fetchFromAPI(endpoint) {
      if (endpoint === "/cargo") return await CargoAPI.getAll();
      if (endpoint === "/inventory") return await InventoryAPI.getAll();
      if (endpoint === "/expeditions") return await ExpeditionsAPI.getAll();
      if (endpoint === "/personnel") return await PersonnelAPI.getAll();
      return StorageService.getData(endpoint.replace("/", "")) || [];
    }
    async syncWithBackend() {
      console.log("[IceTrack API] Synchronizing local store with remote backend endpoints...");
      const [cargo, inventory, expeditions, personnel] = await Promise.all([
        CargoAPI.getAll(),
        InventoryAPI.getAll(),
        ExpeditionsAPI.getAll(),
        PersonnelAPI.getAll()
      ]);
      return { cargo, inventory, expeditions, personnel, syncedAt: (/* @__PURE__ */ new Date()).toISOString() };
    }
    initGovPortalUtilities() {
      const emailInput = document.getElementById("loginEmail");
      const alertBox = document.getElementById("loginAlert");
      if (emailInput) {
        emailInput.addEventListener("input", () => {
          if (alertBox) alertBox.classList.add("d-none");
        });
      }
      const togglePasswordBtn = document.getElementById("togglePasswordBtn");
      const passwordInput = document.getElementById("loginPassword");
      const toggleIcon = document.getElementById("togglePasswordIcon");
      if (togglePasswordBtn && passwordInput && toggleIcon) {
        togglePasswordBtn.addEventListener("click", () => {
          const isPassword = passwordInput.getAttribute("type") === "password";
          passwordInput.setAttribute("type", isPassword ? "text" : "password");
          toggleIcon.className = isPassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
        });
      }
      let currentFontSize = 100;
      const fontDec = document.getElementById("fontDec");
      const fontReset = document.getElementById("fontReset");
      const fontInc = document.getElementById("fontInc");
      if (fontDec) {
        fontDec.addEventListener("click", (e) => {
          e.preventDefault();
          if (currentFontSize > 85) {
            currentFontSize -= 5;
            document.documentElement.style.fontSize = `${currentFontSize}%`;
          }
        });
      }
      if (fontReset) {
        fontReset.addEventListener("click", (e) => {
          e.preventDefault();
          currentFontSize = 100;
          document.documentElement.style.fontSize = "100%";
        });
      }
      if (fontInc) {
        fontInc.addEventListener("click", (e) => {
          e.preventDefault();
          if (currentFontSize < 125) {
            currentFontSize += 5;
            document.documentElement.style.fontSize = `${currentFontSize}%`;
          }
        });
      }
    }
    predictInventoryRisk(inventoryData) {
      return inventoryData;
    }
  };
  function bootstrapIceTrack() {
    try {
      const app = new IceTrackApp();
      window.PolarOps = app;
      window.IceTrack = app;
    } catch (err) {
      console.error("Fatal initialization error in IceTrackApp:", err);
      window.IceTrack = window.IceTrack || {
        handleLoginSubmit: () => {
          const emailInput = document.getElementById("loginEmail");
          const passwordInput = document.getElementById("loginPassword");
          const email = (emailInput?.value || "").trim();
          const password = (passwordInput?.value || "").trim();
          const alertBox = document.getElementById("loginAlert");
          const alertText = document.getElementById("loginAlertText");
          if (!email || !password) {
            if (alertBox && alertText) {
              alertText.textContent = "Please enter both your official email ID and security password.";
              alertBox.classList.remove("d-none");
            }
            return;
          }
          if (email.toLowerCase() !== "xyz@gmail.com" || password !== "XYZ@2026") {
            if (alertBox && alertText) {
              alertText.textContent = "Invalid Email or Password. Access Denied: Unauthorized Personnel.";
              alertBox.classList.remove("d-none");
            }
            if (passwordInput) {
              passwordInput.value = "";
              passwordInput.focus();
            }
            return;
          }
          if (alertBox) alertBox.classList.add("d-none");
          const loginSec = document.getElementById("loginSection");
          const appSec = document.getElementById("appSection");
          if (loginSec) {
            loginSec.classList.add("d-none");
            loginSec.style.setProperty("display", "none", "important");
          }
          if (appSec) {
            appSec.classList.remove("d-none");
            appSec.style.setProperty("display", "flex", "important");
          }
        }
      };
      window.PolarOps = window.IceTrack;
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootstrapIceTrack);
  } else {
    bootstrapIceTrack();
  }
})();
