require('dotenv').config();

const { Client, Events, GatewayIntentBits } = require('discord.js');

const bot = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
});

// Make sure to grant the Message Content Intent Gateway Intents Privilege to your bot

// Execute once when the bot is ready
bot.once(Events.ClientReady, (c) => {
	console.log(`Bot is ready! Logged in as ${c.user.tag}`);
});

bot.login(`${process.env.BOT_TOKEN}`);
