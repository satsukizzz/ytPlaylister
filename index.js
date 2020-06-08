const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!";

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(' ');
  console.log(args);
  const command = args.shift().toLowerCase();
  console.log(command);
console.log(args);
  if(message.content === "!ping"){
    message.channel.send('Pong.');
  } else {
  console.log(message.content);
  }

});

client.login(process.env.DISCORD_BOT_TOKEN);