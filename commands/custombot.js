const settings = require('../settings.json');
exports.run = (client, message, params) => {
  channel.send.DMchannel('Here is the bot request forum.'),
  channel.send.DMchannel('https://goo.gl/forms/f1l0lu94j78dgpvo1')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['cb', 'custom', 'cbot', 'customb'],
  permLevel: 0
};

exports.help = {
  name: 'custombot',
  description: 'sends you the custom bot request forum.',
  usage: 'custombot'
};
