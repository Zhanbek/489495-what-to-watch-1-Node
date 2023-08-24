import { CliCommandInterface } from '../core/cli-command/cli-command.interface';

type parsedCommand = {
  [key: string]: string[];
};

export default class CLIApplication {
  private commands: { [propertyName: string]: CliCommandInterface } = {};

  private parseCommand(cliArguments: string[]): parsedCommand {
    const parsedCommand: ParsedCommand = {};
    let command = '';

    return cliArguments.reduce((acc, item) => {
      if (item.startsWith('--')) {
        acc[item] = [];
        command = item;
      } else if (command && item) {
        acc[command].push(item);
      }
    }, parsedCommand);
  }

  public registerCommands(commandList: CliCommandInterface[]): void {
    commandList.reduce((acc, command) => {
      const cliCommand = command;
      acc[cliCommand.name] = cliCommand;
      return acc;
    }, this.commands);
  }
}
