
import { MenuType } from '../typings/menu';

export class Menu {
  constructor(menuType: MenuType) {
    Object.assign(this, menuType);
  }
}
