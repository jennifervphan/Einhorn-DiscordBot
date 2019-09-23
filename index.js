const Discord = require('discord.js');
const CommandSystem = require('./commandSystem')

require('dotenv').config();
const client = new Discord.Client();
const commandSystem = new CommandSystem()

client.on('message', event => {
    commandSystem.handleEvent(event);
})

require('./events/ready')(client)
require('./events/awesome')(client)

client.login(process.env.TOKEN);