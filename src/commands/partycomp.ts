import { Command } from '../structures/Command';

export default new Command({
  name: 'partycomp',
  description: 'Organize a party comp for raid, pvp or pve content.',
  run: async ({ interaction }) => {
    interaction.followUp('hello');
  }
});
