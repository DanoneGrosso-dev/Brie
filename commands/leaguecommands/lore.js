const Neable = require('../../neable_module/NeableCommands.js')
const request = require('request');
const Discord = require("discord.js");
module.exports.run = async (Brie, message, args) => {
    // Command here.
    nomeDoCampeao = args[0];

    request('http://ddragon.leagueoflegends.com/cdn/9.13.1/data/pt_BR/champion/' + nomeDoCampeao + '.json', function (err, response, body) {
        if (!err && response.statusCode == 200) {
            json = JSON.parse(body)
            lore = " " + json.data[`${nomeDoCampeao}`].lore
            message.channel.send(new Discord.RichEmbed()
                .setColor('RANDOM')
                .setTitle(`Lore da(o) campeã(o) ${nomeDoCampeao}, ${json.data[`${nomeDoCampeao}`].title}`)
                .setDescription(lore))
        } else {
            message.channel.send(`Error 404: Não pude encontrar este campeão, veja um exemplo de como usar corretamente! \` Kai'Sa = Kaisa | Lee Sin = Leesin\``)
        }
    })
}

module.exports.help = {
    name: "lore",
    type: "league of legends",
    description: "Veja a lore de um campeão!",
    usage: "b.lore [nomeDoCampeao]",
    example: "b.lore Yasuo",
    working: true
}