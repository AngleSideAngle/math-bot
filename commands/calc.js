const { SlashCommandBuilder } = require('@discordjs/builders');
const math = require('mathjs');

solve = (expression) => {
    try {
        ans = math.evaluate(expression);
        return String(ans);
    } catch (e) {
        return 'there was an error';
    }
}

const cmd = new SlashCommandBuilder()
    .setName('calc')
    .setDescription('Resolve a math expression')
    .addStringOption(option =>
        option.setName('expression')
            .setDescription('Enter the expression')
            .setRequired(true));

async function action(interaction) {
    const text = interaction.options.getString('expression');
    message = solve(text);
    await interaction.reply(message);
};

module.exports = {
    data: cmd,
    execute: action
};
