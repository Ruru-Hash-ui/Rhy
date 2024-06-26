module.exports = {
 config: {
 name: "bot",
 version: "1.0",
 author: "Gab Yu",
 countDown: 5,
 role: 0,
 shortDescription: "no prefix",
 longDescription: "no prefix",
 category: "no prefix",
 }, 
 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "bot") {
 return message.reply({
 body: "Ano kailangan mo⁉️",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/Uk6Adue.gif")
 });
 }
 }
}