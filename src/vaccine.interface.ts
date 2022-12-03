import { Document } from "mongoose";

export interface IVaccine extends Document {
    readonly YearWeekISO: string;
    readonly ReportingCountry: string;
    readonly NumberDosesReceived: number;
}