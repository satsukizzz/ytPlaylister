module.exports = {
	name: 'info',
	description: 'info of commands.',
	execute(message, args) {
    if (!args.length) {
      return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    }

    message.channel.send(`First argument: ${args[0]}`);
  }
};