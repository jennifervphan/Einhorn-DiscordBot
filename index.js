const Discord = require('discord.js');

require('dotenv').config();
const client = new Discord.Client();

require('./events/ready')(client)
require('./events/awesome')(client)

client.login(process.env.TOKEN);