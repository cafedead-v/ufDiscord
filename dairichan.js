const { Client, GatewayIntentBits, EmbedBuilder, hyperlink, hideLinkEmbed, userMention } = require('discord.js');
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.DirectMessages,
	]
});
require('dotenv').config();
const { dairichan } = process.env;
client.login(process.env.dairichan);

client.once('ready', () => {
	console.log(`ready, logged in as ${client.user.username}!`);
});


const prefix = '!!'
 client.on('messageCreate', message => {
   if (!message.content.startsWith(prefix) || message.author.bot || message.system) return;
   const [command, ...args] = message.content.slice(prefix.length).split(/\s+/)
   if (command === 'add') {
     const [a, b] = args.map(str => Number(str))
     message.channel.send(`${a} + ${b} = ${a + b}`)
   }
	 if(command === 'ping'){
		message.reply(hyperlink('discord.js', 'https://discord.js.org/'));
		message.channel.send(hideLinkEmbed('https://discord.js.org/'));
		message.channel.send(userMention('1010465672507162634'));
		client.channels.cache.get('1010465672507162634').send({ "content": "pong", "embeds": [exampleEmbed] });
		client.users.cache.get('1015062677216825384').send("pong");
		console.log("pong");
	 }
 })

const exampleEmbed = new EmbedBuilder()
	.setColor(0x99FFFF)
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
	.setDescription(
		hyperlink('discord.js is here', 'https://discord.js.org/')
		)
	.setThumbnail('https://i.imgur.com/AfFp7pu.png')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
	.setImage('https://i.imgur.com/AfFp7pu.png')
	.setTimestamp()
	.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });


// curl -H 'Content-Type:application/json' "$DISCORD_WEBHOOK_URL" -d '{"content": "hello"}'