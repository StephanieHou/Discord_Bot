const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log('Logged in as ${client.user.tag}!');
});
client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('pong');
    }
});
client.login('NzkwNjM2MzIxOTc4MDU2NzY1.X-DfdA.BX9cITU2rd_Ow8tqIwV_FFtSILo');