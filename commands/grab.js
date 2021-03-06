const { MessageEmbed } = require("discord.js");
const prettyMilliseconds = require("pretty-ms");

module.exports = {
  name: "grab",
  description: "Saves the current playing song to your Direct Messages",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["save"],
/**
*
* @param {import("../structures/DiscordMusicBot")} client
* @param {import("discord.js").Message} message
* @param {string[]} args
* @param {*} param3
*/
run: async (client, message, args, { GuildDB }) => {
  let player = await client.Manager.get(message.guild.id);
  if (!player) return client.sendTime(message.channel, "❌ | **Nothing is playing right now...**");
  if (!message.member.voice.channel) return client.sendTime(message.channel, "❌ | **You must be in a voice channel to use this command!**");
   message.author.send(new MessageEmbed()
   .setAuthor(`Saved Song:`, client.user.displayAvatarURL({
    dynamic: true
  }))
  .setThumbnail(`https://img.youtube.com/vi/${player.queue.current.identifier}/mqdefault.jpg`)
  .setURL(player.queue.current.uri)
  .setColor("RANDOM")
  .setTitle(`**${player.queue.current.title}**`)
  .addField(`⌛ Duration: `, `\`${prettyMilliseconds(player.queue.current.duration, {colonNotation: true})}\``, true)
  .addField(`🎵 Author: `, `\`${player.queue.current.author}\``, true)
  .addField(`▶ Play it:`, `\`${GuildDB ? GuildDB.prefix : client.config.DefaultPrefix
  }play ${player.queue.current.uri}\``)
  .addField(`🔎 Saved in:`, `<#${message.channel.id}>`)
  .setFooter(`Requested by: ${player.queue.current.requester.tag} | Guild: ${message.guild.name}`, player.queue.current.requester.displayAvatarURL({
    dynamic: true
  }))
    ).catch(e=>{
      return message.channel.send("**:x: Your Dm's are disabled**")
    })    

    client.sendTime(message.channel, "✅ | **Check your DMs!**")
  },
  SlashCommand: {
/**
*
* @param {import("../structures/DiscordMusicBot")} client
* @param {import("discord.js").Message} message
* @param {string[]} args
* @param {*} param3
*/
  run: async (client, interaction, args, { GuildDB }) => {
    const user = client.users.cache.get(interaction.member.user.id);
    let player = await client.Manager.get(interaction.guild_id);
    if (!player) return client.sendTime(interaction, "❌ | **Nothing is playing right now...**");
    try{
    let embed = new MessageEmbed()
      .setAuthor(`Saved Song: `, client.user.displayAvatarURL())
      .setThumbnail(`https://img.youtube.com/vi/${player.queue.current.identifier}/mqdefault.jpg`)
      .setURL(player.queue.current.uri)
      .setColor("RANDOM")
      .setTimestamp()
      .setTitle(`**${player.queue.current.title}**`)
      .addField(`⌛ Duration: `, `\`${prettyMilliseconds(player.queue.current.duration, {colonNotation: true})}\``, true)
      .addField(`🎵 Author: `, `\`${player.queue.current.author}\``, true)
      .addField(`▶ Play it:`, `\`${GuildDB ? GuildDB.prefix : client.config.DefaultPrefix
        }play ${player.queue.current.uri}\``)
      .addField(`🔎 Saved in:`, `<#${interaction.channel_id}>`)
      .setFooter(`Requested by: ${player.queue.current.requester.tag}`, player.queue.current.requester.displayAvatarURL({
        dynamic: true
      }))
      user.send(embed);
    }catch(e) {
      return client.sendTime(interaction, "**:x: Your DMs are disabled**")
    }

    client.sendTime(interaction, "✅ | **Check your DMs!**")
  },
  },
};