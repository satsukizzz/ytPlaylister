const fs = require('fs');
const commandFiles = fs.readdirSync('./commands').filter(file => !file.startsWith("info.js") && file.endsWith('.js'));

const execute = (message, args) => {
  if (!args[0]) {
    return message.channel.send(`${message.author} please add a command you want to know in detail.`);
  }
  let filename = args[0] + '.js';
  if (commandFiles.includes(filename)) {
      let command_module = require("./" + filename);
      return message.channel.send(command_module.description);
  }
  return message.channel.send('no such a command.');
}

module.exports = {
  name: 'info',
  description: 'info of commands.',
  execute: execute
};
