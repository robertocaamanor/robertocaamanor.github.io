// Tipos para el CV y datos del portfolio

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  description: string;
  url?: string;
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  period: string;
  location: string;
  description: string;
}

export interface Language {
  name: string;
  level: string;
  percentage: number;
}

export interface Achievement {
  title: string;
  description: string;
  year: string;
}

export interface Reference {
  name: string;
  description: string;
}

export interface CVData {
  header: {
    title: string;
    lastUpdated: string;
    version: string;
  };
  education: Education[];
  certifications: Certification[];
  languages: Language[];
  softSkills: string[];
  achievements: Achievement[];
  references: Reference[];
}

export interface PDFConfig {
  format: string;
  orientation: string;
  unit: string;
  margin: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
}