import { EmergencyContact, EmergencyScenario, MedicalSupply, Symptom } from '../types';

export const emergencyContacts: EmergencyContact[] = [
  {
    country: "Afghanistan",
    ambulance: "112",
    police: "119",
    fire: "119"
  },
  {
    country: "Argentina",
    ambulance: "107",
    police: "101",
    fire: "100"
  },
  {
    country: "Australia",
    ambulance: "000",
    police: "000",
    fire: "000"
  },
  {
    country: "Austria",
    ambulance: "144",
    police: "133",
    fire: "122"
  },
  {
    country: "Bangladesh",
    ambulance: "199",
    police: "999",
    fire: "199"
  },
  {
    country: "Belgium",
    ambulance: "112",
    police: "101",
    fire: "112"
  },
  {
    country: "Bhutan",
    ambulance: "112",
    police: "113",
    fire: "110"
  },
  {
    country: "Brazil",
    ambulance: "192",
    police: "190",
    fire: "193"
  },
  {
    country: "Canada",
    ambulance: "911",
    police: "911",
    fire: "911"
  },
  {
    country: "Chile",
    ambulance: "131",
    police: "133",
    fire: "132"
  },
  {
    country: "China",
    ambulance: "120",
    police: "110",
    fire: "119"
  },
  {
    country: "Denmark",
    ambulance: "112",
    police: "112",
    fire: "112"
  },
  {
    country: "Egypt",
    ambulance: "123",
    police: "122",
    fire: "180"
  },
  {
    country: "Finland",
    ambulance: "112",
    police: "112",
    fire: "112"
  },
  {
    country: "France",
    ambulance: "15",
    police: "17",
    fire: "18"
  },
  {
    country: "Germany",
    ambulance: "112",
    police: "110",
    fire: "112"
  },
  {
    country: "Greece",
    ambulance: "166",
    police: "100",
    fire: "199"
  },
  {
    country: "India",
    ambulance: "102",
    police: "100",
    fire: "101"
  },
  {
    country: "Indonesia",
    ambulance: "118",
    police: "110",
    fire: "113"
  },
  {
    country: "Ireland",
    ambulance: "112",
    police: "112",
    fire: "112"
  },
  {
    country: "Israel",
    ambulance: "101",
    police: "100",
    fire: "102"
  },
  {
    country: "Italy",
    ambulance: "118",
    police: "113",
    fire: "115"
  },
  {
    country: "Japan",
    ambulance: "119",
    police: "110",
    fire: "119"
  },
  {
    country: "Kenya",
    ambulance: "999",
    police: "999",
    fire: "999"
  },
  {
    country: "Maldives",
    ambulance: "102",
    police: "119",
    fire: "118"
  },
  {
    country: "Mexico",
    ambulance: "065",
    police: "911",
    fire: "068"
  },
  {
    country: "Myanmar",
    ambulance: "192",
    police: "199",
    fire: "191"
  },
  {
    country: "Nepal",
    ambulance: "102",
    police: "100",
    fire: "101"
  },
  {
    country: "Netherlands",
    ambulance: "112",
    police: "112",
    fire: "112"
  },
  {
    country: "New Zealand",
    ambulance: "111",
    police: "111",
    fire: "111"
  },
  {
    country: "Nigeria",
    ambulance: "112",
    police: "199",
    fire: "199"
  },
  {
    country: "Norway",
    ambulance: "113",
    police: "112",
    fire: "110"
  },
  {
    country: "Pakistan",
    ambulance: "115",
    police: "15",
    fire: "16"
  },
  {
    country: "Philippines",
    ambulance: "911",
    police: "911",
    fire: "911"
  },
  {
    country: "Portugal",
    ambulance: "112",
    police: "112",
    fire: "112"
  },
  {
    country: "Russia",
    ambulance: "103",
    police: "102",
    fire: "101"
  },
  {
    country: "Saudi Arabia",
    ambulance: "997",
    police: "999",
    fire: "998"
  },
  {
    country: "Singapore",
    ambulance: "995",
    police: "999",
    fire: "995"
  },
  {
    country: "South Africa",
    ambulance: "10177",
    police: "10111",
    fire: "10177"
  },
  {
    country: "South Korea",
    ambulance: "119",
    police: "112",
    fire: "119"
  },
  {
    country: "Spain",
    ambulance: "112",
    police: "112",
    fire: "112"
  },
  {
    country: "Sri Lanka",
    ambulance: "1990",
    police: "118",
    fire: "110"
  },
  {
    country: "Sweden",
    ambulance: "112",
    police: "112",
    fire: "112"
  },
  {
    country: "Switzerland",
    ambulance: "144",
    police: "117",
    fire: "118"
  },
  {
    country: "Thailand",
    ambulance: "1669",
    police: "191",
    fire: "199"
  },
  {
    country: "Turkey",
    ambulance: "112",
    police: "155",
    fire: "110"
  },
  {
    country: "Ukraine",
    ambulance: "103",
    police: "102",
    fire: "101"
  },
  {
    country: "United Arab Emirates",
    ambulance: "998",
    police: "999",
    fire: "997"
  },
  {
    country: "United Kingdom",
    ambulance: "999",
    police: "999",
    fire: "999"
  },
  {
    country: "United States",
    ambulance: "911",
    police: "911",
    fire: "911"
  },
  {
    country: "Vietnam",
    ambulance: "115",
    police: "113",
    fire: "114"
  }
];


