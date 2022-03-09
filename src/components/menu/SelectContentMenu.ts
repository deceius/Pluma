import { MessageSelectMenu } from 'discord.js';

export class SelectContentMenu extends MessageSelectMenu {
  constructor(id: string) {
    super();
    this.setCustomId(id);
    this.setPlaceholder('Select Content...');
    this.addOptions([
      {
        label: 'Avalonian Dungeon',
        description: 'LFG for Avalonian composition.',
        value: 'ava'
      },
      {
        label: 'ZvZ',
        description: 'Pre-made ZvZ Party composition',
        value: 'zvz'
      },
      {
        label: 'PvP / HG / Gank / Small Scale ',
        description: 'Anything PvP related content.',
        value: 'pvp'
      },
      {
        label: 'PvE / Fame Farm',
        description: 'Fame farm, HCE, and any other PvE related stuff.',
        value: 'pve'
      }
    ]);
  }
}
