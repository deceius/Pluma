import { CommandInteractionOptionResolver } from 'discord.js';
import { client } from '..';
import { Event } from '../structures/Event';
import { ExtendedInteraction } from '../typings/command';

export default new Event('interactionCreate', async (interaction) => {
  if (interaction.guildId == process.env.GUILD_ID){
    console.log('COMMAND CALLED')
    if (interaction.isCommand()) {
      const command = client.commands.get(interaction.commandName);
      if (!command) return interaction.editReply('ERROR, COMMAND NOT FOUND');
      command.run({
        args: interaction.options as CommandInteractionOptionResolver,
        client,
        interaction: interaction as ExtendedInteraction
        });
    }
  } 
});
