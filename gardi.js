const Discord = require("discord.js");
const gardi = new Discord.Client();
const invites = {};
const wait = require("util").promisify(setTimeout);
const moment = require("moment");
const fs = require("fs");
var prefix = "g/";

gardi.on("ready", () => {
  console.log(`Logged in as ${gardi.user.tag}!`);
  console.log("");
  console.log("");
  console.log(
    "╔[═════════════════════════════════════════════════════════════════]╗"
  );
  console.log(`[Start] ${new Date()}`);
  console.log(
    "╚[═════════════════════════════════════════════════════════════════]╝"
  );
  console.log("");
  console.log("╔[════════════════════════════════════]╗");
  console.log(`Logged in as * [ " ${gardi.user.username} " ]`);
  console.log("");
  console.log("information:");
  console.log("");
  console.log(`servers! [ " ${gardi.guilds.size} " ]`);
  console.log(`Users! [ " ${gardi.users.size} " ]`);
  console.log(`channels! [ " ${gardi.channels.size} " ]`);
  console.log("╚[════════════════════════════════════]╝");
  console.log("");
  console.log("╔[════════════]╗");
  console.log(" Bot Is Online");
  console.log("╚[════════════]╝");
  console.log("");
  console.log("");
});


gardi.login('NzU1NzY4NTkyMTA0MDMwMjA4.X2IGWQ.au_M2iKGZQeqrcInIliuFqdsNxY')


gardi.on("ready", () => {
  gardi.user.setActivity("g/help | BLOOD is here", { type: "Playing" });
  gardi.user.setStatus("idle");
});
////

gardi.on("message", async message => {
if (message.content.startsWith(prefix + "invite")) {
let invite = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(message.author.username, message.author.displayAvatarURL)
.setThumbnail(message.author.avatarURL)
.setTitle(
"**CLICK HERE TO  LINK BOT**"
)
.setURL(
`https://discordapp.com/oauth2/authorize?client_id=${gardi.user.id}&scope=bot&permissions=8`
);
message.channel.sendEmbed(invite);
}
});

///

gardi.on('message', message => {
if (message.content.startsWith(prefix+"bot")) {
message.channel.send({
embed: new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('**[ INFO BOT ]**')
.addField('`` TAG BOT:``' , `[ ${gardi.user.tag} ]`)
.addField('``ID BOT :``' , `[ ${gardi.user.id} ]`)
.addField('``SERVERS :``', `[ ${gardi.guilds.size} ]`,)
.addField('``CHANNELS :``' , `[ ${gardi.channels.size} ]`)
.addField('``USERS :``' ,`[ ${gardi.users.size} ]`)
.addField('``PERFIX BOT :``' , `[ ${prefix} ]`)
.addField('``OwnerBOT:``',`<@615522851667181594>`)
.addField('``OwnerBOT:``',`<@676066456105910272>`)
.setThumbnail(gardi.user.avatarURL)
.setTimestamp()
.setAuthor(gardi.user.tag,gardi.user.avatarURL)
.setFooter(`${message.author.tag}`, `${message.author.avatarURL}`)
})
}
});


gardi.on("message", message => {
if (!message.channel.guild) return;
if (message.content === prefix + ("ping")) {
if (message.author.bot) return;
if (!message.channel.guild) return;
var Bping = `${Math.round(gardi.ping)}`; 

const E1ping = new Discord.RichEmbed()
.setTitle("ــــــــــــــــــــــــــــــ")
.addField(
` **PING ** :__${Bping}📶__`,
"ــــــــــــــــــــــــــــــ"
)
.setFooter(`user | ${message.author.tag}`)
.setColor("RANDOM");

message.channel.send(E1ping);
}
});

