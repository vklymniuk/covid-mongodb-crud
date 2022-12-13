import { createReadStream } from 'fs';
import { parse } from 'csv-parse';
import { Injectable } from '@nestjs/common';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { VaccineRepository } from '../schema/vaccine-repository';
import { CSVHeaderDto } from '../dto/CSVRow.dto';
import { Vaccine } from '../schema/vaccine.schema';

@Injectable()
export class SeedVaccinesSampleDocumentsUploader {
  constructor(
    @InjectMapper() private readonly mapper: Mapper,
    private readonly repository: VaccineRepository,
  ) {}

  async execute() {
    console.log(1);
    const processFile = async () => {
      const records = [];
      const parser = createReadStream('../data/origindata.csv', {
        encoding: 'utf-8',
      }).pipe(parse({ delimiter: ',', from_line: 2 }));

      for await (const row of parser) {
        const tmpRow: CSVHeaderDto = new CSVHeaderDto(row);
        const doc: Vaccine = new Vaccine(tmpRow);

        records.push(doc);
      }

      return records;
    };

    const t = await processFile();
    console.log(t);
    process.exit(1);
    // Algorithm
    // read row
    // map row
    // store in database if not exists (upsert?)
    // next

    // this.repository.save();

    //
    // const proccessFile = async () => {
    //     const records = [];
    //     const parser = createReadStream(
    //         "/Users/vova/WorkApplications/03_covid/covid-mongodb-crud/src/data/origindata.csv",
    //         { encoding: "utf-8" }
    //     ).pipe(parse({ delimiter: ",", from_line: 2 } ));
    //
    //     for await (const record of parser) {
    //         records.push(record);
    //     }
    //
    //     return records;
    // }
    //
    // try {
    //     const res = await proccessFile();
    //     console.log(res.pop());
    //
    //     return;
    // } catch (err) {
    //     console.log(1);
    // }

    // createReadStream(
    //     "/Users/vova/WorkApplications/03_covid/covid-mongodb-crud/src/data/origindata.csv",
    //     { encoding: "utf-8" }
    //     )
    //     .pipe(parse({
    //         delimiter: ",",
    //         from_line: 2,
    //         columns: true,
    //         // columns: [
    //         //     "YearWeekISO", "ReportingCountry", "Denominator",
    //         //     "NumberDosesReceived", "NumberDosesExported", "FirstDose",
    //         //     "FirstDoseRefused", "SecondDose", "DoseAdditional1",
    //         //     "DoseAdditional2", "DoseAdditional3", "UnknownDose",
    //         //     "Region", "TargetGroup", "Vaccine", "Population"
    //         // ],
    //         encoding: "utf-8",
    //         trim: true,
    //     }))
    //     .on("end", function () {
    //         console.log('completed');
    //         // streamRead.close();
    //     })
    //     .on("error", function (error) {
    //         console.log('error-fail');
    //         console.error(error);
    //         console.log(error.message);
    //         // streamRead.close();
    //     })
    //     .on("data", function (row) {
    //         console.log('---');
    //         console.log(row);
    //         console.log('---');
    //         // streamRead.resume();
    //     })
    // ;

    // const proccessFile = async () => {
    //     const records = [];
    //     const parser = createReadStream(
    //         "/Users/vova/WorkApplications/03_covid/covid-mongodb-crud/src/data/origindata.csv",
    //         { encoding: "utf-8" }
    //     ).pipe(parse({ delimiter: ",", from_line: 2 } ));
    //
    //     for await (const record of parser) {
    //         records.push(record);
    //     }
    //
    //     return records;
    // }
    //
    // try {
    //     const res = await proccessFile();
    //     console.log(res.pop());
    //
    //     return;
    // } catch (err) {
    //     console.log(1);
    // }

    // const records = [];
    // const parser = createReadStream(
    //     "/Users/vova/WorkApplications/03_covid/covid-mongodb-crud/src/data/origindata.csv",
    //     { encoding: "utf-8" }
    //     )
    //     .pipe(parse({ delimiter: ",", from_line: 2 } ))
    // ;
    //
    // for await (const record of parser) {
    //     // console.log(record);
    //     records.push(record);
    // }
    //
    // console.log(records[0], records[1]);
    // // streamRead.on("end", function () {
    // //     console.log('completed');
    // //     streamRead.close();
    // //
    // // })
    // // .on("error", function (error) {
    // //     console.log('error-fail');
    // //     console.error(error);
    // //     console.log(error.message);
    // //     streamRead.close();
    // // });
    // //
    // // return streamRead.on("data", function (row) {
    // //         console.log('---');
    // //         console.log(row);
    // //         console.log('---');
    // // });

    return;
  }

