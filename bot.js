const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '!' //prefix

let roleID = "718580702626447391";
let membersWithRole = message.guild.roles.get(roleID).members;
console.log(`Got ${membersWithRole.size} members with that role.`);

client.on('ready', () => {
    client.user.setStatus('ONLINE')
    client.user.setPresence({
        game: {
            name: '${membersWithRole.size} Members',
            type: 3
        }
    });
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('Pong.');
  	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 
