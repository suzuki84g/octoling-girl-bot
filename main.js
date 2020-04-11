'use strict'

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('channelDelete', deletedChannel => {
    const closeOfficeIfNeeded = require('./modules/delete-channel.js');
    closeOfficeIfNeeded(deletedChannel);
});

client.on('message', msg => {
    const response = require('./modules/response.js');
    response(msg);
});

client.login(require('./token.js'));