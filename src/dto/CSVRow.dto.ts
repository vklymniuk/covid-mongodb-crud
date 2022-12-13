import { AutoMap } from '@automapper/classes';

export class CSVHeaderDto {
  @AutoMap() //"2020-W53"
  YearWeekISO: string;

  @AutoMap() // "AT"
  ReportingCountry: string;

  @AutoMap() // "7388778"
  Denominator: string;

  @AutoMap() // "0"
  NumberDosesReceived: number;

  @AutoMap() // "0"
  NumberDosesExported: number;

  @AutoMap() // "0"
  FirstDose: number;

  @AutoMap() // "0"
  SecondDose: number;

  @AutoMap() // "0"
  DoseAdditional1: number;

  @AutoMap() // "0"
  DoseAdditional2: number;

  @AutoMap() // "0"
  DoseAdditional3: number;

  @AutoMap() // "0"
  UnknownDose: number;

  @AutoMap() // "AT"
  Region: string;

  @AutoMap() // "ALL"
  TargetGroup: string;

  @AutoMap() // "VLA"
  Vaccine: string;

  @AutoMap() // "8901064"
  Population: string;

  constructor(row: Array<any>) {
    Object.assign(this, row);
  }
}
