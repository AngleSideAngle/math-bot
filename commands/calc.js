const { SlashCommandBuilder } = require('@discordjs/builders');
const math = require('mathjs');

const { response } = require('../util/embed');

solve = (expression) => {
    ans = math.evaluate(expression);
    return String(ans);
    /*
    try {
        ans = math.evaluate(expression);
        return String(ans);
    } catch (e) {
        return 'there was an error';
    }*/
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

    await response(query, result, interaction);
};

module.exports = {
    data: cmd,
    execute: action
};
