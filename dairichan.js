const {Client, GatewayIntentBits,	EmbedBuilder,	hyperlink, hideLinkEmbed,	userMention} = require('discord.js');
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.DirectMessages,]
});

require('dotenv').config();
const { dairichan } = process.env;

client.login(process.env.dairichan);
client.once('ready', () => {
	console.log(`ready, logged in as ${client.user.username}!`);
});

//if member add then send about and guideline
client.on('guildMemberAdd', member => {
	const prologueEmbed = new EmbedBuilder()
		.setColor(0x99FFFF)
		.setTitle('🚪Prologue')
		.setURL('https://twitter.com/ulyfly_v/')
		.setAuthor({ name: 'CAFEDEAD', iconURL: 'https://cdn.discordapp.com/attachments/993825189416665118/1041400716880781361/icon_clyde_blurple_RGB.png', url: 'https://twitter.com/cafedead_v/' })
		.setDescription(
			'長いから読んだふりしてね。\n:ic_description_white_48dp:About\nユリフリは、Vtuberファンが集うコミュニティです。ここには、Vtuberをこよなく愛するリスナー、表現技術を磨くクリエイター、意欲的に活動を続けるVtuberをはじめ、あらゆる人がいます。参加者一人ひとりの目的は様々ですが、Vtuberを好きでいる気持ちは、共通していると言えそうです。交流のほか、コミュニティ独自のコンテンツ、サービス、設備、仕組みでVtuberシーンに新しい価値をつくることを理念に掲げて活動しています。ユリフリは、遊びと探究の場です。\n\n:ic_description_white_48dp:Policy\nできるだけ多くのVtuberファンにお会いするため、参加条件や所属制度を設けていません。オーディション開催や勧誘もありません。目的や用途に応じて、自由に活用いただけることを重視しています。\n\n:ic_description_white_48dp:Statement\n私たちは、何歳でも、どんな人種、民族でも、能力に違いがあっても、どんな宗教を信じていても、どんな性的指向、性同一性を持っていても、すべてのVtuberファンを歓迎します。\n\n:ic_description_white_48dp:Guideline\n:ic_bookmark_white_48dp:__誰にでも敬意を持って接すること__\n楽しい時間を共有できることを誰もが期待しています。そこには、多様な背景や興味、アイデンティティ、経験を持った他人がいることに気づき、その表現を敬いましょう。個人やグループのアイデンティティを攻撃したり、背景や興味について、意地悪な態度をとることはしないでください。\n\n:ic_bookmark_white_48dp:__安全を保つこと__\n個人情報を公開しないでください。安全上の理由から、個人情報を含むメッセージを送らないでください。これには、氏名、電話番号、住所、出身地、学校名、メールアドレス、チャットアプリが含まれます。\n\n:ic_bookmark_white_48dp:__親切なコメントをすること__\n作品やアイデアにコメントするときは、好きなところを挙げたり、提案したりして、親切にすることを忘れないでください。非難をせず、メッセージには敬意を込めましょう。\n\n:ic_bookmark_white_48dp:__誠実であること__\n噂を広めたり、他人になりすましたりしないでください。スパムやチェーンメールを投稿することも、コミュニティをないがしろにする行為です。\n\n:ic_bookmark_white_48dp:__コミュニティを心地よい場所にすること__\nここに書かれたものが、意地悪だったり、侮辱的だったり、暴力的だったり、コミュニティにとって不適切だと感じたときは、@CAFEDEAD#4851に知らせてください。喧嘩をしたり、他人の噂を広めたり、不適切なものに反応しないでください。報告を確認して、運営が適切な対処を行います。\n\n:ic_description_white_48dp:Note\n{@here}、{@everyone}、 ユーザ宛のメンション通知が届くことがあります。不要な通知には各自の設定で対処し、コミュニティのアクティブな活動をご理解いただけるようお願いします。\n',hyperlink('招待リンク', 'https://discord.gg/GyceDW5zqH'))
		.setFooter({ text: 'ユリフリ', iconURL: 'https://cdn.discordapp.com/attachments/993825189416665118/1041400716880781361/icon_clyde_blurple_RGB.png' });
		
		client.users.cache.get(member.user).send({'embeds':[prologueEmbed]});
});

// const prefix = '!!'
//  client.on('messageCreate', message => {
//    if (!message.content.startsWith(prefix) || message.author.bot || message.system) return;
//    const [command, ...args] = message.content.slice(prefix.length).split(/\s+/)
//    if (command === 'add') {
//      const [a, b] = args.map(str => Number(str))
//      message.channel.send(`${a} + ${b} = ${a + b}`)
//    }
// 	 if(command === 'ping'){
// 		message.reply(hyperlink('discord.js', 'https://discord.js.org/'));
// 		message.channel.send(hideLinkEmbed('https://discord.js.org/'));
// 		message.channel.send(userMention('1010465672507162634'));
// 		client.channels.cache.get('1010465672507162634').send({ "content": "pong", "embeds": [exampleEmbed] });
// 		client.users.cache.get('1015062677216825384').send("pong");
// 		console.log("pong");
// 	 }
//  })

// const exampleEmbed = new EmbedBuilder()
// 	.setColor(0x99FFFF)
// 	.setTitle('Some title')
// 	.setURL('https://discord.js.org/')
// 	.setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
// 	.setDescription(
// 		hyperlink('discord.js is here', 'https://discord.js.org/')
// 		)
// 	.setThumbnail('https://i.imgur.com/AfFp7pu.png')
// 	.addFields(
// 		{ name: 'Regular field title', value: 'Some value here' },
// 		{ name: '\u200B', value: '\u200B' },
// 		{ name: 'Inline field title', value: 'Some value here', inline: true },
// 		{ name: 'Inline field title', value: 'Some value here', inline: true },
// 	)
// 	.addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
// 	.setImage('https://i.imgur.com/AfFp7pu.png')
// 	.setTimestamp()
// 	.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });


// curl -H 'Content-Type:application/json' "$DISCORD_WEBHOOK_URL" -d '{"content": "hello"}'