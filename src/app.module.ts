import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { VaccineSchema } from "./schema/vaccine.schema";

@Module({
  imports: [
      MongooseModule.forRoot('mongodb://username1:password1@localhost:51574', { dbName: "covid"}),
      MongooseModule.forFeature([{ name: 'Vaccine', schema: VaccineSchema }])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}