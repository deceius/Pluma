import { WelcomeGenerator } from '../components/generator/welcome';
import { Event } from '../structures/Event';

export default new Event('guildMemberAdd', async (member) => {
  console.log('Member Joined');
  const welcomeChannel = member.guild.channels.cache.get("940309846006313041")
  if (welcomeChannel.isText()) {
    var welcomeMessage = new WelcomeGenerator();
    await welcomeMessage.init(member.user);
    welcomeChannel.send(welcomeMessage.getOutput())
  }
});
