const { MessageEmbed } = require('discord.js')

embedGen = (query, result, color) => {
    const embed = new MessageEmbed()
        .setColor(color)
        .addFields(
            { name : 'Query', value : query },
            { name : 'Result', value : result }
        )
        .setTimestamp();

    return embed;
}

exports.embedGen = embedGen;

module.exports = {
    embedGen : embedGen
};