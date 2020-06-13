


module.exports = {
	name: 'tomatopudding',
	description: 'hello プリン。トマトはいかが。',
	execute(message) {
    if (!args.length) {
      return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    }

    message.channel.send(`First argument: ${args[0]}`);
  }
};