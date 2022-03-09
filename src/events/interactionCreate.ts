import { CommandInteractionOptionResolver } from "discord.js";
import { client } from "..";
import { Event } from "../structures/Event";
import { ExtendedInteraction } from "../typings/command";

export default new Event('interactionCreate', async (interaction) => {
    if (interaction.isCommand()) {
        await interaction.deferReply()
        const command = client.commands.get(interaction.commandName)

        if (!command) return interaction.followUp("error, non existent")
        command.run({
            args: interaction.options as CommandInteractionOptionResolver,
            client,
            interaction: interaction as ExtendedInteraction
        })
    }
})
