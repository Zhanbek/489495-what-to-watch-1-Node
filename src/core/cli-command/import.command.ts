import TSVFileReader from '../file-reader/tsv-file-reader';
import { CliCommandInterface } from './cli-command.interface';

export default class ImportCommand implements CliCommandInterface {
  public readonly name = '--import';
  execute(fileName: string): void {
    const fileReader = new TSVFileReader(fileName);

    try {
      fileReader.read();
      console.log(fileReader.toArray());
    } catch (err) {
      if (!(err instanceof Error)) {
        throw err;
      }

      console.log(`Не удалось импортировать данные из файла по причине: "${err.message}"`);
    }

  }
}
