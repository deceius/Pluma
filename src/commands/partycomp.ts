import { MessageActionRow } from 'discord.js';
import { SelectContentMenu } from '../components/menu/SelectContentMenu';
import { MENU_ID } from '../menus/selectcontent';
import { Command } from '../structures/Command';

export default new Command({
  name: 'partycomp',
  description: 'Organize a party comp for raid, pvp or pve content.',
  run: async ({ interaction }) => {
    await interaction.deferReply({ ephemeral: true });
    const row = new MessageActionRow().addComponents(
      new SelectContentMenu(MENU_ID)
    );
    await interaction.editReply({
      content: 'Select the content you want to organize.',
      components: [row]
    });
  }
});
