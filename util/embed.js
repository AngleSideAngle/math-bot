const { MessageEmbed } = require('discord.js');
const { color } = require('../settings.json');

async function response (query, result, interaction) {
    const embed = new MessageEmbed()
        .setColor(color)
        .addFields(
            { name : 'Query', value : query },
            { name : 'Result', value : result }
        )
        .setTimestamp();

    await interaction.reply({ embeds: [embed] });
}

module.exports = {
    response : response
};