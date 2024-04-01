const Eris = require("eris");
const Discord = require('discord.js');
const keep_alive = require('./keep_alive.js')

// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.token);

bot.on("error", (err) => {
  console.error(err); // or your preferred logger
});
bot.on("ready", () => {
  bot.editStatus("online", {
    name: "discord.gg/thugshaker"
  }).catch(console.error);
});
bot.on('messageCreate', message => {
	

  if (message.content.startsWith("ZADE")) {
    return message.reply("Suck My dick ZADE");
  }

  if (message.content === "RYANN") {
    message.reply("@rayyan#9435 :shocked:");
  }
if (message.content === "doriaSucks") {
	var i = 0 ;
	while(i < 500){
    message.channel.send("doria is a bad guy ");
    i++;
    }
  }
  if (message.content === "HOLYCIT") {
    message.channel.send("can you not");
  }
  if(message.content.includes("chatgpt")) {
    message.channel.send("FATGPT is better than ChatGPT");
    }
    if(message.content.includes("azzypic")) {
      return message.channel.send("https://media.discordapp.net/attachments/1095663813296136232/1097752107609763922/Untitled76_20230418131434.png?width=447&height=447")
    }
   /* if (channel && !message.author.bot) {
      channel.send(message.author.tag + ": "  + message.content);
    } */
    if (message.content.startsWith('!dmc')) {
    // Find the user to send the DM to
    const user = message.mentions.users.first();

    if (user) {
      // Remove the "!dm @user" part from the message content
      const messageContent = message.content.slice(26);

      // Send a DM to the user
      user.send(messageContent)
        .then(() => {
          message.reply(`Sent a DM to ${user.tag}`);
        })
        .catch(error => {
          message.reply(`Couldn't send a DM to ${user.tag}`);
          console.error(error);
        });
    } else {
      message.reply('You need to mention a user to send a DM.');
    }
  }


  if (message.content.startsWith('!dms')) {
    const content = message.content.slice(4); // Remove the "!dm " part
    const userId = content.match(/\d+/); // Extract user ID from the content

    if (userId) {
      const user = bot.users.cache.get(userId[0]); // Get the user object
      const dmContent = content.replace(`<@${userId}>`, ''); // Remove the user mention
      if (user) {
        user.send(dmContent)
          .then(() => {
            message.reply(`Sent a DM to ${user.tag}`);
          })
          .catch(error => {
            message.reply(`Couldn't send a DM to ${user.tag}`);
            console.error(error);
          });
      } else {
        message.reply('User not found.');
      }
    } else {
      message.reply('Invalid format. Use: !dm <@USER_ID> Your message');
    }
  }
if (message.content.startsWith(':') && message.content.endsWith(':')) {
    // Replace 'OTHER_SERVER_ID' with the ID of the server where the emoji is located
    const otherServerId = '1069108304929886208';

    // Replace 'EMOJI_NAME' with the name of the emoji you want to use
    const emojiName = message.content.slice(1, -1);

    // Find the Guild (server) object of the other server by its ID
    const otherServer = bot.guilds.cache.get(otherServerId);

    if (otherServer) {
      // Find the emoji by name in the other server's emoji cache
      const emoji = otherServer.emojis.cache.find(e => e.name === emojiName);
      const sticker = otherServer.stickers.cache.find(
        s => s.name === emojiName || s.id === emojiName
      );

      if (emoji) {
        // Send the emoji as a message
        message.channel.send(emoji.toString());
      } else if (sticker) {
        // Send the sticker as a message
        message.channel.send(`Sticker: ${sticker.toString()}`);
      } else {
        message.reply('Emoji or sticker not found in the other server.');
      }
    } else {
      message.reply('Server not found.');
    }
  }
});


bot.connect(); // Get the bot to connect to Discord
