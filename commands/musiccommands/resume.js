const Neable = require('../../neable_module/NeableCommands.js');
const index = require('../../bot');
module.exports.run = async (Brie, message, args) => {
    // Command here.
    const serverQueue = index.queue.get(message.guild.id);
    // checar se o usuário esta em um canal de voz
    if (!message.member.voiceChannel) return message.reply(`Você não está em um canal de música...`);
    // se nada estiver tocando no servidor
    if (serverQueue && !serverQueue.playing) {
        // setar como não pausado
        serverQueue.playing = true;
        // despausar a musica
        serverQueue.connection.dispatcher.resume();
        return message.reply(`A música está tocando novamente.`);
    }
    if (serverQueue && serverQueue.playing) {
        return message.reply(`A música já está tocando`)
    }
    return message.reply(`Nada tocando no momento!`);

}

module.exports.help = {
    name: "resume",
    type: "music",
    description: "Escolha o volume da música!",
    usage: "b.volume [valor]",
    example: "b.volume 5",
    working: true
} 