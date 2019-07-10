const Discord = require("discord.js");
const Neable = require('c:/Brie/neable_module/NeableCommands');
module.exports.run = async (Brie, message, args) => {
  // Command here.
  let Links = [
    'https://cdn.discordapp.com/attachments/589795009147174925/595372035224502304/57177000_153094222386537_1268985050512864916_n.png',
    'https://cdn.discordapp.com/attachments/589795009147174925/595372035224502304/57177000_153094222386537_1268985050512864916_n.png',
    'https://cdn.discordapp.com/attachments/589795009147174925/595372035224502304/57177000_153094222386537_1268985050512864916_n.png'
  ] // set new links here..

  var mentioned = message.mentions.users.first()

  if (!mentioned) return message.channel.send(`You need to mention someone.`)

  let random = Math.floor((Math.random() * Links.length));

  if (mentioned.id == "578067057006870569") return Neable.createEmbed(message, { description: 'Ownnt, good night to you too! :heart:', image: Links[random] })

  if (mentioned === message.author) return Neable.createEmbed(message, { description: 'I see you are alone... Good night to you honey! :heart:', image: Links[random] })

  Neable.createEmbed(message, {
    description: `**${message.author.username}** wished **${mentioned.username}** goodnight`,
    image: Links[random],
    footer: [`React with 🤗 to wish good night too!`, `${mentioned.displayAvatarURL}`]
  }).then(async msg => {

    msg.messageWithEmbed.react('🤗')

    let filter = (reaction, user) => reaction.emoji.name === "🤗" && user.id === mentioned.id;

    const collector = msg.messageWithEmbed.createReactionCollector(filter, { max: 1, time: 60000 });

    collector.on("collect", () => {
      Neable.createEmbed(message, {
        description: `**${mentioned.username}**wished **${message.author.username}** goodnight too!`,
        image: Links[random],
        timestamp: true,
        footer: [`${mentioned.username}`, `${mentioned.displayAvatarURL}`]
      })
    })
  })
} 

module.exports.help = {
  name: "goodnight",
  type: "social",
  description: "Wish goodnight to someone, but we don't have images to use yet",
  usage: "b.goodnight [user] [message]",
  example: "b.goodnight @Brie",
  working: true
}