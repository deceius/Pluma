import { createCanvas, loadImage } from 'canvas';
import { MessageOptions } from 'child_process';
import { InteractionReplyOptions, MessageAttachment, User } from 'discord.js';
import { ExtendedInteraction } from '../../typings/command';
export class WelcomeGenerator {
  output: InteractionReplyOptions;

  async init(user: User) {
    const canvas = createCanvas(700, 250);
    const context = canvas.getContext('2d');

    const background = await loadImage('./assets/illustrado_bg.png');
    context.drawImage(background, 0, 0, canvas.width, canvas.height);

    context.strokeStyle = '#0099ff';
    context.strokeRect(0, 0, canvas.width, canvas.height);

    var welcomeX = canvas.width / 2.7;
    var welcomeY = canvas.height / 2 - 15;

    var text = `${user.username}`;
    context.font = this.applyText(canvas, text);
    context.fillStyle = '#000000';
    context.fillText(text, welcomeX, welcomeY);

    context.font = '25px serif';
    context.fillStyle = '#808080';
    context.fillText(`Welcome to Ilustrados!`, welcomeX, welcomeY + 40);

    context.beginPath();
    context.arc(125, 125, 100, 0, Math.PI * 2, true);
    context.closePath();
    context.clip();

    const avatar = await loadImage(user.displayAvatarURL({ format: 'jpg' }));
    context.drawImage(avatar, 25, 25, 200, 200);

    const attachment = new MessageAttachment(
      canvas.toBuffer(),
      'profile-image.png'
    );

    this.output = {
      content: `${user}, welcome to our humble server!`,
      files: [attachment]
    };
  }

  getOutput() {
    return this.output;
  }

  applyText(canvas, text) {
    const context = canvas.getContext('2d');
    let fontSize = 40;

    do {
      context.font = `${(fontSize -= 10)}px serif`;
    } while (context.measureText(text).width > canvas.width - 300);

    return context.font;
  }
}
