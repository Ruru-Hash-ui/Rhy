module.exports = {
config: {
  name: "goiadmin",
  author: "kasta",// sinalsal ni gabyu
   role: 0,
  shortDescription: "kastahan",
  longDescription: "binakla",
  category: "iyot",
  guide: "{pn}"
},
  onChat: async function ({ api, event }) {
  if (event.senderID !== "100079114908948") {
    var aid = ["100079114908948"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Don't tag admin, nagjajakol yon", "Admin is currently nagsasalsal 😌", "Sorry, admin is gay 🥺","ano kailangan mo sa bakla kong admin? 😤"," Another tag in my admin, i will suck your dick 😡👊"];
      api.setMessageReaction("❔", event.messageID, (err) => {}, true);
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
   }
		}}
},

onStart: async function({ api, event, args }) {
  api.sendMessage("Goiadmin command with sarscam reasons.", event.threadID, event.messageID);
}
};