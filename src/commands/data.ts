import { User } from 'discord.js';
import { Registration } from '../modules/Registration';
import { Command } from '../structures/Command';

export default new Command({
  name: 'data',
  description: 'Fetch your Albion Online account data bound to your Discord account.',
  options: [
    {
      name: 'user',
      description: 'Discord user account with bound Albion Online account.',
      type: 'USER',
      required: true
    }
  ],
  run: async ({ interaction }) => {
    var user: User = interaction.options.getUser('user')
    await interaction.deferReply();
    await interaction.editReply(`Data Found!`)
   
  }
});
