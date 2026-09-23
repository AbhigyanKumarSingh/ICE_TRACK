// Authorized polar expedition officers list - Strictly fixed to authorized credentials
export const AUTHORIZED_OFFICERS = [
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

// Clean baseline data - Expeditions and Cargo start clean for direct user entry
export const defaultData = {
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

// Safe in-memory storage fallback for restricted local/sandbox browser environments
const memoryStore = {};

function safeGetItem(key) {
  try {
    const val = localStorage.getItem(key);
    return val !== null ? val : (memoryStore[key] || null);
  } catch {
    return memoryStore[key] || null;
  }
}

function safeSetItem(key, val) {
  memoryStore[key] = val;
  try {
    localStorage.setItem(key, val);
  } catch {}
}

// Storage Service Helper - Robust local & offline persistence
export const StorageService = {
  init() {
    const raw = safeGetItem('icetrack_data');
    if (!raw) {
      safeSetItem('icetrack_data', JSON.stringify(defaultData));
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
          safeSetItem('icetrack_data', JSON.stringify(stored));
        }
      } catch {
        safeSetItem('icetrack_data', JSON.stringify(defaultData));
      }
    }

    if (!safeGetItem('icetrack_lang')) {
      safeSetItem('icetrack_lang', 'en');
    }
  },

  getData(key) {
    try {
      const raw = safeGetItem('icetrack_data');
      const data = raw ? JSON.parse(raw) : defaultData;
      return key ? (data[key] || []) : data;
    } catch {
      return key ? (defaultData[key] || []) : defaultData;
    }
  },

  saveData(key, newData) {
    try {
      const raw = safeGetItem('icetrack_data');
      const data = raw ? JSON.parse(raw) : { ...defaultData };
      data[key] = newData;
      safeSetItem('icetrack_data', JSON.stringify(data));
    } catch (e) {
      console.warn('Storage save fallback error:', e);
    }
  },

  getLang() {
    return safeGetItem('icetrack_lang') || 'en';
  },

  setLang(lang) {
    safeSetItem('icetrack_lang', lang);
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
    } catch {}
  }
};

