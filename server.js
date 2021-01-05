const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ''

     client.on("ready", () => {
  console.log(
    `Online In Servers : ${client.guilds.size} | Users : ${client.users.size}`
  );
  let statuses = ['|hi|','|Editor|','|❤ FALCON ❤|','|DARK WARRIOR|','|🌙رمضان كریم| ',' |LAVA ❤ |','| ئەوەي رۆشت مرد ☠']
  
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(STREAMING, {
      type: "STREAMING",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});

client.on("message", async message => {
  if (message.content.toLowerCase() === prefix + "profile") {
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.stopTyping();
    }, Math.random() * (1 - 3) + 1 * 200).then(
      message.channel.send({
        files: [
          {
            name: "prfoilebycutie.png",
            attachment: `https://api.probot.io/profile/${message.author.id}`
          }
        ]
      })
    );
  }
});


client.on("message", message => {
  
var command = message.content
if(message.author.bot) return;

switch (command) {

case "RAWCHE":
message.channel.send(`وێنەی ئەکاونتەکەت ئەوەیە☟: ${message.author.avatarURL}`)
break;
 

case "<@530848878413479968>":
        
      
message.channel.send("فــەرمـــوو دڵـــی مــن❤")
        


}
});




client.login("NTMwODQ4ODc4NDEzNDc5OTY4.XqTc7w.iw-xG0GCwIzFaRzzG1285acJiLs")





  


