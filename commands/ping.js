const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('test command'),
    async execute(interaction) {
        await interaction.reply('PONG');
    }
};