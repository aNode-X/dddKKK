const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://jarp.glitch.me/`);
}, 280000);

const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const db = require("quick.db");
const { TOKEN, YT_API_KEY, prefix, devs } = require("./config.js");
const client = new Client({ disableEveryone: true });
const ytdl = require("ytdl-core");
const Enmap = require("enmap");
const canvas = require("canvas");
const convert = require("hh-mm-ss");
const fetchVideoInfo = require("youtube-info");
const dbg = new Enmap({ name: "Giveaway" });
const botversion = require("./package.json").version;
const simpleytapi = require("simple-youtube-api");
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const r1 = require("snekfetch");
const jimp = require("jimp");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat"); //npm i dateformat
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyC-cxrwR4E2lizvODfupRtCIFht7taB_FM");
const hastebins = require("hastebin-gen");
const getYoutubeID = require("get-youtube-id");
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require("table").table;
const Discord = require("discord.js");
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(`Servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`Channels! [ " ${client.channels.size} " ]`);
  console.log(`Prefix! [ " ${prefix}" ]`);
  console.log(`Language! [ " JavaScript " ]`);
  console.log(
    `Ram Usage! [ " ${(process.memoryUsage().rss / 1048576).toFixed()}MB " ]`
  );

  client.user.setActivity(` ${prefix}help-me `, { type: "Playing" });
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "Emojis1")) {
    /// امر القائمه
    let help = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL).setDescription(`**
           Clear The Space In (< a) To (<a)
<a:overify:688707812225712152> | < a:overify:688707812225712152>
<a:bc:688710946981806104> | < a:bc:688710946981806104>
<a:no:688711030364176486> | < a:no:688711030364176486>
<a:yes:688710968821547010> | < a:yes:688710968821547010>
<a:Really:688728781522993218> | < a:Really:688728781522993218>
<a:nitro:688728775801962518> | < a:nitro:688728775801962518>
<a:wtf:688728780776538164> | < a:wtf:688728780776538164>
<a:yeee:688728778356162628> | < a:yeee:688728778356162628>
<a:RinCaT:688728778289315853> | < a:RinCaT:688728778289315853>
<a:wow:688728778175676437> | < a:wow:688728778175676437>
<a:Rainbow:688728776519057468> | < a:Rainbow:688728776519057468>
<a:Orangejust:688728776162541640> | < a:Orangejust:688728776162541640>
<a:cryr:688728772589125731> | < a:cryr:688728772589125731>
<a:dumb:688728773084053554> | < a:dumb:688728773084053554>
<a:craft:688728772639195290> | < a:craft:688728772639195290>
<a:heartss:689024205584728095> | < a:heartss:689024205584728095>
**`);
    message.channel.sendEmbed(help);
  }
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "Emojis2")) {
    /// امر القائمه
    let help = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL).setDescription(`**
           Clear The Space In (< a) To (<a)
<a:FortSteve:688728775185137666> | < a:FortSteve:688728775185137666>
<a:Gun:688728774103400674> | < a:Gun:688728774103400674>
<a:eate:688728774099075169> | < a:eate:688728774099075169>
<a:Dance1:688728774174310569> | < a:Dance1:688728774174310569>
<a:shet:688728780436668540> | < a:shet:688728780436668540>
<a:Pin:688728775789379705> | < a:Pin:688728775789379705>
<a:gifwin:688728774245744677> | < a:gifwin:688728774245744677>
<a:mad:688728775181336587> | < a:mad:688728775181336587>
<a:left:688728774904250570> | < a:left:688728774904250570>
<a:X1:688734748276817929> | < a:X1:688734748276817929>
<a:Check:688734712294015082> | < a:Check:688734712294015082>
<a:warn:688734871660527753> | < a:warn:688734871660527753>
<a:ofu:688790982375899157> | < a:ofu:688790982375899157>
<a:need:688791009706115077> | < a:need:688791009706115077>
<a:LOL:688791083337252930> | < a:LOL:688791083337252930>
<a:heartr:689024243991969872> | < a:heartr:689024243991969872>
**`);
    message.channel.sendEmbed(help);
  }
});

client["on"]("message", message => {
  if (message["author"]["bot"]) return undefined;
  let args = message["content"]["split"](" ");
  if (message["content"]["startsWith"](prefix + "kick")) {
    if (!message["member"]["hasPermission"]("MANAGE_GUILD"))
      return message["channel"].send(`**:x:\`| You Not Have Permission\`**`);
    let user = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[1])
    );
    if (!user)
      return message["channel"]["send"](
        `**Usage | ${prefix}kick \`[User/UserID]\`**`
      );
    let Reason = message["content"]
      ["split"](" ")
      .slice(2)
      .join(" ");
    if (!Reason)
      return message["channel"]["send"](`:x:| **Please Type Reason**`);
    message.guild.member(user).kick(Reason);
    message["channel"]["send"](
      `**:white_check_mark: | Done Has Kicked <a:overify:688707812225712152><@${user.id}> Reason: \`${Reason}\`**`
    );
  }
});

