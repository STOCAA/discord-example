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
    if (message.content === 'ping') {
    message.channel.send({embed: {
      color: 3447003,
      title: "Test:",
      fields: [
        { name: "Test 1", value: "Line1\nLine2\nLine3", inline: true},
        { name: "Test 2", value: "AlsoLine1\nAlsoLine2\nAndLine3", inline: true}
      ]
    }
  });


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 