// Major Indian Ports connected to Antarctic & Oceanographic Logistics
export const INDIAN_PORTS = [
  {
    id: "mormugao",
    name: "Mormugao Port (Goa)",
    state: "Goa",
    lon: 73.801,
    lat: 15.412,
    type: "port",
    category: "Primary Polar Expedition Base (NCPOR)",
    description: "Official embarkation and departure port for all Indian Scientific Expeditions to Antarctica. Managed in direct operational coordination with NCPOR Vasco da Gama, Goa.",
    internalDetails: "Berth 10/11 Polar Staging Wharf (Length 450m, Draft 13.5m); Headland Sada Cryogenic Sample Depot (-20°C & -80°C vaults); Dedicated Bunkering Arm for Arctic Diesel (LADD-45); Heavy-Lift Gantry (100-ton SWL); Direct customs green-corridor to Goa Dabolim Air Cargo Hub.",
    facilities: "Dedicated polar staging berths, sample quarantine, cryogenic storage vaults, 100T gantry crane, vessel bunkering",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=15.412,73.801",
    berths: ["Berth 10 (Polar Charter Mooring)", "Berth 11 (Heavy Science Cargo)", "Berth 8 (Bunkering & Lube)"],
    weather: "29°C • Wind 11 kts WSW • Humidity 74% • Sea State Calm",
    distToAntarctica: "Approx. 9,450 km (5,100 nautical miles)",
    clearance: "Level 4 (MoES Antarctic Command)",
    activeOps: "Voyage 44 Staging & Fuel Bunkering"
  },
  {
    id: "jnpt",
    name: "Jawaharlal Nehru Port (JNPT / Mumbai)",
    state: "Maharashtra",
    lon: 72.951,
    lat: 18.950,
    type: "port",
    category: "Major Container & Heavy Logistics Terminal",
    description: "Primary western maritime gateway handling containerized scientific payload, tracked PistenBully snow-vehicles, and specialized modular habitat shelters.",
    internalDetails: "Terminal 4 (BMCT) Polar Heavy-Lift Quay; Nhava Sheva Special Hazardous Storage Yard; Cold-Chain Container Yard with 440V reefer points; Dedicated tracked vehicle ramp for PistenBully 300 Polar loaders; Rail freight corridor linked to Delhi scientific institutions.",
    facilities: "Super-post-panamax container cranes, customs bonded polar transit bays, reefer yards, hazardous cargo handling",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=18.950,72.951",
    berths: ["BMCT Terminal 4 Berth A", "GTI Terminal Berth 2", "Shallow Water Berth (Heavy Lighterage)"],
    weather: "28°C • Wind 8 kts NW • Humidity 68% • Visibility 10 km",
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
    weather: "27°C • Wind 6 kts SW • Humidity 82% • Tropical Clear",
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
    weather: "31°C • Wind 12 kts SE • Humidity 70% • Clear Sky",
    distToAntarctica: "Approx. 9,250 km",
    clearance: "Level 3",
    activeOps: "Deep-Sea Mooring Assembly"
  },
  {
    id: "visakhapatnam",
    name: "Visakhapatnam Port",
    state: "Andhra Pradesh",
    lon: 83.298,
    lat: 17.690,
    type: "port",
    category: "Deepwater Polar Support Terminal",
    description: "Major eastern natural deepwater harbour supporting heavy polar replenishment vessels and naval escort coordination.",
    internalDetails: "Inner Harbour East Quay (EQ-1 & EQ-2, Draft 14.5m); Naval Dockyard synergy berth with underwater diver hull verification; Heavy equipment fabrication shops for blizzard-proof mast antenna structures.",
    facilities: "All-weather deep draft berths, heavy payload cranes, naval logistics synergy, protected inner basin",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=17.690,83.298",
    berths: ["EQ-1 Polar Deepwater Berth", "EQ-2 Bulk Supply", "Outer Harbour Container Berth"],
    weather: "30°C • Wind 9 kts ESE • Humidity 73% • Fair",
    distToAntarctica: "Approx. 9,600 km",
    clearance: "Level 3",
    activeOps: "Polar Structural Steel Inspection"
  },
  {
    id: "kolkata",
    name: "Syama Prasad Mookerjee Port (Kolkata)",
    state: "West Bengal",
    lon: 88.310,
    lat: 22.548,
    type: "port",
    category: "Eastern Riverine Maritime Hub",
    description: "Historic maritime port supporting geological survey stores, ice core drills, and eastern regional polar candidate training mobilization.",
    internalDetails: "Netaji Subhas Dock Berth 4; Geological Survey of India (GSI) polar core drill warehouse; Heavy wooden timber packing yard for polar survival sledges; Riverine tidal lock gates for draught management.",
    facilities: "Inland polar inventory depots, GSI core staging, customs inspection hubs, riverine lighterage",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=22.548,88.310",
    berths: ["Netaji Subhas Dock 4", "Kidderpore Dock Berth 9", "Garden Reach Jetty"],
    weather: "29°C • Wind 7 kts S • Humidity 76% • Haze",
    distToAntarctica: "Approx. 10,200 km",
    clearance: "Level 3",
    activeOps: "Geological Core Drill Packaging"
  },
  {
    id: "mangalore",
    name: "New Mangalore Port",
    state: "Karnataka",
    lon: 74.820,
    lat: 12.930,
    type: "port",
    category: "Coastal Petroleum & Supply Base",
    description: "Supplies aviation turbine fuel (ATF), low-pour-point Arctic diesel (LADD), and lubricants for Antarctic expedition charter vessels.",
    internalDetails: "Oil Jetty 8 & 9 with direct pipeline links to Mangalore Refinery (MRPL); Sub-zero additive blending manifold; Nitrogen purging station for ship fuel tanks before polar departure.",
    facilities: "Dedicated liquid fuel bunkering jetties, hazardous polar lubricant tanks, nitrogen purging system",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=12.930,74.820",
    berths: ["Oil Jetty 8 (LADD Bunkering)", "Oil Jetty 9 (ATF-50 Line)", "General Cargo Berth 5"],
    weather: "28°C • Wind 10 kts W • Humidity 79% • Clear",
    distToAntarctica: "Approx. 9,150 km",
    clearance: "Level 3",
    activeOps: "Arctic Fuel Bunkering (LADD-45)"
  },
  {
    id: "kandla",
    name: "Deendayal Port (Kandla)",
    state: "Gujarat",
    lon: 70.220,
    lat: 23.004,
    type: "port",
    category: "North-Western Heavy Cargo Terminal",
    description: "Specialized dry-bulk and heavy engineering transit port for polar habitat structural steel and prefabricated container modules.",
    internalDetails: "Cargo Berth 12; Open marshalling yard for prefabricated ISO containers; High-tensile steel truss storage area for station structural expansions; Ro-Ro heavy ramp for multi-axle trailers.",
    facilities: "Extensive open-yard staging, heavy machinery handling, multi-axle trailer Ro-Ro ramp",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=23.004,70.220",
    berths: ["Cargo Berth 12", "Dry Bulk Berth 7", "Oil Jetty 3"],
    weather: "32°C • Wind 14 kts WNW • Humidity 55% • Sunny",
    distToAntarctica: "Approx. 10,100 km",
    clearance: "Level 3",
    activeOps: "Heavy Fabrication Staging"
  }
];