  getName(): string {
    return 'SeedVaccinesSampleDocumentsUploader';
  }
}

// //
// // export const up = async () => {
// //
// //     console.log('trololo')
// //     // const db: Db = await getDb();
// //     // const config = configs.covid;
// //     // const vaccines: Collection = db.collection(config.mongoCollectionName);
// //
// //     // parse.
// //     // const parser = parse({
// //     //     // columns: true,
// //     //     // columns: [
// //     //     //     "YearWeekISO", "ReportingCountry", "Denominator",
// //     //     //     "NumberDosesReceived", "NumberDosesExported", "FirstDose",
// //     //     //     "FirstDoseRefused", "SecondDose", "DoseAdditional1",
// //     //     //     "DoseAdditional2", "DoseAdditional3", "UnknownDose",
// //     //     //     "Region", "TargetGroup", "Vaccine", "Population",
// //     //     // ],
// //     //     encoding: "utf-8",
// //     //     delimiter: ["\r\n"],
// //     //     record_delimiter: [","],
// //     //     from_line: 2,
// //     //     trim: true,
// //     // });
// //
// //     // const streamRead = createReadStream(
// //     //     "/Users/vova/WorkApplications/03_covid/covid-mongodb-crud/src/data/origindata.csv",
// //     //     { encoding: "utf-8" }
// //     // );
// //     // const streamWrite = createWriteStream('/Users/vova/WorkApplications/03_covid/covid-mongodb-crud/src/data/output.txt');
// //     // streamRead.pipe(streamWrite);
// //     // streamRead.pipe(parser);
// //     // streamRead.pipe(parse({ delimiter: ",", from_line: 2 } ));
// //
// //     // streamRead
// //     //     .on("end", function () {
// //     //         console.log('completed');
// //     //     })
// //     //     .on("error", function (error) {
// //     //         console.log('error-fail');
// //     //         console.error(error);
// //     //         console.log(error.message);
// //     //     });
// //     // setTimeout(() => {
// //     //     console.log('stop writing');
// //     //     streamWrite.end();
// //     // }, 4000);
// //
// //     // stream.pipe(streamWrite);
// //
// //     // await streamRead.on("data", function (row) {
// //     //             console.log('---');
// //     //             // console.log(row);
// //     //             console.log('---');
// //     //     }
// //     // );
// //
// //     const result = [];
// //
// //     // streamRead
// //     //     .pipe(parse({ delimiter: ",", from_line: 2 } ))
// //     //     .on("data", function (row) {
// //     //         // console.info('++++');
// //     //
// //     //         result.push('+++++');
// //     //         result.push(row);
// //     //         result.push('+++++');
// //     //         // console.log(row);
// //     //         // console.info('++++++');
// //     //         // process.exit(1);
// //     //     })
// //     //     .on("end", function () {
// //     //         console.log('completed====');
// //     //         console.log(result);
// //     //     })
// //     //     .on("error", function (error) {
// //     //         console.log('error-fail');
// //     //         console.error(error);
// //     //         // console.log(error.message);
// //     //     })
// //     //     ;
// //
// //
// //     // fs.createReadStream("./data.csv", 'utf8', (err, data) => {
// //     //     console.log(data);
// //     // });
// //     // vaccines.
// //     // return vaccines.drop();
// //     // collection.
// //     /*
// //         Code your update script here.
// //      */
// // };
// //
// // export const down = async () => {
// //     const db = await getDb();
// //     const config = configs.covid;
// //     const vaccines: Collection = db.collection(config.mongoCollectionName);
// //
// //     return vaccines.drop();
// // };
