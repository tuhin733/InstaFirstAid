import { Medication } from "../../types";

export const medications: Medication[] = [
  {
    id: "painRelievers",
    name: "Pain Relievers",
    description: "For pain, fever, and inflammation",
    category: "Over-the-Counter",
    examples: [
      "Acetaminophen (Tylenol)",
      "Ibuprofen (Advil, Motrin)",
      "Aspirin",
    ],
    dosageForm: ["Tablets", "Liquid", "Gel caps"],
    commonUses: [
      "Headaches",
      "Muscle pain",
      "Fever reduction",
      "Minor injuries",
      "Arthritis pain",
    ],
    warnings: [
      "Follow recommended dosage",
      "Do not combine different pain relievers",
      "Check expiration dates",
      "Store in cool, dry place",
    ],
    essential: true,
  },
  {
    id: "antihistamines",
    name: "Antihistamines",
    description: "For allergies and allergic reactions",
    category: "Over-the-Counter",
    examples: [
      "Diphenhydramine (Benadryl)",
      "Loratadine (Claritin)",
      "Cetirizine (Zyrtec)",
    ],
    dosageForm: ["Tablets", "Liquid", "Gel caps"],
    commonUses: [
      "Allergic reactions",
      "Hay fever",
      "Itching",
      "Insect bites",
      "Hives",
    ],
    warnings: [
      "May cause drowsiness",
      "Do not drive while taking diphenhydramine",
      "Avoid alcohol",
      "Check for interactions with other medications",
    ],
    essential: true,
  },
  {
    id: "antacids",
    name: "Antacids",
    description: "For heartburn and indigestion",
    category: "Over-the-Counter",
    examples: [
      "Calcium carbonate (Tums)",
      "Famotidine (Pepcid)",
      "Omeprazole (Prilosec)",
    ],
    dosageForm: ["Tablets", "Chewables", "Liquid"],
    commonUses: ["Heartburn", "Acid reflux", "Indigestion", "Stomach upset"],
    warnings: [
      "Do not exceed recommended dose",
      "May interact with other medications",
      "Consult doctor if symptoms persist",
      "Take on empty stomach (some types)",
    ],
    essential: false,
  },
  {
    id: "antibioticOintment",
    name: "Antibiotic Ointment",
    description: "For preventing infection in minor wounds",
    category: "Over-the-Counter",
    examples: [
      "Bacitracin",
      "Neomycin/Polymyxin (Neosporin)",
      "Triple Antibiotic Ointment",
    ],
    dosageForm: ["Ointment", "Cream"],
    commonUses: ["Minor cuts", "Scrapes", "Burns", "Preventing infection"],
    warnings: [
      "External use only",
      "Do not use on deep wounds",
      "Stop if rash develops",
      "Keep away from eyes",
    ],
    essential: true,
  },
  {
    id: "oralRehydration",
    name: "Oral Rehydration Salts",
    description: "For preventing/treating dehydration",
    category: "Over-the-Counter",
    examples: ["Pedialyte", "WHO Oral Rehydration Solution", "DripDrop"],
    dosageForm: ["Powder packets", "Ready-to-drink solution"],
    commonUses: [
      "Dehydration",
      "Diarrhea",
      "Heat exhaustion",
      "Excessive sweating",
    ],
    warnings: [
      "Follow mixing instructions exactly",
      "Do not add extra sugar",
      "Use clean water",
      "Discard unused solution after 24 hours",
    ],
    essential: true,
  },
  {
    id: "burnGel",
    name: "Burn Gel/Cream",
    description: "For minor burns and sunburns",
    category: "Over-the-Counter",
    examples: [
      "Aloe Vera Gel",
      "Lidocaine Burn Gel",
      "Silver Sulfadiazine (prescription)",
    ],
    dosageForm: ["Gel", "Cream"],
    commonUses: [
      "First degree burns",
      "Sunburn",
      "Minor thermal burns",
      "Pain relief",
    ],
    warnings: [
      "Do not use on severe burns",
      "Seek medical attention for chemical burns",
      "Keep away from eyes",
      "Do not apply to open blisters",
    ],
    essential: false,
  },
];
