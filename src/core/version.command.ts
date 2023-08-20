import { readFileSync } from 'node:fs';
import { CliCommandInterface } from './cli-command/cli-command.interface';
import path from 'node:path';

export default class VersionCommand implements CliCommandInterface {
  public readonly name = '--version';

  private readVersion(): string {
    const packageJSONContent = readFileSync(
      path.resolve('./package.json'),
      'utf-8'
    );
    const packageJSONContentObject = JSON.parse(packageJSONContent);
    return packageJSONContentObject.version;
  }

  public async execute(): Promise<void> {
    const version = this.readVersion();
    console.log(version);
  }
}
