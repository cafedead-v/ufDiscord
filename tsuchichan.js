const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildVoiceStates,
	]
});
require('dotenv').config();
const { tsuchichan } = process.env;
client.login(process.env.tsuchichan);

client.once('ready', () => {
	console.log(`ready, logged in as ${client.user.username}!`);
});

//member add
client.on('guildMemberAdd', member => {
	member.user.displayAvatarURL
	const welcomeEmbed = new EmbedBuilder()
		.setColor(0x9999FF)
		.setDescription(`${member.guild.name}に${member.user.username}が参加しました`)
		.setThumbnail(displayAvatarURL)
	member.guild.channels.cache.get('992123731277258935').send({ 'embeds': [welcomeEmbed] });
	console.log(`${member.guild.name}に${member.user.username}が参加しました`);
});

//member removed
client.on('guildMemberRemove', member => {
	member.user.displayAvatarURL
	const goodbyeEmbed = new EmbedBuilder()
		.setColor(0x9999FF)
		.setDescription(`${member.guild.name}から${member.user.username}が退出しました`)
		.setThumbnail(displayAvatarURL)
	member.guild.channels.cache.get('992123731277258935').send({ 'embeds': [goodbyeEmbed] });
	console.log(`${member.guild.name}から${member.user.username}が退出しました`);
});

//VC通知(メッセージ送信がされない)
client.on('voiceStateUpdate', (oldState, newState) => {
    if (oldState.channelId === null && newState.channelId !== null) {
			const connectEmbed = new EmbedBuilder()
				.setColor(0x9999FF)
				.setDescription(`${newState.channel.name}に${newState.member.user}が接続しました`)
            .setThumbnail(newState.member.user.displayAvatarURL())
        newState.guild.channels.cache.get('992123731277258935').send({ 'embeds': [connectEmbed] });
		}
    if (oldState.channelId !== null && newState.channelId === null) {
			const disconnectEmbed = new EmbedBuilder()
				.setColor(0x9999FF)
				.setDescription(`${oldState.channel.name}に${oldState.member.user}が切断しました`)
            .setThumbnail(oldState.member.user.displayAvatarURL())
        oldState.guild.channels.cache.get('992123731277258935').send({ 'embeds': [disconnectEmbed] });
		}
})