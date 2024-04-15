const Eris = require("eris");
const sqlite3 = require('sqlite3').verbose();
const Discord = require("discord.js");
const SelfBots = require("discord.js-selfbot-v13");
const keep_alive = require('./keep_alive.js')
var doxmsg = "" ;
var doxbool = false;
var doxmsglen = 0 ;

const MySelfBot = new SelfBots.Client();
const db = new sqlite3.Database('mydatabase.db');
const bot = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds 
        , Discord.GatewayIntentBits.GuildMessages 
        , Discord.GatewayIntentBits.MessageContent
        ] ,
});

// Replace TOKEN with your bot account's token
const account = new Eris(process.env.token3);
MySelfBot.once("ready", () => {
	console.log("SelfBot connected");
});

/*MySelfBot.on('messageCreate', message => {
	if(message.content) {
		console.log(message.content);
		doxmsglen = message.content.length ;
		doxmsg = "Sender : " + message.author.username +"\n Content : " +message.content ;
		
	}
});*/
account.on("ready", () => {
  account.editStatus("online", {
    name: "Rally Fury"
  }).catch(console.error);
});

bot.on("error", (err) => {
  console.error(err); // or your preferred logger
});
bot.once("ready", () => {
  console.log("Ready");
});



bot.on('messageCreate', message => {
myChannel = bot.channels.cache.get("1223919638044344430");
	grantMommyPics = [
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc2H-gvD1uW7Y-nN7o9zcsd467yBZw5J1X_b99TBrhDTzENWRXu-OA9Zlw&s=10" ,
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjZFNv6Wbdya1oB3P6NxGLo-FGfnv-N86MIGE6-izCdDLMTXyvzGRtg_o&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtRR8XysNzc0maZBbrNrrLuC4btCkbv8l1VKEt9e6UOLDT7b7SrvrCXBo&s=10",
"https://i.ytimg.com/vi/OXSkFW8wLiw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBrFAaAPATwu8lE7zTjQ64vkdGrWA",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMOzjLA2mDUKH7VFwfQfWubwi5P6lr5rqQkRVjnJVLWQ&s",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9kRfyWtjI3Zvywe0t__cRyFeiVghcpHdXfVBC0Pe0670CGJ0jSZt6oBeX&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuZY5tH5nTOggPAr-uHwqTzJv5Lc7q82ApmKDJvf_MHc9ZQ6DVJPWuQh6E&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl9-PIvuNOl8p692gau-V60DuMcCtbArRtI1aRFB8zRLGF8WFEcEzvFxdb&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB8o7tGuzbhlcbh4R4VMaS3TJAMtHZOmXHKjmm2MhJUi7iSU7Y3z5fH_k&s=10",
"My name is optimus prime \n https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZIU8PSLLcKxTyvRoT_UyfFtV2zLenY7WM4aiSszYg-AhRgsgpIsz8EJ0&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDJG8dhJKnNKdYmnGgpxxccWt1PXb6O6AOkA5LjZPCJB_S74-xF0jovebr&s=10"
] ;
if(message.content == "GrantMommy") {
for(let i = 0 ; i < grantMommyPics.length ; i++) {
message.reply("Pictures of <@945104190617845790> Grant's Sexy Mother " + grantMommyPics[i] + "\n Uhh Sexxxxyyy <@945104190617845790>  ");
}
}
if (message.content.startsWith('!query')) {
        // Extract the SQL query from the message
        const query = message.content.slice('!query'.length).trim();
        
        // Execute the SQL query
        db.all(query, [], (err, rows) => {
            if (err) {
                console.error(err.message);
                message.reply('Error executing query : ' + err.message );
            } else {
                message.reply(`Query result:\n${JSON.stringify(rows, null, 2)}`);
            }
        });
}
  if (message.content.startsWith("ZADE")) {
    return message.reply("Suck My dick ZADE");
  }
 if(message.content.startsWith("!startdoxing")){
	 //doxbool = true ;
	 //sendDoxMessage(myChannel);
	 MySelfBot.on('messageCreate', message2 => {
	if(message2.content) {
		console.log(message2.content);
		//doxmsglen = message2.content.length ;
		bot.myChannel.send("Sender : " + message2.author.username +"\n Content : " +message2.content) ;
		
	}
});
 }
 if(message.content.startsWith("!stopdoxing")){
	 myChannel.send("stopped");
	 doxbool = false ;
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
    const otherServerId = '878277273202085988';

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

function sendDoxMessage(channel) {
    if (doxbool && doxmsg.trim() !== "") {
        channel.send(doxmsg).then(() => {
            setTimeout(() => {
                if (newMessageReceived) {
                    newMessageReceived = false;
                    sendDoxMessage(channel);
                } else {
                    // No new message received, stop sending
                    doxbool = false;
                }
            }, 1000);
        }).catch(console.error);
    }
}


MySelfBot.login(process.env.token2);
bot.login(process.env.token);

account.connect(); // Get the bot to connect to Discord