client["on"]("message", message => {
  var prefix = "#";
  if (message["author"]["bot"]) return undefined;
  let args = message["content"]["split"](" ");
  if (message["content"]["startsWith"](prefix + "ban")) {
    if (!message["member"]["hasPermission"]("MANAGE_GUILD"))
      return message["channel"].send(`**:x:\`| You Not Have Permission\`**`);
    let user = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[1])
    );
    if (!user)
      return message["channel"]["send"](
        `**Usage | ${prefix}ban \`[User/UserID]\`**`
      );
    let Reason = message["content"]
      ["split"](" ")
      .slice(2)
      .join(" ");
    if (!Reason)
      return message["channel"]["send"](`:x:| **Please Type Reason**`);
    message.guild.member(user).ban(Reason);
    message["channel"]["send"](
      `**:white_check_mark: | Done Has Banned <@${user.id}> Reason: \`${Reason}\`**`
    );
  }
});


client.on("guildMemberAdd", member => {
  let channel = member.guild.channels.get("688802740528349206");
  var h = member.user;
  let embed = new Discord.RichEmbed()

    .setColor("")
    .setThumbnail(h.avatarURL)
    .setTitle(
      `Welcome The The Server ${member.user.username}  `
    )
    .addField(
      "Created At",
      `${moment(member.user.createdAt).format("D/M/YYYY ")} `
    )
    .addField("JoinedAt", `${moment(member.joinedAt).format("D/M/YYYY  ")} `);
  channel.send({ embed: embed });
});

client.on("guildMemberRemove", member => {
  let channel = member.guild.channels.get("688802740528349206");
  var h = member.user;
  let embed = new Discord.RichEmbed()

    .setColor("")
    .setThumbnail(h.avatarURL)
    .setTitle(
      `See You Again ${member.user.username}  `
    )
    .addField(
      "Created At",
      `${moment(member.user.createdAt).format("D/M/YYYY ")} `
    )
    .addField("JoinedAt", `${moment(member.joinedAt).format("D/M/YYYY  ")} `);
  channel.send({ embed: embed });
});
/*

*/

client.on('message', msg => {

    if (msg.author.bot) return;
    if (!msg.content.startsWith(prefix)) return;
    let command = msg.content.split(" ")[0];
    command = command.slice(prefix.length);
    let args = msg.content.split(" ").slice(1);
  
      if(command === "clear") {
          const emoji = client.emojis.find("name", "overify")
      let textxt = args.slice(0).join("");
      if(msg.member.hasPermission("MANAGE_MESSAGES")) {
      if (textxt == "") {
          msg.delete().then
          msg.channel.bulkDelete(1000).then(m => m.delete(3000));
  } else {
      msg.delete().then
      msg.delete().then
      msg.channel.bulkDelete(textxt);
          msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
          }    
      }
  }
  });

client.on('message',function(message) {
	let prefix = "#";
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "say")) {
if(!args) return;
message.channel.send(`**# ${args}**`);
}
});


client.on("guildMemberAdd", member => {

  var role = member.guild.roles.find("name", "★ Members ★"); 
  member.addRole(role); 
});

client.on("message", message => {
  if (message.author.bot) return; 
  if (message.content === prefix + "help-me") {
    message.channel.sendMessage(`
 <a:warn:688734871660527753>╔[❖════════════❖]╗<a:warn:688734871660527753>
>                     『#helpjs
<a:warn:688734871660527753> ╚[❖════════════❖]╝<a:warn:688734871660527753>
`); 
  } 
}); 