// Indian Antarctic Research Stations & Key Antarctic Locations
export const ANTARCTICA_STATIONS = [
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
    weather: "-28.4°C • Wind 34 kts ESE • Pressure 984 hPa • Ice Thickness 1.8m",
    distToAntarctica: "Station located in Queen Maud Land",
    status: "Operational • Full Telemetry Active",
    clearance: "Level 4 (MoES Antarctic Command)",
    established: "1989",
    activeOps: "Wintering Team 44 Active • Atmospheric Radar Scanning"
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
    weather: "-21.2°C • Wind 22 kts NE • Pressure 992 hPa • Clear Satellite Link",
    distToAntarctica: "Station located in Larsemann Hills",
    status: "Operational • High-Bandwidth Satellite Uplink",
    clearance: "Level 5 (MoES Master Station)",
    established: "2012",
    activeOps: "ISRO Remote Sensing Uplink • Geomagnetic Observatory"
  },
  {
    id: "dakshin_gangotri",
    name: "Dakshin Gangotri",
    region: "Princess Astrid Coast",
    lon: 12.000,
    lat: -70.093,
    type: "antarctica",
    category: "Historic 1st Station (1983) & Supply Depot",
    description: "India's pioneering first station in Antarctica, established during the third Indian expedition in 1983-84. Currently preserved as an unmanned historic site, automated weather monitoring post, and emergency supply cache.",
    internalDetails: "Submerged Ice-Shelf Timber Station Structure (preserved under 15m firn/ice); Topside Surface Observation Mast with Automated Weather Station (AWS); Cached emergency survival drums (5,000L LADD fuel, vacuum rations for 10 personnel for 30 days); National Commemorative Plaque & Flagpost.",
    facilities: "Historical Antarctic monument, automated telemetry beacon, cached emergency rations & fuel, AWS weather sensor",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=-70.093,12.000",
    modules: ["Sub-Ice Historical Station Block", "AWS Solar Weather Mast", "Emergency Cache Depot", "National Flagpost"],
    weather: "-32.1°C • Wind 38 kts SE • Pressure 979 hPa • Surface Firn Drifting",
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
    lat: -69.980,
    type: "antarctica",
    category: "Expedition Maritime Discharge & Mooring Port",
    description: "Designated ice-shelf landing point where Indian expedition charter ships moor against fast ice to offload snow vehicles (PistenBullys), fuel bladders, and container modules for convoy traverse to Maitri.",
    internalDetails: "Fast-Ice Mooring Anchor Bollards (Ice screw array); Groomed Snow Ramp for Convoy Vehicle Access; Temporary Fuel Transfer Hose Line (2 km marine grade); Ski-Way Runway (1,200m groomed ice for Dornier 228 / Twin Otter ski-planes); Convoy staging parking yard.",
    facilities: "Fast-ice mooring anchors, heavy cargo ramp, ski-way runway, mobile fuel pump skids, convoy radio shack",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=-69.980,11.917",
    modules: ["Fast-Ice Vessel Mooring Berth", "Heavy Vehicle Snow Ramp", "Ski-Way Airfield", "Mobile Convoy Radio Shelter"],
    weather: "-25.6°C • Wind 28 kts E • Fast-Ice Thickness 2.4m • Open Lead 1.2 NM",
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
    lon: 0.000,
    lat: -90.000,
    type: "antarctica",
    category: "Geographic South Pole Benchmark",
    description: "The southernmost point on Earth (90°00′ S). International scientific reference datum for Indian polar traverse navigation.",
    internalDetails: "Geographic Ceremonial South Pole Marker; Clean Air Sector Atmospheric Baseline Observatory; Ice Drilling IceCube Neutrino Array; Skiway Runway 02/20 (3,658m ice runway); Station Dome & Elevated Dormitory Complex.",
    facilities: "Continental reference datum, atmospheric baseline observatory, skiway runway, international scientific benchmark",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=-90.000,0.000",
    modules: ["Ceremonial Pole Marker", "Clean Air Sector", "IceCube Neutrino Array", "Skiway 02/20"],
    weather: "-48.7°C • Wind 14 kts N • Elevation 2,835 m • Severe Cold",
    distToAntarctica: "Center of Continental Ice Sheet (Elevation: 2,835 m)",
    status: "Reference Benchmark",
    clearance: "Open Scientific Datum",
    established: "1911",
    activeOps: "Geodetic Zero Coordinate"
  }
];

