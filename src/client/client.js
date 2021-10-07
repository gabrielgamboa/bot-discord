const Discord = require('discord.js');

const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);
client.once('ready', () => console.log(`Bot ${client.user.username} is now online`));

module.exports = { client };