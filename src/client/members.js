const Discord = require("discord.js");

const members = member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'boas-vindas')

    if (!channel) return;

    const joinMessage = new Discord.MessageEmbed()
        .setTitle(`Um novo membro chegou!`)
        .setDescription(`Seja muito bem vindo(a), ${member}! Sinta-se em casa.`)
        .setColor(`#FF0000`);

    channel.send(joinMessage);
}

module.exports = { members };