export const emergencyScenarios: EmergencyScenario[] = [
  {
    id: "bleeding",
    title: "Cuts and Bleeding",
    description: 'How to handle wounds and control bleeding',
    steps: [
      "Clean your hands and put on disposable gloves if available",
      "Apply direct pressure with a clean cloth or gauze",
      "Clean the wound with water once bleeding slows",
      "Apply antibiotic ointment and cover with sterile bandage"
    ],
    warning: "Seek immediate medical attention if bleeding is severe or doesn't stop"
  },
  {
    id: "burns",
    title: "Burns",
    description: 'Treatment for thermal burns and scalds',
    steps: [
      "Remove from heat source and cool the burn under cool running water",
      "Keep the burn under water for at least 10 minutes",
      "Remove any jewelry or tight items near the burned area",
      "Cover loosely with sterile gauze or clean cloth"
    ],
    warning: "Do not apply ice, butter, or ointments. Seek medical help for severe burns."
  },
  {
    id: "choking",
    title: "Choking",
    description: 'Emergency response for choking victims',
    steps: [
      "Encourage the person to cough",
      "Perform 5 back blows between shoulder blades",
      "Perform 5 abdominal thrusts (Heimlich maneuver)",
      "Alternate between back blows and abdominal thrusts"
    ],
    warning: "Call emergency services immediately if person becomes unconscious"
  },
  {
    id: "sprains",
    title: "Sprains",
    description: 'First aid for sprains and strains',
    steps: [
      "Rest the injured area",
      "Apply ice pack wrapped in cloth for 15-20 minutes",
      "Apply compression with elastic bandage",
      "Elevate the injured area above heart level"
    ],
    warning: ""
  },
  {
    id: "seizures",
    title: "Seizures",
    description: 'How to help someone having a seizure',
    steps: [
      "Clear the area of harmful objects",
      "Ease the person to the floor if they are standing",
      "Turn them onto their side",
      "Cushion their head",
      "Time the seizure if possible"
    ],
    warning: "Never put anything in their mouth. Call emergency services if seizure lasts more than 5 minutes."
  },
  {
    id: "heatstroke",
    title: "Heatstroke",
    description: 'Recognizing and treating heatstroke',
    steps: [
      "Move person to a cool place",
      "Remove excess clothing",
      "Cool with water and fanning",
      "Apply ice packs to neck, armpits, and groin"
    ],
    warning: "This is a medical emergency. Call for help immediately."
  },
  {
    id: "poisoning",
    title: "Poisoning",
    description: 'Steps to take in case of poisoning',
    steps: [
      "Call poison control immediately",
      "Do not induce vomiting unless told to do so",
      "Collect the poison container/sample if available",
      "Follow poison control instructions exactly"
    ],
    warning: "Call emergency services if person is unconscious or having difficulty breathing"
  }
];


