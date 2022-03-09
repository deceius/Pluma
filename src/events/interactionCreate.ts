import {
  CommandInteractionOptionResolver,
  SelectMenuInteraction
} from 'discord.js';
import { client } from '..';
import { Event } from '../structures/Event';
import { ExtendedInteraction } from '../typings/command';

export default new Event('interactionCreate', async (interaction) => {
  if (interaction.guildId == process.env.GUILD_ID) {
    if (interaction.isCommand()) {
      
    console.log(`command: ${interaction.commandName}`);
      const command = client.commands.get(interaction.commandName);
      if (!command) return interaction.editReply('ERROR, COMMAND NOT FOUND');

      command.run({
        args: interaction.options as CommandInteractionOptionResolver,
        client,
        interaction: interaction as ExtendedInteraction
      });
    } 
    else if (interaction.isSelectMenu()) {
      console.log(`selection: ${interaction.customId}`);
      const selectMenu = client.menus.get(interaction.customId);
      selectMenu.run({
        client,
        interaction: interaction as SelectMenuInteraction
      });
    }
  }
});
