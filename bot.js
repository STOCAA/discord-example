const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '!' //prefix

client.on('ready', () => {
        setInterval(() => {
          targetGuild = client.guilds.get('710684522118905997')
          if(targetGuild) {
              client.user.setPresence({ game: { name: targetGuild.memberCount + ' premier members', type: 'WATCHING' }, status: 'online'  })
                    .then(console.log)
                    .catch(console.error);
          }
    }, 1000 * 60 * 5);

});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('Pong.');
  	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 