export const medicalSupplies: MedicalSupply[] = [
  {
    id: "bandage",
    name: "Adhesive Bandages",
    usage: "Clean wound area, apply antibiotic ointment if available, center bandage over wound",
    warnings: ["Replace if wet or dirty", "Watch for signs of infection"]
  },
  {
    id: "antiseptic",
    name: "Antiseptic Wipes",
    usage: "Gently clean wound area in circular motion from center outward",
    warnings: ["Avoid contact with eyes", "Test on small area first if sensitive skin"]
  },
  {
    id: "gauze",
    name: "Sterile Gauze Pads",
    usage: "Place directly on wound to absorb fluids, secure with adhesive tape or bandage",
    warnings: ["Replace if saturated", "Use sterile gloves to avoid contamination"]
  },
  {
    id: "tape",
    name: "Adhesive Medical Tape",
    usage: "Secure gauze or dressings around wound, cut to desired length",
    warnings: ["Avoid using on irritated skin", "Do not apply too tightly"]
  },
  {
    id: "elastic_bandage",
    name: "Elastic Bandage",
    usage: "Wrap around sprained or strained area, securing with clips",
    warnings: ["Do not wrap too tightly, check for circulation", "Replace if dirty"]
  },
  {
    id: "tweezers",
    name: "Tweezers",
    usage: "Use to remove splinters or small debris from skin",
    warnings: ["Clean with alcohol before and after use", "Avoid contact with eyes"]
  },
  {
    id: "scissors",
    name: "Medical Scissors",
    usage: "Cut gauze, tape, or clothing away from injured area",
    warnings: ["Handle with care, keep away from children", "Clean with alcohol after use"]
  },
  {
    id: "cold_pack",
    name: "Instant Cold Pack",
    usage: "Squeeze to activate, apply on swollen or bruised area for 10-15 minutes",
    warnings: ["Do not apply directly to skin, use a cloth wrap", "Avoid if allergic to contents"]
  },
  {
    id: "pain_reliever",
    name: "Pain Reliever (Ibuprofen)",
    usage: "Take orally as directed on packaging for minor aches and pains",
    warnings: ["Follow dosage instructions", "Consult a doctor if allergic"]
  },
  {
    id: "burn_ointment",
    name: "Burn Ointment",
    usage: "Apply thin layer on affected area to soothe minor burns",
    warnings: ["Do not use on severe burns", "Discontinue if rash appears"]
  },
  {
    id: "cpr_mask",
    name: "CPR Face Shield",
    usage: "Place over patient's mouth for safe resuscitation",
    warnings: ["For one-time use only", "Discard after use"]
  },
  {
    id: "thermometer",
    name: "Digital Thermometer",
    usage: "Place under tongue or in armpit, wait for reading",
    warnings: ["Sanitize after each use", "Avoid using if broken"]
  },
  {
    id: "saline_solution",
    name: "Saline Solution",
    usage: "Use to rinse wounds or flush out eyes",
    warnings: ["Do not ingest", "Replace cap tightly after use"]
  },
  {
    id: "gloves",
    name: "Disposable Gloves",
    usage: "Wear gloves to avoid contamination when treating wounds",
    warnings: ["Dispose after one use", "Avoid if allergic to latex (use nitrile gloves instead)"]
  },
  {
    id: "safety_pins",
    name: "Safety Pins",
    usage: "Secure bandages or slings in place",
    warnings: ["Handle with care", "Keep away from children"]
  },
  {
    id: "oral_rehydration_salts",
    name: "Oral Rehydration Salts (ORS)",
    usage: "Dissolve in water and drink to help rehydrate during vomiting or diarrhea",
    warnings: ["Follow instructions for mixing", "Consult doctor if vomiting persists"]
  },
  {
    id: "anti_diarrheal",
    name: "Anti-Diarrheal Medication (e.g. Imodium)",
    usage: "Take orally as directed to control symptoms of diarrhea",
    warnings: ["Drink plenty of water to avoid dehydration", "Consult doctor if diarrhea persists"]
  },
  {
    id: "antihistamine",
    name: "Antihistamine Tablets (e.g. Cetirizine, Levocetirizine)",
    usage: "Take orally to relieve symptoms of allergies",
    warnings: ["May cause drowsiness", "Consult a doctor if pregnant or on medication"]
  },
  {
    id: "triangular_bandage",
    name: "Triangular Bandage",
    usage: "Use as a sling or to secure dressings",
    warnings: ["Check for comfort and circulation", "Avoid using on open wounds"]
  },
  {
    id: "eye_drops",
    name: "Sterile Eye Drops (e.g. Refresh, Visine)",
    usage: "Administer drops in the eye for relief from dryness or irritation",
    warnings: ["Do not touch the dropper to any surface", "Avoid if you have eye infections"]
  },
  {
    id: "fever_medication",
    name: "Fever Medication (e.g. Paracetamole, Calpol)",
    usage: "Take orally as directed to reduce fever",
    warnings: ["Follow dosage instructions", "Consult doctor if fever persists for more than 3 days"]
  },
  {
    id: "headache_relief",
    name: "Headache Relief (e.g. Disprin, Dolo 650)",
    usage: "Take orally to relieve mild to moderate headache",
    warnings: ["Do not exceed recommended dose", "Consult doctor if persistent headaches occur"]
  },
  {
    id: "cough_syrup",
    name: "Cough Syrup (e.g. Benadryl, Honitus)",
    usage: "Take orally as directed to relieve cough",
    warnings: ["Follow dosage instructions", "May cause drowsiness, avoid alcohol"]
  },
  {
    id: "cold_medicine",
    name: "Cold Medicine (e.g. Sinarest, Vicks Action 500)",
    usage: "Take orally to relieve symptoms of cold such as nasal congestion",
    warnings: ["May cause drowsiness", "Avoid if you have high blood pressure unless prescribed"]
  }
];