client.on('message', message => {
            if (message.content.startsWith("#helpjs")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField(' . ' ,' **╔[❖════════════❖]╗** ')
.addField(' . ' ,'#help-js-all  ')
.addField(' . ' ,'╚[❖════════════❖]╝')
.setColor('black')
  message.channel.sendEmbed(embed);
    }
});




client.on('message', message => {
            if (message.content.startsWith("#help-js-all")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField(' . ' ,' **╔[❖════════════❖]╗** ')
.addField(' . ' ,'#help-js-all1  [كود كريدت برو بوت]        ')
.addField(' . ' ,'#help-js-all2  [كود التحقق بألارقام و تاخذ رتبة] ')
.addField(' . ' ,'#help-js-all3  [توب برو بوت]             ')
.addField(' . ' ,'#help-js-all4  [كود بان و طرد بل ايدي + المنشن] ')
.addField(' . ' ,'#help-js-all5  [كود برودكاست بروبوت] ')
.addField(' . ' ,'#help-js-all6  [كود لوق] ')
.addField(' . ' ,'#help-js-all7  [كود قيف اواي] ')
.addField(' . ' ,'#help-js-all8  [كود صنع الوان] ')
.addField(' . ' ,'#help-js-all9  [كود ميوزك] ')
.addField(' . ' ,'#help-js-all10  [Soon] ')
.addField(' . ' ,'#help-js-all11  [Soon] ')
.addField(' . ' ,'#help-js-all12  [Soon] ')
.addField(' . ' ,'#help-js-all13  [Soon] ')
.addField(' . ' ,'#help-js-all14  [Soon] ')
.addField(' . ' ,'#help-js-all15  [Soon] ')
.addField(' . ' ,'#help-js-all16  [Soon] ')
.addField(' . ' ,'#help-js-all18  [Soon] ')
.addField(' . ' ,'╚[❖════════════❖]╝')
.setColor('black')
  message.channel.sendEmbed(embed);
    }
});


client.on("message", message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "help-js-all1")) {
    let embed = new Discord.RichEmbed()
    .setAuthor(client.user.tag,client.user.avatarURL)
    .setColor("BLACK")
    .setDescription(`https://pastebin.com/zxMLQ5cC`)
    message.author.send(embed) 
   
  }

client.on("message", message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "help-js-all2")) {
    let embed = new Discord.RichEmbed()
    .setAuthor(client.user.tag,client.user.avatarURL)
    .setColor("BLACK")
    .setDescription(` https://pastebin.com/54U6FXQp`)
    message.author.send(embed) 
  }
})

client.on("message", message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "help-js-all3")) {
    let embed = new Discord.RichEmbed()
    .setAuthor(client.user.tag,client.user.avatarURL)
    .setColor("BLACK")
    .setDescription(`https://pastebin.com/JnLcqwZ5`)
    message.author.send(embed) 
  }
})



///   help-js-all


client.on("message", message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "help-js-all4")) {
    let embed = new Discord.RichEmbed()
    .setAuthor(client.user.tag,client.user.avatarURL)
    .setColor("BLACK")
    .setDescription(`https://pastebin.com/Gv7tgxqQ`)
    message.author.send(embed) 
  }
})
client.on("message", message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "help-js-all5")) {
    let embed = new Discord.RichEmbed()
    .setAuthor(client.user.tag,client.user.avatarURL)
    .setColor("BLACK")
    .setDescription(`https://pastebin.com/HGdkkPwF`)
    message.author.send(embed) 
  }
})

client.on("message", message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "help-js-all6")) {
    let embed = new Discord.RichEmbed()
    .setAuthor(client.user.tag,client.user.avatarURL)
    .setColor("BLACK")
    .setDescription(`https://pastebin.com/545Cb7yT`)
    message.author.send(embed) 
  }
})

client.on("message", message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "help-js-all7")) {
    let embed = new Discord.RichEmbed()
    .setAuthor(client.user.tag,client.user.avatarURL)
    .setColor("BLACK")
    .setDescription(`https://pastebin.com/QpLcEejK`)
    message.author.send(embed) 
  }
})

