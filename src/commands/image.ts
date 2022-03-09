
import { WelcomeGenerator } from '../components/generator/welcome';
import { Command } from '../structures/Command';
export default new Command({
  name: 'image',
  description: 'Generate an image.',
  run: async ({ interaction }) => {
    var welcomeMessage = new WelcomeGenerator()
    await welcomeMessage.init(interaction.user)
    interaction.reply(welcomeMessage.getOutput());
  }
});