export const symptoms: Symptom[] = [
  {
    id: "fever",
    name: "Fever",
    subtitle: "When body temperature rises above normal",
    description: "Body temperature above 38°C (100.4°F)",
    recommendations: [
      "Rest and stay hydrated",
      "Take appropriate fever reducer",
      "Use cool compress"
    ],
    seekHelp: [
      "Temperature above 39.4°C (103°F)",
      "Fever lasting more than 3 days",
      "Severe headache or stiff neck"
    ]
  },
  {
    id: "cuts",
    name: "Cuts and Scrapes",
    subtitle: "How to handle minor wounds",
    description: "Minor wounds that don't extend past the skin's surface",
    recommendations: [
      "Clean with soap and water",
      "Apply antibiotic ointment",
      "Cover with sterile bandage"
    ],
    seekHelp: [
      "Deep wounds",
      "Signs of infection",
      "Wounds that won't stop bleeding"
    ]
  },
  {
    id: "headache",
    name: "Headache",
    subtitle: "Common types of headaches and relief tips",
    description: "Pain in the head that can vary in location and intensity",
    recommendations: [
      "Rest in a quiet, dark room",
      "Stay hydrated",
      "Use over-the-counter pain relief if necessary"
    ],
    seekHelp: [
      "Severe or sudden headache",
      "Headache with fever or neck stiffness",
      "Headache after head injury"
    ]
  },
  {
    id: "cold",
    name: "Cold",
    subtitle: "Relief and care for common cold symptoms",
    description: "A viral infection causing sore throat, cough, and congestion",
    recommendations: [
      "Stay hydrated",
      "Rest as much as possible",
      "Use decongestants or saline nasal spray for relief"
    ],
    seekHelp: [
      "Symptoms lasting more than 10 days",
      "High fever or chest pain",
      "Difficulty breathing"
    ]
  },
  {
    id: "allergicReaction",
    name: "Allergic Reaction",
    subtitle: "Immediate care for mild allergic symptoms",
    description: "Response to allergen exposure, causing itchiness, rash, or swelling",
    recommendations: [
      "Take an antihistamine",
      "Apply cool compresses to itchy areas",
      "Avoid known allergens"
    ],
    seekHelp: [
      "Difficulty breathing or swelling in throat",
      "Severe or worsening symptoms",
      "Symptoms that persist despite treatment"
    ]
  },
  {
    id: "dehydration",
    name: "Dehydration",
    subtitle: "Signs of dehydration and rehydration tips",
    description: "When the body loses more fluid than it takes in",
    recommendations: [
      "Drink water or oral rehydration solutions",
      "Avoid caffeinated drinks",
      "Rest in a cool place"
    ],
    seekHelp: [
      "Severe weakness or dizziness",
      "Lack of urination for over 8 hours",
      "Confusion or fainting"
    ]
  },
  {
    id: "diarrhea",
    name: "Diarrhea",
    subtitle: "Managing symptoms and preventing dehydration",
    description: "Frequent loose or watery stools",
    recommendations: [
      "Stay hydrated with water or electrolyte drinks",
      "Avoid dairy, caffeine, and greasy foods",
      "Rest and take over-the-counter anti-diarrheal if necessary"
    ],
    seekHelp: [
      "Diarrhea lasting more than 2 days",
      "Severe abdominal pain or fever",
      "Signs of dehydration"
    ]
  },
  {
    id: "backPain",
    name: "Back Pain",
    subtitle: "Managing mild to moderate back pain",
    description: "Pain in the back, often from strain or poor posture",
    recommendations: [
      "Apply heat or cold packs",
      "Rest and avoid heavy lifting",
      "Use over-the-counter pain relief if necessary"
    ],
    seekHelp: [
      "Pain radiating down legs",
      "Loss of bladder control",
      "Pain lasting more than a few days"
    ]
  },
  {
    id: "stomachAche",
    name: "Stomach Ache",
    subtitle: "Common causes and relief for stomach pain",
    description: "Pain or discomfort in the abdomen",
    recommendations: [
      "Drink clear fluids",
      "Eat small, bland meals",
      "Avoid alcohol and fatty foods"
    ],
    seekHelp: [
      "Severe or persistent pain",
      "Blood in vomit or stool",
      "High fever with abdominal pain"
    ]
  },
  {
    id: "nausea",
    name: "Nausea and Vomiting",
    subtitle: "Ways to manage nausea and prevent dehydration",
    description: "Feeling sick to the stomach, sometimes leading to vomiting",
    recommendations: [
      "Sip water or ginger tea slowly",
      "Avoid solid foods until feeling better",
      "Eat bland foods like crackers when ready"
    ],
    seekHelp: [
      "Vomiting lasting more than 24 hours",
      "Inability to keep fluids down",
      "Signs of dehydration"
    ]
  },
  {
    id: "musclePain",
    name: "Muscle Pain",
    subtitle: "Treating sore or strained muscles",
    description: "Pain or soreness in muscles, often from overuse or injury",
    recommendations: [
      "Rest and avoid straining the muscle",
      "Apply ice or heat packs",
      "Use pain relief if necessary"
    ],
    seekHelp: [
      "Severe or persistent pain",
      "Muscle weakness or inability to move",
      "Pain with swelling or redness"
    ]
  },
  {
    id: "toothache",
    name: "Toothache",
    subtitle: "Managing dental pain and discomfort",
    description: "Pain in or around a tooth",
    recommendations: [
      "Rinse with warm saltwater",
      "Apply a cold compress to the outside of the cheek",
      "Take over-the-counter pain relief"
    ],
    seekHelp: [
      "Severe or persistent pain",
      "Swelling in gums or face",
      "Signs of infection, such as fever"
    ]
  },
  {
    id: "constipation",
    name: "Constipation",
    subtitle: "Ways to relieve and prevent constipation",
    description: "Difficulty or infrequent bowel movements",
    recommendations: [
      "Increase fiber and water intake",
      "Exercise regularly",
      "Try an over-the-counter laxative if needed"
    ],
    seekHelp: [
      "Severe abdominal pain",
      "Constipation lasting more than a week",
      "Vomiting or inability to pass gas"
    ]
  },
  {
    id: "soreThroat",
    name: "Sore Throat",
    subtitle: "Relief tips for a sore or scratchy throat",
    description: "Pain, irritation, or scratchiness in the throat",
    recommendations: [
      "Drink warm fluids and stay hydrated",
      "Gargle with warm salt water",
      "Use throat lozenges for relief"
    ],
    seekHelp: [
      "Severe sore throat with fever",
      "Difficulty swallowing or breathing",
      "Symptoms lasting more than a week"
    ]
  },
  {
    id: "earache",
    name: "Earache",
    subtitle: "Dealing with ear pain and discomfort",
    description: "Pain in the ear, often due to infection or pressure changes",
    recommendations: [
      "Apply a warm compress to the ear",
      "Use over-the-counter ear drops or pain relievers",
      "Avoid inserting anything into the ear"
    ],
    seekHelp: [
      "Severe or worsening pain",
      "Hearing loss or drainage from the ear",
      "High fever with ear pain"
    ]
  },
  {
    id: "blisters",
    name: "Blisters",
    subtitle: "Care tips for preventing infection",
    description: "Fluid-filled skin bumps caused by friction or burns",
    recommendations: [
      "Keep the blister clean and dry",
      "Cover with a loose bandage if needed",
      "Avoid popping the blister"
    ],
    seekHelp: [
      "Signs of infection (redness, warmth, pus)",
      "Large or painful blisters",
      "Blisters from burns or chemical exposure"
    ]
  },
  {
    id: "rash",
    name: "Rash",
    subtitle: "Understanding and managing skin rashes",
    description: "Areas of irritated or swollen skin, often itchy or red",
    recommendations: [
      "Keep skin clean and dry",
      "Use over-the-counter creams for itching",
      "Avoid scratching the rash"
    ],
    seekHelp: [
      "Rash with fever or spreading quickly",
      "Painful or blistering rash",
      "Rash that doesn't improve in a few days"
    ]
  },
  {
    id: "dizziness",
    name: "Dizziness",
    subtitle: "Managing lightheadedness or balance issues",
    description: "A feeling of being unsteady or lightheaded",
    recommendations: [
      "Sit or lie down until feeling steady",
      "Drink water if dehydrated",
      "Avoid sudden movements"
    ],
    seekHelp: [
      "Fainting or loss of consciousness",
      "Dizziness with chest pain or shortness of breath",
      "Frequent or worsening episodes"
    ]
  },
  {
    id: "itchiness",
    name: "Itchiness",
    subtitle: "Tips for relieving itchy skin",
    description: "An irritating sensation that prompts scratching",
    recommendations: [
      "Apply moisturizing lotion or anti-itch cream",
      "Avoid hot showers and scented products",
      "Wear loose, comfortable clothing"
    ],
    seekHelp: [
      "Itching with rash or hives",
      "Severe itching lasting more than a few days",
      "Itching with other symptoms like fever"
    ]
  },
  {
    id: "indigestion",
    name: "Indigestion",
    subtitle: "Soothing an upset stomach",
    description: "Discomfort in the stomach, often after eating",
    recommendations: [
      "Eat smaller meals slowly",
      "Avoid spicy and fatty foods",
      "Use antacids for relief"
    ],
    seekHelp: [
      "Severe or persistent pain",
      "Blood in vomit or stools",
      "Unexplained weight loss"
    ]
  }
];