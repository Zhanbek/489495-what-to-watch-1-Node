import { CliCommandInterface } from './cli-command.interface';

export default class HelperCommand implements CliCommandInterface {
  public readonly name = '--help';

  public async execute(): Promise<void> {
    console.log(`
        Программа для подготовки данных для REST API сервера.
        Пример:
            main.js --<command> [--arguments]
        Список команд:
            --help:                       # данная команда
            --version:                    # вывод текущей версии данного приложения
            --generate <n> <path> <url>   # генерирует n записей и записывает их в файл TSV
            --import <path>               # импортирует данные из TSV
    `);
  }
}
