export interface EmergencyCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  symptoms: string[];
}

export interface EmergencyScenario {
  id: string;
  categoryId: string;
  title: string;
  description: string;
  steps: string[];
  warning: string;
}

export interface EmergencyContact {
  country: string;
  ambulance: string;
  police: string;
  fire: string;
}

export interface MedicalSupply {
  id: string;
  name: string;
  description: string;
  quantity: number;
  category: string;
  essential: boolean;
  warnings: string[];
}

export interface Symptom {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  severity: string;
  commonCauses: string[];
  recommendations: string[];
  seekMedicalAttention: boolean;
}

export interface Medication {
  id: string;
  name: string;
  description: string;
  category: string;
  examples: string[];
  dosageForm: string[];
  commonUses: string[];
  warnings: string[];
  essential: boolean;
}