// Polar Vessels navigating between Indian ports and Antarctica
export const POLAR_VESSELS = [
  {
    id: "sagar_nidhi",
    name: "ORV Sagar Nidhi",
    lon: 67.5,
    lat: -38.2,
    type: "ship",
    category: "MoES Ice-Class Oceanographic Vessel",
    status: "Underway • Speed 12.4 kn",
    speed: "12.4 knots",
    heading: "192° South",
    mission: "Deploying ARGO polar ocean floats and conducting Southern Ocean water column profiling."
  },
  {
    id: "vasiliy_golovnin",
    name: "MV Vasiliy Golovnin (Expedition Cargo)",
    lon: 48.0,
    lat: -58.4,
    type: "ship",
    category: "Chartered Polar Ice-Strengthened Vessel",
    status: "Approaching Fast Ice • Speed 9.8 kn",
    speed: "9.8 knots",
    heading: "174° South-South-East",
    mission: "Carrying 1,200 metric tonnes of polar fuel (LADD-45), food containers, and wintering expedition crew."
  },
  {
    id: "sagar_kanya",
    name: "ORV Sagar Kanya",
    lon: 71.0,
    lat: -12.5,
    type: "ship",
    category: "Deep-Sea Research Vessel",
    status: "Tropical Passage • Speed 10.5 kn",
    speed: "10.5 knots",
    heading: "185° South",
    mission: "Atmospheric and monsoon boundary layer observations along India-Antarctica maritime trajectory."
  }
];

// Expedition Routes (Great-Circle Line Coordinates)
export const EXPEDITION_ROUTES = [
  {
    id: "main_polar_voyage",
    name: "Goa to Maitri / India Bay Route",
    coordinates: [
      [73.801, 15.412], // Mormugao Port
      [68.5, 5.0],
      [60.0, -10.0],
      [57.5, -20.1], // Mauritius waypoint
      [48.0, -35.0],
      [35.0, -50.0],
      [22.0, -62.0],
      [11.917, -69.980] // India Bay / Maitri
    ]
  },
  {
    id: "bharati_route",
    name: "Mauritius to Bharati Corridor",
    coordinates: [
      [57.5, -20.1],
      [65.0, -38.0],
      [70.0, -50.0],
      [76.187, -69.407] // Bharati Station
    ]
  },
  {
    id: "mumbai_feeder",
    name: "JNPT / Mumbai to Goa Feeder",
    coordinates: [
      [72.951, 18.950],
      [73.801, 15.412]
    ]
  },
  {
    id: "kochi_feeder",
    name: "Kochi to Polar Corridor",
    coordinates: [
      [76.271, 9.966],
      [68.5, 5.0]
    ]
  },
  {
    id: "chennai_feeder",
    name: "Chennai to Southern Corridor",
    coordinates: [
      [80.294, 13.084],
      [78.0, 5.0],
      [68.5, 5.0]
    ]
  },
  {
    id: "kolkata_feeder",
    name: "Kolkata to Bay of Bengal Link",
    coordinates: [
      [88.310, 22.548],
      [85.0, 15.0],
      [80.294, 13.084]
    ]
  }
];
