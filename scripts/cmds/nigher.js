module.exports = {
 config: {
 name: "nigher",
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
 if (event.body && event.body.toLowerCase() === "nigger") {
 return message.reply({
 body: "You racist!",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/1X3sQqU.gif")
 });
 }
 }
}