module.exports = {
 config: {
 name: "aso",
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
 if (event.body && event.body.toLowerCase() === "aso") {
 return message.reply({
 body: "aso na naman tangina ka arf🐶",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/6J5wkq2.jpeg")
 });
 }
 }
}