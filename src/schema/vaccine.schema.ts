import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { configs } from "../../config/configuration";

@Schema({ collection: configs.covid.mongoCollectionName })
export class Vaccine extends Document {

    @Prop({ unique: true })
    id: Types.ObjectId;

    // --------------------------------------------------
    // Variable: YearWeekISO
    // Definition: Date when the vaccine was received/administered.
    // Only weeks are allowed (e.g "2020-W01")
    // Code: yyyy-Www
    // Ecample: 2020-W53
    @Prop()
    YearWeekISO: string;

    // ReportingCountry ISO 3166-1-alpha-2 two-letter code
    @Prop()
    ReportingCountry: string;

    // Denominator Population denominators for target groups (total population and age-specific population obtained from Eurostat/UN).
    // Denominators reported by countries for TargetGroup = “HCW” and TargetGroup = “LTCF”
    @Prop()
    Denominator: number;

    // NumberDosesReceived Number of vaccine doses distributed by the manufacturers to the country during the reporting week.
    @Prop()
    NumberDosesReceived: number;

    // NumberDosesExported Number of vaccine doses donated or sold by the country during the reporting week.
    @Prop()
    NumberDosesExported: number;

    // FirstDose Number of first dose vaccine administered to individuals during the reporting week.
    @Prop()
    FirstDose: number;

    // FirstDoseRefused Number of individuals refusing the first vaccine dose.
    @Prop()
    FirstDoseRefused: number;

    // SecondDose Number of second dose vaccine administered to individuals during the reporting week.
    @Prop()
    SecondDose: number;

    // DoseAdditional1 Number of first additional vaccine doses administered after a complete standard primary course to individuals during the reporting week.
    @Prop()
    DoseAdditional1: number;

    // DoseAdditional2  Number of second additional vaccine doses administered after a complete standard primary course to individuals during the reporting week.
    @Prop()
    DoseAdditional2: number;

    // DoseAdditional3 Number of third additional vaccine doses administered after a complete standard primary course to individuals during the reporting week.
    @Prop()
    DoseAdditional3: number;

    // DoseUnk Number of doses administered during the reporting week where the type of dose was not specified (i.e. it is not known whether it was a first or second dose).
    @Prop()
    UnknownDose: number;

    // Region As a minimum data should be reported at national level (Region = country code). Country/NUTS1 or 2/GAUL1/Country specific
    @Prop()
    Region: string;

    // TargetGroup Target group for vaccination.
    @Prop()
    TargetGroup: number;

    // Vaccine name Name of vaccine. Additional vaccines will be added on approval or as requested.
    @Prop()
    VaccineName: string;

    // Population Age-specific population for the Numeric country
    @Prop()
    Population: number;
}

export const VaccineSchema = SchemaFactory.createForClass(Vaccine);