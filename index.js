const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!";

client.once('ready', () => {
	console.log('bot is ready!');
});

client.on('message', message => {
  if (message.mentions.has(client.user)) {
    message.reply( 'My prefix is "!".');
    return;
  }
  if (message.content.startsWith("!p" || "-p")) {
    // TODO calling music bot with youtube musics...... hook them if could
    return;
  }
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(/ +/);
  console.log(args);
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    message.channel.send('Pong.');
  } else if (command === "beep") {
    message.channel.send('Boop.');
  } else if (command === "トマトプリン") {
    message.channel.send('munch munch.... yummy!');
  } else if (command === 'server') {
    message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
  } else if (command === 'user-info') {
    message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
  } else if (command === 'info') {
    if (!args.length) {
      return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    } else if (args[0] === 'foo') {
      return message.channel.send('bar');
    }

    message.channel.send(`First argument: ${args[0]}`);
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);