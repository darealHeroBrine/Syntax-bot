const settings = require('../settings.json');
exports.run = (client, message, params) => {
  if (!params[0]){
    client.user.setActivity('Chat', { type: 'WATCHING' })
      .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
      .catch(console.error);
  }else {
     client.user.setActivity('arg 1', { type: 'playing' })
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
  name: 'setactivity',
  description: 'set the activity.',
  usage: 'activity [activity]'
};
