import {
  ApplicationCommandDataResolvable,
  Client,
  ClientEvents,
  Collection,
  Intents
} from 'discord.js';
import { CommandType } from '../typings/command';
import glob from 'glob';
import { promisify } from 'util';
import { RegisterCommandsOptions } from '../typings/client';
import { Event } from './Event';
import { MenuType } from '../typings/menu';

const globPromise = promisify(glob);

export class ExtendedClient extends Client {
  commands: Collection<string, CommandType> = new Collection();
  menus: Collection<string, MenuType> = new Collection();

  constructor() {
    super({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] });
  }

  start() {
    console.log(`######## START`)
    this.registerModules();
    this.login(process.env.TOKEN);
  }

  async importFile(filePath: string) {
    return (await import(filePath))?.default;
  }

  async registerCommands({ commands, guildId }: RegisterCommandsOptions) {
    this.guilds.cache.get(guildId)?.commands.set([]);
    this.application?.commands.set([]);
    if (guildId) {
      this.guilds.cache.get(guildId)?.commands.set(commands);
      console.log(`Registered to ${guildId}`);
    } else {
      this.application?.commands.set(commands);
      console.log('Global');
    }
  }
  async registerModules() {
    // COMMANDS
    const slashCommands: ApplicationCommandDataResolvable[] = [];
    const commandFiles = await globPromise(
      `${__dirname}/../commands/**/*{.ts,.js}`
    );
    console.log({ commandFiles });
    commandFiles.forEach(async (filePath) => {
      const command: CommandType = await this.importFile(filePath);
      if (!command.name) return;

      this.commands.set(command.name, command);
      slashCommands.push(command);
    });
    this.on('ready', () => {
      this.registerCommands({
        commands: slashCommands,
        guildId: process.env.GUILD_ID
      });
    });

    // EVENT
    const eventFiles = await globPromise(
      `${__dirname}/../events/**/*{.ts,.js}`
    );

    console.log({ eventFiles });
    eventFiles.forEach(async (filePath) => {
      const event: Event<keyof ClientEvents> = await this.importFile(filePath);
      this.on(event.event, event.run);
    });

    // MENUS
    const menuFiles = await globPromise(`${__dirname}/../menus/**/*{.ts,.js}`);
    console.log({ menuFiles });
    menuFiles.forEach(async (filePath) => {
      const command: MenuType = await this.importFile(filePath);
      if (!command) return;
      this.menus.set(command.id, command);
    });
  }
}