gardi.on('message', function(msg) {
if(msg.content.startsWith (prefix + 'server')) {
let embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setThumbnail(msg.guild.iconURL)
.setTitle(`INFO SERVER **__${msg.guild.name}__**`)
.addField(':globe_with_meridians:**__Region__**',`[** __${msg.guild.region}__ **]`,true)
.addField(':medal:** __Roles__**',`[** __${msg.guild.roles.size}__ **]`,true)
.addField(':red_circle:**__Members__**',`[** __${msg.guild.memberCount}__ **]`,true)
.addField(':pencil:**__Text Channel__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
.addField(':microphone:**__Voice Channel__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
.addField(':crown:**__SERVER Owner__**',`**${msg.guild.owner}**`,true)
.addField(':id:**__Server ID__**',`**${msg.guild.id}**`,true)
.addField(':date:**__Created On__**',msg.guild.createdAt.toLocaleString())
.setImage('https://cdn.discordapp.com/attachments/703243461079597138/708070790079184957/image0.gif')
msg.channel.send({embed:embed});
}
});

 gardi.on('message', message => {

var args = message.content.split(" ").slice(1);  
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first(); 
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt; 
let n = d.toLocaleString(); 
let x; 
let y; 

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
if (z.bot) {
var w = 'bot';
}else {
var w = 'onlan';
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField('🔱| Name:',`**<@` + `${z.id}` + `>**`, true)
.addField('🛡| ID:', "**"+ `${z.id}` +"**",true)
.addField('📛| TAG:',"**#" + `${z.discriminator}**`,true)
.addField('**Joined Discord At | 📆 **: ' ,year + "-"+ month +"-"+ day) 
.addField("**Joined Server At| ⌚ :**", message.member.joinedAt.toLocaleString()) 
.setThumbnail(`${z.avatarURL}`)
.setImage("https://cdn.discordapp.com/attachments/703243461079597138/708070790079184957/image0.gif")
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
if (!message) return message.reply('**❌ **').catch(console.error);

}

});

gardi.on('message', message => {
if(!message.channel.guild) return;
if(message.content == prefix + 'allbots') {
if (message.author.bot) return;
let i = 1;
const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
const embed = new Discord.RichEmbed()
.setAuthor(message.author.tag, message.author.avatarURL)
.setDescription(`**<a:x1:712913421934395473> | Found ${message.guild.members.filter(m=>m.user.bot).size} allbots**
${botssize.join('\n')}`)
.setFooter(gardi.user.username, gardi.user.avatarURL)
.setTimestamp();
message.channel.send(embed)

}


});





gardi.on('message', message => {

   if(message.content.includes("@everyone")){
 
 if(!message.member.hasPermission('KICK_MEMBERS')){

 message.delete(); 

 message.reply("No everyone pls!!")

 }

   }

 });



///help

gardi.on("message", async message => {
if (message.content.startsWith(prefix + "help")) {
let help = new Discord.RichEmbed()
.setColor("RANDOM")
.setThumbnail(message.author.avatarURL)
.setDescription(`**__ bot help menu  __ 


the prefix of bot is: g/

┏◣**__g/invite__**◢┓


**__General__**

|::${prefix}bot
|::${prefix}ping
|::${prefix}server
|::${prefix}id
|::${prefix}allbots


**__welcome__**

┏◣**craete channel: welcome **◢┓
┏◣**craete channel: left** ◢┓

**`);
message.channel.sendEmbed(help); 
}
});



  gardi.on("guildMemberAdd", member => {
  let memberavatar = member.user.avatarURL;
  let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(memberavatar)
    .addField(":bust_in_silhouette: | name : ", `${member.user.tag}`)
    .addField(":microphone2: | Welcome!", `Welcome to Server, ${member}`)
    .addField(":id: | User :", "**[" + `${member.id}` + "]**")
    .addField(
      ":family_mwgb: | Users",
      `${member.guild.memberCount}`
    )
    .addField("Name", `<@` + `${member.id}` + `>`, true)
    .addField("Server", `${member.guild.name}`, true)
    .setFooter(`${member.guild.name}`)
    .setTimestamp()
    .setImage("https://cdn.discordapp.com/attachments/727852746618961922/727874038629662871/UTfeNPSeqH.gif");
  member.send(embed);
});

gardi.on("guildMemberAdd", member => {
  let channel = member.guild.channels.find("name", "welcome");
  let memberavatar = member.user.avatarURL;
  if (!channel) return;
  let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(memberavatar)
    .addField(" > :bust_in_silhouette: | TAG Member : ", `${member.user.tag}`)
    .addField(" > :hibiscus:| Welcome to server  😍",`, `)
    .addField(" > :id:| ID Member :", "**[" + `${member.id}` + "]**")
    .addField(" > :family_mwgb:⎮ Users", `${member.guild.memberCount}`)
    .addField(" >  ⎮Name Server", `${member.guild.name}`, true)
    
.setFooter(`${member.guild.name}`)
  .addField(
        ":🔻Joined Discord At🔻",
        `${moment(member.user.createdAt).format(
          "D/M/YYYY h:mm a"
        )} **\n** \`${moment(member.user.createdAt).fromNow()}\``,
        true
      )
      .addField(
        ": 🔻Joined Server At🔻",
        `${moment(member.joinedAt).format("D/M/YYYY h:mm a")} \n\`\`${moment(
          member.joinedAt
        )
          .startOf(" ")
          .fromNow()}\`\``,
        true
      )
    .setImage("https://cdn.discordapp.com/attachments/755184831163531386/755507219142934578/image0.gif")
    .setTimestamp();

  channel.sendEmbed(embed);
  
  });

gardi.on("guildMemberRemove", member => {
  let channel = member.guild.channels.find("name", "left");
  let memberavatar = member.user.avatarURL;
  if (!channel) return;
  let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(memberavatar)
    .addField("TAG Member:", `${member.user.tag}`)
    .addField("left Server ")
    .addField("member", `${member.guild.memberCount}` + "Users")
    .setFooter(`${member.guild.name}`)
    .setImage("https://cdn.discordapp.com/attachments/726345323211128863/727873771817402398/giphy.gif")
    .setTimestamp();

  channel.sendEmbed(embed);
  
});
