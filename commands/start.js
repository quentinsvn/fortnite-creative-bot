const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'\avez pas les permissions pour utiliser cette commande !");
   let voiceChannel =  message.guild.channels
  .filter(function (channel) { return channel.id === '540093524570406912' })
  .first()
  voiceChannel
  .join()
  .then(function (connection) {
      connection.playFile('./mp3/SonsZone.mp3');
     })
   //  console.log(message.guild.channels.array());
   let channel = message.member.voiceChannel;
    for (let member of channel.members) {
        member[1].setMute(true)
    } 
}

module.exports.help = {
  name:"start"
}
