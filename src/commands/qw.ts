import { Command, CommandRunner, Option } from 'nest-commander';

@Command({
  name: 'sayHello',
  description: 'Some text',
  options: { isDefault: true },
})
export class SayHelloCommand extends CommandRunner {
  async run(
    inputs: string[],
    options: { name: string; age: number },
  ): Promise<void> {
    console.log(`Hello ${options.name}, you're still rather young!`);
    if (options.age < 13) {
      console.log(`Hello ${options.name}, you're still rather young!`);
    } else if (12 < options.age && options.age < 50) {
      console.log(`Hello ${options.name}, you're in the prime of your life!`);
    } else {
      console.log(
        `Hello ${options.name}, getting up there in age, huh? Well, you're only as young as you feel!`,
      );
    }
  }

  @Option({ flags: '-n <personName>' })
  parseName(val: string) {
    return val;
  }

  @Option({ flags: '-a <age>' })
  parseAge(val: string) {
    return Number.parseInt(val, 10);
  }

  // // @ts-ignore
  // protected command: SayHelloCommand.Command;
  //
  // // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // // @ts-ignore
  // setCommand(command: SayHelloCommand.Command): this {
  //   return undefined;
  // }
}
