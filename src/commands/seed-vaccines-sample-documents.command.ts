import { Command, CommandRunner, Option } from 'nest-commander';
import { SeedVaccinesSampleDocumentsUploader } from '../services/SeedVaccinesSampleDocumentsUploader';

@Command({
  name: 'seed-vaccines',
  description: 'Upload required dataset inside the mongodb.',
  arguments: '',
  options: { isDefault: true },
})
export class SeedVaccinesSampleDocumentsCommand extends CommandRunner {
  constructor(
    private readonly vaccineService: SeedVaccinesSampleDocumentsUploader,
  ) {
    super();
  }

  async run(
    inputs: string[],
    options: { type: string; rowCount: number; offset: number },
  ): Promise<void> {
    console.log('2222');
    // try {
    //   console.log('SeedVaccinesSampleDocumentsCommand executed');
    //
    //   // this.vaccineService.execute();
    // } catch (err) {
    //   console.log('SeedVaccinesSampleDocumentsCommand executed');
    // }
  }

  //
  // @Option({ flags: '-t <sourceDataType>' })
  // parseType(value: string) {
  //   return value;
  // }
  //
  // // @ts-ignore
  // @Option({ flags: '', rowCount: '-rc <rowCount>' })
  // parseRowCount(value: string) {
  //   return Number.parseInt(value, 20);
  // }
  //
  // // @ts-ignore
  // @Option({ flags: '', offset: '-o <offset>' })
  // parseOffset(value: number) {
  //   return Number.parseInt(String(value), 20);
  // }
}