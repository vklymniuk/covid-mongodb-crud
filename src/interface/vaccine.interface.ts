import { Document, Types } from 'mongoose';

export interface VaccineInterface {
  YearWeekISO: string;
  ReportingCountry: string;
  Denominator: number;
  NumberDosesReceived: number;
  NumberDosesExported: number;
  FirstDose: number;
  FirstDoseRefused: number;
  SecondDose: number;
  DoseAdditional1: number;
  DoseAdditional2: number;
  DoseAdditional3: number;
  DoseUnk: number;
  Region: string;
  TargetGroup: number;
  VaccineName: string;
  Population: number;
}
