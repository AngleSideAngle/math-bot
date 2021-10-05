const { SlashCommandBuilder, SlashCommandSubcommandGroupBuilder } = require('@discordjs/builders');
const { convert } = require('convert-units');

const { response } = require('../util/embed');

solve = (expression) => {
    try {
        ans = math.evaluate(expression);
        return String(ans);
    } catch (e) {
        return 'there was an error';
    }
}

const cmd = new SlashCommandBuilder()
    .setName('convert')
    .setDescription('a test for now')
    .addStringOption(option =>
        option.setName('a')
            .setDescription('a desc')
            .setRequired(false))

async function action(interaction) {
    const query = interaction.options.getString('expression');
    result = solve(query);

    await response(query, result, interaction);
};

module.exports = {
    data: cmd,
    execute: action
};
