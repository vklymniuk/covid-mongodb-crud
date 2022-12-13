import { Injectable } from '@nestjs/common';

@Injectable()
export class VaccineService {
    getHello(): string {
        return 'Hello World!';
    }
}
