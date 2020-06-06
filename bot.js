const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '!' //prefix

client.on('ready', () => {
    client.user.setStatus('ONLINE')
    client.user.setPresence({
        game: {
            name: '0 Premier Members',
            type: 3
        }
    });
});

client.on('message', message => {
    if (message.content === 'how much money') {
    	message.reply('All storecards that we offer can go up to $1000.');
  	}
});



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 
