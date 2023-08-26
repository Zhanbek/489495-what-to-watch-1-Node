import { CliCommandInterface } from "./cli-command/cli-command.interface";


export default class ImportCommand implements CliCommandInterface {
  public readonly name = '--import';
  execute(fileName: string): void {
    // Чтение

  }
}
