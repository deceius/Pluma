import { Command } from "../structures/Command";

export default new Command({
    name: 'welcome',
    description: 'says hello',
    run: async({interaction}) => {
        interaction.followUp("hello")
        
    }
})