import { Command, CommandRunner, Option } from 'nest-commander';
import {SeedVaccinesSampleDocumentsUploader} from "../services/SeedVaccinesSampleDocumentsUploader";

interface BasicCommandOptions {
    string?: string;
    boolean?: boolean;
    number?: number;
}

@Command({
    name: 'seed-vaccines-sample-documents',
    description: 'Upload required dataset inside the mongodb.',
    arguments: '',
    options: {}
})
export class SeedVaccinesSampleDocumentsCommand extends CommandRunner {
    constructor(private readonly vaccineService: SeedVaccinesSampleDocumentsUploader) {
        super();
    }

    async run(
        passedParams: string[],
        options?: BasicCommandOptions
    ): Promise<void> {
        console.log('SeedVaccinesSampleDocumentsCommand executed');

        try {
            const res = await this.vaccineService.execute();
            console.log(res);
        } catch (err) {
            console.log(err);
        }


        return;
    }
}