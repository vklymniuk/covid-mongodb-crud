import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VaccineSchema } from './schema/vaccine.schema';
import { configs } from '../config/configuration';
import { SeedVaccinesSampleDocumentsCommand } from './commands/seed-vaccines-sample-documents.command';
import { SeedVaccinesSampleDocumentsUploader } from './services/SeedVaccinesSampleDocumentsUploader';

@Module({
  imports: [
    MongooseModule.forRoot(configs.covid.mongoUrl, {
      dbName: configs.covid.mongoDBName,
    }),
    MongooseModule.forFeature([
      {
        name: configs.covid.mongoSchemaName,
        schema: VaccineSchema,
      },
    ]),
  ],
  providers: [
    SeedVaccinesSampleDocumentsCommand,
    SeedVaccinesSampleDocumentsUploader,
  ],
})
export class CliModule {}
