import { Command, CommandRunner } from 'nest-commander';
import { SeedVaccinesSampleDocumentsUploader } from '../services/SeedVaccinesSampleDocumentsUploader';

interface BasicCommandOptions {
  string?: string;
  boolean?: boolean;
  number?: number;
}

@Command({
  name: 'seed-vaccines-sample-documents',
  description: 'Upload required dataset inside the mongodb.',
  arguments: '',
  options: {},
})
export class SeedVaccinesSampleDocumentsCommand extends CommandRunner {
  constructor(
    private readonly vaccineService: SeedVaccinesSampleDocumentsUploader,
  ) {

    console.log(222);
    super();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async run(passedParams: string[], options?: BasicCommandOptions): Promise<void>
  {
    try {
        console.log('SeedVaccinesSampleDocumentsCommand executed');
    //     await this.vaccineService.execute();
        console.log(22);

        return;
    } catch (err) {
        console.log(1);
    }

    return;
  }
}