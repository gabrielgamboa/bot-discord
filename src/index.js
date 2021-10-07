require("dotenv").config();

const { client } = require("./client/client");
const { members } = require("./client/members");
const { messages } = require("./client/messages");

client.on('message', messages);
client.on('guildMemberAdd', members);

