module.exports = {
 config: {
 name: "gm",
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
 if (event.body && event.body.toLowerCase() === "gm") {
 return message.reply({
 body: "good morning buddy!",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/uRS51bZ.gif")
 });
 }
 }
}