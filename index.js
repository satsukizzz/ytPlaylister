const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  // set a new item in the Collection
  // with the key as the command name and the value   as the exported module
  client.commands.set(command.name, command);
}

const prefix = "yt!p";

client.once('ready', () => {
	console.log('bot is ready!');
});

client.on('message', message => {
  if (message.mentions.has(client.user)) {
    message.reply( `My prefix is "${prefix}".`);
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

  if(!client.commands.has(command)) return;
  try {
    client.commands.get(command).execute(message, args);
  } catch (err) {
    console.error(err);
    message.reply('test reply if error occurs.');
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);
