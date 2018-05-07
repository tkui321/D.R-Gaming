const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NDQyNDExODk1NzYxMTQxNzcw.DdDWvw.kAYTPdwbzTGBgucyygfPen5Btj8';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('123456', { type: 'WATCHING' })
  .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
  .catch(console.error);
});


client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

bot.on("message" , function(message){
console.log(message.content);
});

client.login('token');