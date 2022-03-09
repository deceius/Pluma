import { SelectContentMenu } from "../components/SelectContentMenu";
import { Menu } from "../structures/Menu";
export const MENU_ID = 'select_content';
export default new Menu( {
    id: MENU_ID,
    run:  async ({ interaction }) => {
        await interaction.update({
          content: `hello ${interaction.values}`, components: []
        },);
      }
})