client.on("message", message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "help-js-all8")) {
    let embed = new Discord.RichEmbed()
    .setAuthor(client.user.tag,client.user.avatarURL)
    .setColor("BLACK")
    .setDescription(`https://pastebin.com/0Kyx41kN`)
    message.author.send(embed) 
  }
})




client.on("message", message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "help-js-all9")) {
    let embed = new Discord.RichEmbed()
    .setAuthor(client.user.tag,client.user.avatarURL)
    .setColor("BLACK")
    .setDescription(`https://pastebin.com/tdz58Zpz`)
    message.author.send(embed) 
  }
})





client.on("message", async msg => {
  if (msg.author.bot) return undefined;
  if (!msg.content.startsWith(prefix)) return undefined;
  const args = msg.content.split(" ");
  const searchString = args.slice(1).join(" ");
  const url = args[1] ? args[1].replace(/<(.+)>/g, "$1") : "";
  const serverQueue = queue.get(msg.guild.id);
  let command = msg.content.toLowerCase().split(" ")[0];
  command = command.slice(prefix.length);
  if (command === `play`) {
    const voiceChannel = msg.member.voiceChannel;
    if (!voiceChannel) return msg.channel.send("**YOU MUST IN VOICE CHAANEL**");
    const permissions = voiceChannel.permissionsFor(msg.client.user);
    if (!permissions.has("CONNECT")) {
      return msg.channel.send("*Im Not Have a Permissions**");
    }
    if (!permissions.has("SPEAK")) {
      return msg.channel.send("**Im Not Have a Permissions**");
    }

    if (!permissions.has("EMBED_LINKS")) {
      return msg.channel.sendMessage("**`EMBED LINKS Must be Permissions **");
    }

    if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
      const playlist = await youtube.getPlaylist(url);
      const videos = await playlist.getVideos();

      for (const video of Object.values(videos)) {
        const video2 = await youtube.getVideoByID(video.id);
        await handleVideo(video2, msg, voiceChannel, true);
      }
      return msg.channel.send(
        ` **${playlist.title}**** <a:overify:688707812225712152>Added in list**`
      );
    } else {
      try {
        var video = await youtube.getVideo(url);
      } catch (error) {
        try {
          var videos = await youtube.searchVideos(searchString, 5);
          let index = 0;
          const embed1 = new Discord.RichEmbed()
            .setDescription(
              `**Please Choose a Video** :
${videos.map(video2 => `[**${++index} **] \`${video2.title}\``).join("\n")}`
            )

            .setFooter("UltraBot");
          msg.channel.sendEmbed(embed1).then(message => {
            message.delete(20000);
          });

          try {
            var response = await msg.channel.awaitMessages(
              msg2 => msg2.content > 0 && msg2.content < 11,
              {
                maxMatches: 1,
                time: 15000,
                errors: ["time"]
              }
            );
          } catch (err) {
            console.error(err);
            return msg.channel.send("**No track was selected**");
          }
          const videoIndex = parseInt(response.first().content);
          var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
        } catch (err) {
          console.error(err);
          return msg.channel.send("**:X: No search results available** ");
        }
      }

      return handleVideo(video, msg, voiceChannel);
    }
  } else if (command === `skip`) {
    if (!msg.member.voiceChannel)
      return msg.channel.send("**You are not an VoiceChannel**.");
    if (!serverQueue) return msg.channel.send("**There is no clip to skip it**");
    serverQueue.connection.dispatcher.end("Skpied<a:overify:688707812225712152>");
    return undefined;
  } else if (command === `stop`) {
    if (!msg.member.voiceChannel)
      return msg.channel.send("You are not an VoiceChannel .");
    if (!serverQueue) return msg.channel.send("**No clip to stop**");
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end("تم إيقاف المقطع<a:overify:688707812225712152>");
    return undefined;
  } else if (command === `vol`) {
    if (!msg.member.voiceChannel)
      return msg.channel.send("**You are not an VoiceChannel **.");
    if (!serverQueue) return msg.channel.send("**There is nothing operational.**");
    if (!args[1])
      return msg.channel.send(
        `:loud_sound: **Sound level** **${serverQueue.volume}**`
      );
    serverQueue.volume = args[1];
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
    return msg.channel.send(`:speaker: <a:overify:688707812225712152> **${args[1]}**`);
  } else if (command === `np`) {
    if (!serverQueue) return msg.channel.send("**There is nothing current to do.**");
    const embedNP = new Discord.RichEmbed().setDescription(
      `:notes: الان يتم تشغيل : **${serverQueue.songs[0].title}**`
    );
    return msg.channel.sendEmbed(embedNP);
  } else if (command === `queue`) {
    if (!serverQueue) return msg.channel.send("**There is nothing current to do**.");
    let index = 0;

    const embedqu = new Discord.RichEmbed().setDescription(`**Songs Queue**
${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join("\n")}
**الان يتم تشغيل** ${serverQueue.songs[0].title}`);
    return msg.channel.sendEmbed(embedqu);
  } else if (command === `pause`) {
    if (serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause();
      return msg.channel.send("**Stoped The Music<a:overify:688707812225712152>ا**!");
    }
    return msg.channel.send("**There is nothing current to do**");
  } else if (command === "resume") {
    if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      return msg.channel.send("**Music resumed for you!**");
    }
    return msg.channel.send("**There is nothing current to do**");
  }

  return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
  const serverQueue = queue.get(msg.guild.id);
  console.log(video);

  //	console.log('yao: ' + Util.escapeMarkdown(video.thumbnailUrl));
  const song = {
    id: video.id,
    title: Util.escapeMarkdown(video.title),
    url: `https://www.youtube.com/watch?v=${video.id}`
  };
  if (!serverQueue) {
    const queueConstruct = {
      textChannel: msg.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };
    queue.set(msg.guild.id, queueConstruct);

    queueConstruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueConstruct.connection = connection;
      play(msg.guild, queueConstruct.songs[0]);
    } catch (error) {
      console.error(`I could not join the voice channel: ${error}`);
      queue.delete(msg.guild.id);
      return msg.channel.send(`**I can't Join**${error}`);
    }
  } else {
    serverQueue.songs.push(song);
    console.log(serverQueue.songs);
    if (playlist) return undefined;
    else
      return msg.channel.send(
        ` **${song.title}****<a:overify:688707812225712152> Added in Song List!**`
      );
  }
  return undefined;
}

function play(guild, song) {
  const serverQueue = queue.get(guild.id);

  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }
  console.log(serverQueue.songs);

  const dispatcher = serverQueue.connection
    .playStream(ytdl(song.url))
    .on("end", reason => {
      if (reason === "Stream is not generating quickly enough.")
        console.log("Song ended.");
      else console.log(reason);
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
    .on("error", error => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

  serverQueue.textChannel.send(`Start: **${song.title}**`);
}
const adminprefix = "#";
client.on("message", message => {
  var argresult = message.content
    .split(` `)
    .slice(1)
    .join(" ");
  if (!devs.includes(message.author.id)) return;

  if (message.content.startsWith(adminprefix + "setname")) {
    client.user.setUsername(argresult).then;
    message.channel.sendMessage(`**${argresult}** :<a:overify:688707812225712152> تم تغيير أسم البوت إلى`);
    return message.reply(
      "**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **"
    );
  } else if (message.content.startsWith(adminprefix + "setavatar")) {
    client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : <a:overify:688707812225712152>تم تغير صورة البوت`);
  }
})});

client.on("message", async message => {
var prefix = "#"
  if (message.content == prefix + "invites") {
    let oi = message.mentions.users.first()
      ? message.mentions.users.first().id
      : message.author.id;
    let Tag = message.mentions.users.first()
      ? message.mentions.users.first().tag
      : message.author.tag;
    let Username = message.mentions.users.first()
      ? message.mentions.users.first().username
      : message.author.username;
    let Avatar = message.mentions.users.first()
      ? message.mentions.users.first().avatarURL
      : message.author.avatarURL;

    message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(oi);
      let personalInvites = invs.filter(i => i.inviter.id === oi);
      let urll = invs.filter(i => i.inviter.id === oi);
      let link = urll.reduce(
        (p, v) =>
          v.url + ` , Total de membros recrutados no convite: ${v.uses}.\n` + p,
        `\nServidor: ${message.guild.name} \n `
      );
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      let inviteCode = personalInvites.reduce((p, v) => v.code);
      let possibleInvites = [["Total de membros recrutados:"]];
      possibleInvites.push([inviteCount, inviteCode]);
      let user = message.mentions.users.first() || message.author;
      let mem = message.guild.member(user);
      let millisJoined = new Date().getTime() - mem.joinedAt.getTime();
      let daysJoined = millisJoined / 1000 / 60 / 60 / 24;

      var inviteInfo = new Discord.RichEmbed()
        .setTitle(` **[Your Invites]** ${Username}`)
        .setThumbnail(client.user.avatarURL)
        .addField("**Invites**", `**➥** [ ppel **${Number(inviteCount)}** ]`)
        .addField(
          "**Joined Server At**",
          `**➥** [ day **${daysJoined.toFixed(0)}** ]`
        )
          "**Joined With**",
          `**➥** [ **https://discord.gg/${inviteCode || "Zm2U6we"}** ]`
        .setColor("")
        .setTimestamp()
        .setFooter(Tag, Avatar);

      message.channel.send(inviteInfo);
    });
  }
});

client.on("message", msg =>{   
   
if(msg.content.startsWith(`${prefix}Servers`)){
  let noTop = msg.content.split(" ")[1];
  const top = client.guilds.sort((a,b)=>a.memberCount-b.memberCount).array().reverse()
  if(!noTop) noTop = 200;
  if(isNaN(noTop)) noTop = 200;
  if(noTop <= 0) noTop = 200;
  if(noTop > top.length) noTop = top.length;
  let serveremmbed = new Discord.RichEmbed();
  for(let i = 0; i < noTop; i++){
  serveremmbed.addField(`\n **⇏ ${top[i].name}** \n Members » ${top[i].memberCount}`," ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎");
  }
  serveremmbed.setTitle(`\n **Top ${noTop} Servers** \n`);
  serveremmbed.setThumbnail(msg.author.displayAvatarURL);
  serveremmbed.setTimestamp();
  serveremmbed.setFooter(client.user.username,client.user.displayAvatarURL);
  msg.channel.send(serveremmbed);
   }
})

client.on("message", async message => {
  if (message.content.startsWith(prefix + "mixnames")) {
    const shipped =
      message.mentions.members.size === 2
        ? message.mentions.members.array()[1]
        : message.member;
    const shipper =
      message.mentions.members.size === 1 || message.mentions.members.size === 2
        ? message.mentions.members.array()[0]
        : message.member;
    const first_length = Math.round(shipper.displayName.length / 2);
    const first_half = shipper.displayName.slice(0, first_length);
    const second_length = Math.round(shipped.displayName.length / 2);
    const second_half = shipped.displayName.slice(second_length);
    const final_name = first_half + second_half;
    message.channel.send(
      `**${message.author.username}**, Here is your mixname : **${final_name}**`
    );
  }
});



client.on("message", msg => {
  if (msg.content.startsWith(prefix + "random")) {
    msg.channel.send(
      `\`\`\`css\nLottery Winner : [${
        msg.guild.members.random().displayName
      }]\`\`\``
    );
  }
});






client.on("guildMemberAdd", member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`Welcome ${member.user} to this server.`).catch(console.error);
});

