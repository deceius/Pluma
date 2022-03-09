import { Command } from "../structures/Command";

export default new Command({
    name: 'register',
    description: 'Bind your Albion character to your discord account.',
    run: async({interaction}) => {
        interaction.followUp("hello")
        
    }
})