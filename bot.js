const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '!' //prefix

client.on('ready', () => {
    client.user.setStatus('ONLINE')
    client.user.setPresence({
        game: {
            name: '1 Premier Members',
            type: 3
        }
    });
});

client.on('message', message => {
    if (message.content === 'Name on card') {
        message.channel.send('The name on the card should be the same one as your account name.');
  	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 
