const axios = require('axios');

module.exports = {
	config: {
		name: "gpt4o1",
		version: "1.0",
		author: "Kenlie",
		countDown: 5,
		hasPermssion: 0,
		role: 0,
		credits: "Kenlie",
		description: 'Powered by OpenAI',
		usePrefix: false,
		hasPrefix: false,
		commandCategory: 'AI',
		usage: '{pn} [prompt]',
		cooldown: 0,
		shortDescription: {
			vi: "chat với gpt4o",
			en: "chat with gpt4o"
		},
		longDescription: {
			vi: "chat với gpt",
			en: "chat with gpt"
		},
		category: "chat",
		guide: {
			en: "{pn} 'prompt'\nExample:\n{pn} hi there\nyou can reply to chat"
		}
	},

	onStart: async function ({ api, message, event, args }) {
		let user = args.join(' ');

		try {
			if (!user) {
				return api.sendMessage('Please provide a question first!', event.threadID, event.messageID);
			}

			const response = await axios.get(`https://api.kenliejugarap.com/freegpt4o128k/?question=${encodeURIComponent(user)}`);

			const responseData = response.data.response;
			const cleanResponseData = responseData.replace(/\n\nIs this answer helpful to you\? Kindly click the link below\nhttps:\/\/click2donate.kenliejugarap.com\n\(Clicking the link and clicking any ads or button and wait for 30 seconds \(3 times\) everyday is a big donation and help to us to maintain the servers, last longer, and upgrade servers in the future\)/, '');
			const replyMessage = `𝗚𝗣𝗧-𝟰𝗼 (128k-context)\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱\n${cleanResponseData}`;
			api.sendMessage(replyMessage, event.threadID, event.messageID);
		} catch (err) {
			console.error(err);
			api.sendMessage('An error occurred while processing your request.', event.threadID, event.messageID);
		}
	},

	onReply: async function ({ api, message, event, Reply, args }) {
		let { author, commandName } = Reply;
		if (event.senderID !== author) return;
		const user = args.join(" ");

		try {
			const response = await axios.get(`https://api.kenliejugarap.com/freegpt4o128k/?question=${encodeURIComponent(user)}`);

			const responseData = response.data.response;
			const cleanResponseData = responseData.replace(/\n\nIs this answer helpful to you\? Kindly click the link below\nhttps:\/\/click2donate.kenliejugarap.com\n\(Clicking the link and clicking any ads or button and wait for 30 seconds \(3 times\) everyday is a big donation and help to us to maintain the servers, last longer, and upgrade servers in the future\)/, '');
			const replyMessage = `𝗚𝗣𝗧-𝟰𝗼 (128k-context)\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱\n${cleanResponseData}`;

			if (response.data && response.data.response) {
				api.sendMessage(replyMessage, event.threadID, (err, info) => {
					if (err) return console.error(err);
					global.GoatBot.onReply.set(info.messageID, {
						commandName,
						messageID: info.messageID,
						author: event.senderID
					});
				});
			} else {
				console.error("API Error:", response.data);
				sendErrorMessage(api, event.threadID, "Server not responding ❌");
			}
		} catch (error) {
			console.error("Request Error:", error.message);
			sendErrorMessage(api, event.threadID, "Server not responding ❌");
		}
	}
};

function sendErrorMessage(api, threadID, errorMessage) {
	api.sendMessage({ body: errorMessage }, threadID);
}