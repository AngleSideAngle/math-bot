const { SlashCommandBuilder } = require('@discordjs/builders');
const { color } = require('../settings.json')
const math = require('mathjs');

const { embedGen } = require('../util/embed');

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
    const query = interaction.options.getString('expression');
    result = solve(query);

    embed = embedGen(query, result, color);
    await interaction.reply({ embeds : [embed] });
};

module.exports = {
    data: cmd,
    execute: action
};
