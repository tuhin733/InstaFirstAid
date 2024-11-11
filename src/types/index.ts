export interface EmergencyContact {
  country: string;
  ambulance: string;
  police: string;
  fire: string;
}

export interface EmergencyScenario {
  id: string;
  title: string;
  description: string;
  steps: string[];
  warning?: string;
}

export interface MedicalSupply {
  id: string;
  name: string;
  usage: string;
  warnings: string[];
}

export interface Symptom {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  recommendations: string[];
  seekHelp: string[];
}