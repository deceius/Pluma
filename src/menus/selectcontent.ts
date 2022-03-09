import { SelectContentMenu } from '../components/menu/SelectContentMenu';
import { Menu } from '../structures/Menu';
export const MENU_ID = 'select_content';
export default new Menu({
  id: MENU_ID,
  run: async ({ interaction }) => {
    await interaction.update({
      content: `hello ${interaction.values}`,
      components: []
    });
  }
});
