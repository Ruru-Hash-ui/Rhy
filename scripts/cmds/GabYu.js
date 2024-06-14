module.exports = {
	config: {
			name: "Ram Bermudez",
			version: "1.0",
        aliases: ["Ram"],
			author: "Ram Bermudez",
			countDown: 5,
			role: 0,
			shortDescription: "sarcasm",
			longDescription: "sarcasm",
			category: "reply",
	},
onStart: async function(){}, 
onChat: async function({
	event,
	message,
	getLang
}) {
	if (event.body && event.body.toLowerCase() == "@Ram Bermudez") return message.reply("Busy Owner ko");
}
};
