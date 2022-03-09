import { ChatInputApplicationCommandData, CommandInteractionOptionResolver, MessageSelectMenu, SelectMenuInteraction } from "discord.js";
import { ExtendedClient } from "../structures/Client";


  
  interface RunOptions {
    client: ExtendedClient;
    interaction: SelectMenuInteraction;
  }


type RunFunction = (options: RunOptions) => any;

export type MenuType = {
    id: string,
    run: RunFunction;
  };
  