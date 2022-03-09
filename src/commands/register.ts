import { Registration } from '../modules/Registration';
import { Command } from '../structures/Command';
export default new Command({
  name: 'register',
  description: 'Bind your Albion character to your discord account.',
  options: [
    {
      name: 'ign',
      description: 'Your in-game name on Albion Online.',
      type: 'STRING',
      required: true
    }
  ],
  run: async ({ interaction }) => {
    var name = interaction.options.getString('ign');

    await interaction.deferReply({ ephemeral: true });
    var registrationModule = new Registration(name);
    await interaction.editReply({
      content: 'hello '
    });
  }
});
