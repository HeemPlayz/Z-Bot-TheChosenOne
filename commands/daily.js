const Discord = require("discord.js");

module.exports.run = async (bot, message, args, sql) => {

 let rows =  sql.prepare(`SELECT * FROM profile WHERE UserID = '${message.author.id}'`).get()
    if(rows.length < 1) return message.reply("حاول مرة أخرى").then(msg => {msg.delete(5000)});
  let uCoins = rows.coins;

  message.channel.send(`**${message.author.username} you collect your \`200\` :dollar: daily pounds**`)
  uCoins[message.author.id].rows+= 200;


}

module.exports.help = {
  name: "daily"
}
