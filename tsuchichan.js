const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const client = new Client({
	intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildVoiceStates]
});
require('dotenv').config();
const { tsuchichan } = process.env;
client.login(process.env.tsuchichan);
client.once('ready', () => {
	console.log(`ready, logged in as ${client.user.username}!`);
});

//member add
client.on('guildMemberAdd', member => {
	const welcomeEmbed = new EmbedBuilder().setColor(0x99FFFF).setDescription(`${member.guild.name}に${member.user.username}が参加したよ`).setThumbnail(member.user.displayAvatarURL())
	member.guild.channels.cache.get('992123731277258935').send({ 'embeds': [welcomeEmbed] });
	console.log(`${member.guild.name}に${member.user}が参加したよ`);
});

//member removed
client.on('guildMemberRemove', member => {
	const goodbyeEmbed = new EmbedBuilder().setColor(0x99FFFF).setDescription(`${member.guild.name}から${member.user.username}が退出したよ`).setThumbnail(member.user.displayAvatarURL())
	member.guild.channels.cache.get('992123731277258935').send({ 'embeds': [goodbyeEmbed] });
	console.log(`${member.guild.name}から${member.user}が退出したよ`);
})

//vcState update
client.on('voiceStateUpdate', (oldState, newState) => {
	if (oldState.channelId === null && newState.channelId !== null) {
		const connectEmbed = new EmbedBuilder().setColor(0x99FFFF).setDescription(`${newState.channel.name}に${newState.member.user}が参加したよ`).setThumbnail(newState.member.user.displayAvatarURL())
		newState.guild.channels.cache.get('992123731277258935').send({ 'embeds': [connectEmbed] });
		console.log(`${newState.channel.name}に${newState.member.user}が参加したよ`);
	} if (oldState.channelId !== null && newState.channelId === null) {
		const disconnectEmbed = new EmbedBuilder().setColor(0x99FFFF).setDescription(`${oldState.channel.name}から${oldState.member.user}が退出したよ`).setThumbnail(oldState.member.user.displayAvatarURL())
		oldState.guild.channels.cache.get('992123731277258935').send({ 'embeds': [disconnectEmbed] });
		console.log(`${oldState.channel.name}から${oldState.member.user}が退出したよ`);
	}
})