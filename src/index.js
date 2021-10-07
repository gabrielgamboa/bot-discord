require("dotenv").config();

const { client } = require("./client/client");
const { messages } = require("./client/messages");

client.on('message', messages);

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'boas-vindas')

    if (!channel) return;

    channel.send(`Boas vindas ao nosso servidor, ${member}!. Fique atento às regras. ;)`);
})

