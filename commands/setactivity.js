const settings = require('../settings.json');
exports.run = (client, message, params) => {
  if (!params[0]){
    client.user.setActivity('Chat', { type: 'WATCHING' })
      .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
      .catch(console.error);
  }else {
     client.user.setActivity('args-1', { type: 'args-2' })
      .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
      .catch(console.error);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['activity'],
  permLevel: 0
};

exports.help = {
  name: 'activity',
  description: 'set the activity.',
  usage: 'activity [activity]'
};
