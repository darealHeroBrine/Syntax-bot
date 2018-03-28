const settings = require('../settings.json');
exports.run = (bot, msg, params = []) => {
    channel.send("Administrator \n moderator \n Support-Team\(just added\) \n guild owner\(the guild owner\)");
};    


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['staff', 'roles'],
  permLevel: 0
};

exports.help = {
  name: 'staffroles',
  description: 'Gives a list of staff roles the bot uses.',
  usage: 'staffroles'
};