client.on("guildMemberRemove", member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`${member.user} left this server.`).catch(console.error);
});


client.on('message', message => {
          

  if (message.content.startsWith(prefix + "user")) {
   
   if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات ❌`);

       message.guild.fetchInvites().then(invs => {
let member = client.guilds.get(message.guild.id).members.get(message.author.id);
let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
var moment = require('moment');
var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
var heg;
if(men) {
heg = men
} else {
heg = message.author
}
var mentionned = message.mentions.members.first();
var h;
if(mentionned) {
h = mentionned
} else {
h = message.member
}
moment.locale('ar-TN');
var id = new  Discord.RichEmbed()

.setColor("RANDOM")
.setThumbnail(message.author.avatarURL)
.addField(': Joined Discord :',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true) 
.addField(': Joined Server :', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)
.addField(` :Your invites `, ` ${inviteCount} `)


.setFooter(message.author.username, message.author.avatarURL)  
message.channel.sendEmbed(id);
})
}



});


client.on('message',async message => {
  var time = moment().format('Do MMMM YYYY , hh:mm');
  var room;
  var title;
  var duration;
  var gMembers;
  var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
done = currentTime.getMinutes() + duration / 60000 ,
seconds = currentTime.getSeconds();
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}

  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "giveaway")) {

    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`:eight_pointed_black_star:| **Send Name channel For the Giveaway**`).then(msg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name' , collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **i Found It :(**');
        room = collected.first().content;
        collected.first().delete();
        msg.edit(':eight_pointed_black_star:| **Time For The Giveaway**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **The Time Be Nambers `` Do the Commend Agin``**');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msg.edit(':eight_pointed_black_star:| **Now send The Present **').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                msg.delete();
                message.delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setDescription(`**${title}** \nReact With 🎉 To Enter! \nTime remaining : ${duration / 60000} **Minutes**\n **Created at :** ${hours}:${minutes}:${seconds} ${suffix}`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find("name" , room).send(' :heavy_check_mark: **Giveaway Created** :heavy_check_mark:' , {embed: giveEmbed}).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users;
                       let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0]
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('Giveaway Ended !🎉',`Winners : ${gFilter} \nEnded at :`)
                       .setTimestamp()
					 m.edit('** 🎉 GIVEAWAY ENDED 🎉**' , {embed: endEmbed});
					message.guild.channels.find("name" , room).send(`**Congratulations ${gFilter}! You won The \`${title}\`**` , {embed: {}})
                     },duration);
                   });
                } catch(e) {
                message.channel.send(`:heavy_multiplication_x:| **i Don't Have Prem**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});

client.on('message', msg => {

    if (msg.author.bot) return;
    if (!msg.content.startsWith(prefix)) return;
    let command = msg.content.split(" ")[0];
    command = command.slice(prefix.length);
    let args = msg.content.split(" ").slice(1);
  
      if(command === "clear") {
          const emoji = client.emojis.find("name", "overify")
      let textxt = args.slice(0).join("");
      if(msg.member.hasPermission("MANAGE_MESSAGES")) {
      if (textxt == "") {
          msg.delete().then
          msg.channel.bulkDelete(1000).then(m => m.delete(3000));
  } else {
      msg.delete().then
      msg.delete().then
      msg.channel.bulkDelete(textxt);
          msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
          }    
      }
  }
  });



client.on("message", async message => {
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
  if (message.author.id != "ايديك") return;
  if (message.author.bot) return;
  if (command == "leave") {
    if (!args[0] || args[1])
      return message.reply(`**${prefix}leave <guild_id>**`);
    let GuildId = client.guilds.get(args[0]);
    if (!GuildId) return message.reply(`** Guild ID is not Detected**`);
    GuildId.leave().then(m =>
      message.channel.send("**I have Left " + GuildId.name + " ✅**")
    );
  }
});




client.on('guildMemberAdd', member => {

let channel = member.guild.channels.get("688802740528349206");
if (member.user.bot) return;
var Canvas = require('canvas')
var jimp = require('jimp')
  var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
seconds = currentTime.getSeconds();
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
const w = ['./1.png'];
             let Image = Canvas.Image,
                canvas = Canvas.createCanvas(500, 260),
                  ctx = canvas.getContext('2d');
              fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                  if (err) return console.log(err)
                  let BG = Canvas.Image;
                  let ground = new Image;
                  ground.src = Background;
                  ctx.drawImage(ground, 0, 0, 557, 241);

             

      })
                      let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
                      jimp.read(url, (err, ava) => {
                          if (err) return console.log(err);
                          ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                              if (err) return console.log(err);

                                    ctx.font = '30px Arial Bold';
                              ctx.fontSize = '20px';
                              ctx.fillStyle = "#FFFFFF";
                                ctx.fillText(member.user.username, 265, 162);

                                                     var guild;
    while (!guild)
                        guild = member.guild
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {

})
})
                              //AVATAR?
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                 ctx.arc(132.4, 117.7, 92.7, 0, Math.PI*2, true);
                   ctx.closePath();

                                 ctx.clip();

                        ctx.drawImage(ava, 7, 8, 227, 225);
                              ctx.closePath();
                            channel.send(`user ${member}  `)
 channel.sendFile(canvas.toBuffer())
                          })
})
});
 