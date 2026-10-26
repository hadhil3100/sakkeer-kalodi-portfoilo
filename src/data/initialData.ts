import { UserProfileState } from '../types/portfolio';

export const INITIAL_PORTFOLIO_DATA: UserProfileState = {
  name: "Sakkeer Kalodi",
  profession: "Vertiv UPS Testing and Commissioning Engineer",
  currentLocation: "Abu Dhabi, UAE",
  nationality: "Indian",
  homeRegion: "Malappuram, Kerala",
  locality: "Randathani",
  localityDetail: "Variyath",
  photoUrl: "images/sakkeer-portrait.jpg",
  heroDescription: "Specializing in the testing, commissioning, and maintenance of high-availability Vertiv UPS systems, critical power architecture, and electrical infrastructure across mission-critical facilities in Abu Dhabi and the UAE.",
  aboutIntro: "I am Sakkeer Kalodi, an Indian electrical engineer currently based in the United Arab Emirates. I work as a Vertiv UPS Testing and Commissioning Engineer at MDS Site and Power in Abu Dhabi. My roots are in Randathani, Malappuram, Kerala, India (Variyath).",
  email: "sakkeerkalodi@gmail.com",
  whatsapp: "",
  social: {
    instagram: "",
    facebook: "",
    linkedin: "",
    github: ""
  },
  skills: [
    {
      id: "vertiv-ups",
      title: "Vertiv UPS Testing & Commissioning",
      icon: "zap",
      desc: "Commissioning of Vertiv Liebert (APM, EXM, Trinergy) 3-phase UPS units, STS, and parallel redundancy bus systems.",
      enabled: true
    },
    {
      id: "battery-testing",
      title: "Battery Bank & Load Bank Testing",
      icon: "activity",
      desc: "VRLA & Lithium-ion battery capacity discharge tests, internal impedance measurements, and full-load bank step testing.",
      enabled: true
    },
    {
      id: "power-systems",
      title: "Critical Power Distribution",
      icon: "cpu",
      desc: "HV/LV power distribution, main distribution boards (MDB/SMDB), busway tap-offs, and critical data center feeds.",
      enabled: true
    },
    {
      id: "maintenance",
      title: "Preventative Overhaul & Thermography",
      icon: "wrench",
      desc: "Infrared thermal imaging, contact resistance checks, capacitor health monitoring, and capacitor/fan replacements.",
      enabled: true
    },
    {
      id: "safety",
      title: "Electrical Safety & LOTO",
      icon: "shield-check",
      desc: "Lockout/Tagout procedures, arc flash safety compliance, earthing integrity testing, and local authority standards.",
      enabled: true
    },
    {
      id: "schematics",
      title: "Drawings & Schematics",
      icon: "file-text",
      desc: "Single-line diagrams (SLD), control schematic analysis, wiring interconnections, and commissioning check-sheets.",
      enabled: true
    },
    {
      id: "troubleshooting",
      title: "Fault Diagnosis & Harmonic Mitigation",
      icon: "alert-triangle",
      desc: "Systematic root-cause fault investigation, bypass transition troubleshooting, and power quality harmonic analysis.",
      enabled: true
    },
    {
      id: "efficiency",
      title: "Power Quality & Efficiency",
      icon: "sun",
      desc: "Eco-mode efficiency validation, THDi reduction, input power factor optimization, and energy metering.",
      enabled: true
    }
  ],
  projects: [
    {
      id: "proj-vertiv-1",
      category: "ups",
      categoryLabel: "Vertiv UPS & Critical Power",
      title: "Vertiv Liebert 3-Phase UPS Commissioning — MDS Site & Power",
      description: "Full testing, commissioning, and black-building changeover verification for multi-module parallel Vertiv UPS systems supporting critical operations.",
      role: "Vertiv UPS Testing & Commissioning Engineer",
      tech: "Vertiv Liebert APM / EXM Series, Static Transfer Switch (STS), Battery Strings",
      outcome: "100% reliable handover with seamless bypass transfers and verified battery autonomy.",
      image: "ups"
    },
    {
      id: "proj-vertiv-2",
      category: "ups",
      categoryLabel: "Vertiv UPS & Critical Power",
      title: "Data Center Battery Bank Capacity & Discharge Run",
      description: "Automated constant-current battery bank discharge testing, thermal logging of battery terminals, and internal cell resistance audits.",
      role: "Testing & Commissioning Lead",
      tech: "Megger / Alber BCT Battery Testers, FLIR Thermal Cameras",
      outcome: "Certified battery health and autonomy matching emergency load requirements.",
      image: "battery"
    },
    {
      id: "proj-3",
      category: "distribution",
      categoryLabel: "Power Distribution",
      title: "Main Distribution Board (MDB) & Switchgear Integration",
      description: "Site installation verification, busbar torque auditing, insulation resistance testing, and protection relay trip checks.",
      role: "Electrical Commissioning Engineer",
      tech: "Air Circuit Breakers (ACB), Busbar Trunking, Microprocessor Relays",
      outcome: "Approved by consultant and facility engineering team with zero defects.",
      image: "substation"
    },
    {
      id: "proj-4",
      category: "maintenance",
      categoryLabel: "Maintenance & Overhaul",
      title: "Thermographic Survey & Hotspot Rectification Campaign",
      description: "Comprehensive non-destructive thermographic survey across all main power panels, identifying and re-torquing elevated temperature connections.",
      role: "Maintenance Specialist",
      tech: "FLIR Thermal Imager, Calibrated Torque Wrenches, Micro-Ohmmeter",
      outcome: "Prevented electrical hotspot failures and improved connection reliability.",
      image: "maintenance"
    },
    {
      id: "proj-5",
      category: "control",
      categoryLabel: "Control Systems",
      title: "Building Management System (BMS) UPS Telemetry Integration",
      description: "Integration of Vertiv UPS Modbus / SNMP communication cards with centralized BMS and SCADA monitoring networks.",
      role: "Commissioning Specialist",
      tech: "Vertiv Unity Cards, Modbus RTU/TCP, Network Monitoring",
      outcome: "Real-time telemetry and alarm notifications delivered to facility engineers.",
      image: "control"
    }
  ],
  journey: [
    {
      id: "j-1",
      year: "2024 - Present",
      type: "Active Practice",
      title: "Vertiv UPS Testing and Commissioning Engineer",
      organization: "MDS Site and Power &bull; Abu Dhabi, United Arab Emirates",
      desc: "Conducting site testing, pre-commissioning, parallel synchronization, load bank tests, and customer handovers for Vertiv UPS critical infrastructure."
    },
    {
      id: "j-2",
      year: "Career Growth",
      type: "Regional Transition",
      title: "Engineering Transition to the United Arab Emirates",
      organization: "United Arab Emirates",
      desc: "Expanded professional footprint into the UAE engineering market, gaining specialized mastery in critical power solutions and local standards."
    },
    {
      id: "j-3",
      year: "Academic Foundation",
      type: "Education",
      title: "Degree in Electrical & Electronics Engineering",
      organization: "Kerala, India",
      desc: "Strong foundational curriculum covering electrical machines, power electronics, power systems, and high-voltage transmission."
    },
    {
      id: "j-4",
      year: "Origins & Heritage",
      type: "Heritage",
      title: "Early Engineering Foundations in Randathani",
      organization: "Malappuram, Kerala, India (Variyath)",
      desc: "Nurtured an early passion for electrical machinery, automation, and technological innovation in hometown of Randathani."
    }
  ]
};
