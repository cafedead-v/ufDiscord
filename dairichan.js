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
		console.log('send DM done');
});

const prefix = '!!'
 client.on('messageCreate', message => {
   if (!message.content.startsWith(prefix) || message.author.bot || message.system) return;
   const [command, ...args] = message.content.slice(prefix.length).split(/\s+/)

//profile
   if(command === 'profile'){
    const profileEmbed = new EmbedBuilder()
    .setColor(0x /*845036 16進数に直す*/)
    .setTitle('影白')
    .setDescription('高校風グダグダ系Vtuber。好きなゲームを好きなように配信している。というのは表の設定で、裏では異世界転生して人生を謳歌していたりする。')
    .setThumbnail('https://cdn.discordapp.com/avatars/678832424628650004/24d73608e72b8346c14c7c8b7670e460.webp?size=1024')
    .addFields(
      { name: 'Games', value: ':ic_done_white_48dp:GTA\n:ic_done_white_48dp:Minecraft BE\netc.', inline: false },
      { name: 'YouTube', value: '[:ic_explore_white_48dp:](https://www.youtube.com/channel/UCBIthlHTY8oJ86iRltFBrHA)[here](https://www.youtube.com/channel/UCBIthlHTY8oJ86iRltFBrHA)', inline: true },
      { name: 'Twitter', value: '[:ic_explore_white_48dp:](https://twitter.com/kageri_haku)[here](https://twitter.com/kageri_haku)', inline: true },
      { name: 'Mirrativ', value: '[:ic_explore_white_48dp:](https://mirrativ.page.link/?link=https%3A%2F%2Fwww.mirrativ.com%2Fuser%2F100883588%3Fwhere%3Dprofile&apn=com.dena.mirrativ&ibi=com.dena.mirrativ&isi=1028944599&ius=mirrativ&st=%E5%BD%B1%E7%99%BD&sd=VERTEC%20community%E6%89%80%E5%B1%9E%E3%81%AEVtuber%E3%81%A7%E3%81%99%E3%80%82&si=https%3A%2F%2Fcdn.mirrativ.com%2Fmirrorman-prod%2Fimage%2Fprofile_image%2F13019d4f0a1a6e6cd12820e8fcfe77ad590d203d4df0ded31f05ec789679ad7a_m.jpeg%3F1659886333)[here](https://mirrativ.page.link/?link=https%3A%2F%2Fwww.mirrativ.com%2Fuser%2F100883588%3Fwhere%3Dprofile&apn=com.dena.mirrativ&ibi=com.dena.mirrativ&isi=1028944599&ius=mirrativ&st=%E5%BD%B1%E7%99%BD&sd=VERTEC%20community%E6%89%80%E5%B1%9E%E3%81%AEVtuber%E3%81%A7%E3%81%99%E3%80%82&si=https%3A%2F%2Fcdn.mirrativ.com%2Fmirrorman-prod%2Fimage%2Fprofile_image%2F13019d4f0a1a6e6cd12820e8fcfe77ad590d203d4df0ded31f05ec789679ad7a_m.jpeg%3F1659886333)', inline: true })
      .setFooter({ text: 'かげり はく Vtuber M 19 0113', iconURL: 'https://cdn.discordapp.com/attachments/993825189416665118/1041404121896456232/ic_assignment_ind_white_48dp.png' });
      client.channels.cache.get('プロフィールCHID').send({ "embeds": [profileEmbed] });
      console.log("send profile done");
    }})

    // .setColor(0x /*10092543 16進数に直す*/)
    // .setTitle('成瀬:butterfly:✨')
    // .setDescription('2008年ロサンゼルスへ単身渡米。その後、全米、ヨーロッパ、中東、東南アジア、太陽系内外を旅しながら、出自の謎を明らかにすべく、各地でUMA捕獲プロジェクトを数多く手掛ける。帰国後、仮想空間の存在に感銘を受けたことにより、グループ設立を決意する。2022年よりバーチャルライバーグループ「ユリシスフリー」を旗揚げする。「インターネットのすべてを私の手に」をビジョンに掲げ、個性あふれるライバー・クリエイターと共に「ユリフリ」のさらなる発展を企てる。各惑星の文化やコミュニティで磨かれた多様な感性でグループを導く存在。')
    // .setThumbnail('https://cdn.discordapp.com/attachments/993825189416665118/1005677988815323166/9988.jpg')
    // .addFields(
    //   {"name":"YouTube","value":"[:ic_explore_white_48dp:](https://www.youtube.com/channel/UCliZ7CIZnFZ5b52m5WhKy8A)[here](https://www.youtube.com/channel/UCliZ7CIZnFZ5b52m5WhKy8A)", inline: true},
    //   { name: 'Twitter', value: '[:ic_explore_white_48dp:](https://twitter.com/ulyssesFree_v)[here](https://twitter.com/ulyssesFree_v)', inline: true },
    // .setFooter({ text: 'なるせ 社長', iconURL: 'https://cdn.discordapp.com/attachments/993825189416665118/1041404121896456232/ic_assignment_ind_white_48dp.png' });      
    
    // .setColor(0x /*3350313 16進数に直す*/)
    // .setTitle('CAFEDEAD☕🕰️')
    // .setDescription('寝る間を惜しんで遊びたいです。誰がなんと言おうとも絶対に不眠です。')
    // .setThumbnail('https://cdn.discordapp.com/attachments/993825189416665118/1011954879654273024/7.png')
    // .addFields(
    //   {"name":"YouTube","value":"[:ic_explore_white_48dp:](https://www.youtube.com/channel/UCV8GoEPab6VfiEx6Pd8IEnQ)[here](https://www.youtube.com/channel/UCV8GoEPab6VfiEx6Pd8IEnQ)", inline: true},
    //   { name: 'Twitter', value: '[:ic_explore_white_48dp:](https://twitter.com/cafedead_v)[here](https://twitter.com/cafedead_v)', inline: true },
    // .setFooter({ text: 'かふぇでっど 運営 動画編集 M 22 0222 #CAFELIVE', iconURL: 'https://cdn.discordapp.com/attachments/993825189416665118/1041404121896456232/ic_assignment_ind_white_48dp.png' });      
  

// role
  if(command === 'role'){
    client.channels.cache.get('ユーザ設定のCHID').send();
    client.channels.cache.get('ユーザ設定のCHID').send();
    client.channels.cache.get('ユーザ設定のCHID').send();
    client.channels.cache.get('ユーザ設定のCHID').send();
    client.channels.cache.get('ユーザ設定のCHID').send();
    client.channels.cache.get('ユーザ設定のCHID').send();
    client.channels.cache.get('ユーザ設定のCHID').send();
    client.channels.cache.get('ユーザ設定のCHID').send();
    client.channels.cache.get('ユーザ設定のCHID').send();
    client.channels.cache.get('ユーザ設定のCHID').send();
    client.channels.cache.get('ユーザ設定のCHID').send();
    client.channels.cache.get('ユーザ設定のCHID').send();
    client.channels.cache.get('ユーザ設定のCHID').send();
    client.channels.cache.get('ユーザ設定のCHID').send();
    client.channels.cache.get('ユーザ設定のCHID').send();
    client.channels.cache.get('ユーザ設定のCHID').send();

  }

    :ic_label_white_48dp:Roles
    :star2:@Vtuber
    :art:@絵師
    :scissors:@動画編集
    :ice_cube:@3Dデザイナー
    :radioactive:@グラフィッカー
    :dvd:@歌い手
    :parking:@ボカロP
    :musical_keyboard:@作曲
    :leaves:@作詞
    
    :ic_label_white_48dp:License
    `@Member only`
    :t_rex:@Staff
    :wrench:@YouTubeMod
    :key:@TwitterMod
    
    :ic_label_white_48dp:Status
    `Vtuber`
    :revolving_hearts:@コラボ募集
    :axe:@凸待ち中
    
    `Creator`
    :vibration_mode:@リクエスト募集
    :mobile_phone_off:@リクエスト停止
    :package:@出品中
    :hourglass_flowing_sand:@制作中
    
    `Client`
    :triangular_flag_on_post:@制作依頼中
    
    :ic_label_white_48dp:Feed
    `バズツイの自動取得`
    :orange_heart:@新人Vfeed
    :yellow_heart:@Vと繋がりたいfeed
    :purple_heart:@V募集feed
    :blue_heart:@V素材feed
    :green_heart:@制作依頼feed
    
    :ic_label_white_48dp:Badge
    :gear:@botOP TO #📟コンソール
    :pill:@ヘルプ TO #🤍相談
    :warning:@R18 TO #🌙nsfw
    :beginner:@初心者
    :balloon:@エンジョイ勢
    :crossed_swords:@ガチ勢
    
    :ic_label_white_48dp:YouTube
    :canned_food:@200subscriber
    :pretzel:@100subscriber
    :candy:@50subscriber
    
    :ic_label_white_48dp:Twitter
    :doughnut:@3000follower 
    :salad:@2000follower
    :shaved_ice:@1000follower
    :egg:@500follower


    !cembed #🪪ユーザ設定
    {"title":"Profile","description":"[こちら](https://docs.google.com/forms/d/e/1FAIpQLSdCTWLxsU0ezwpmfBimHY89WL7x7oGBeWu4D3OLe9SnRZQgPg/viewform?usp=pp_url&entry.1151304886=%E4%BE%8B%0A%E9%85%8D%E4%BF%A1:%23%0A%E3%83%95%E3%82%A1%E3%83%B3%E3%82%A2%E3%83%BC%E3%83%88:%23&entry.692858119=%E9%85%8D%E4%BF%A1&entry.941053599=%E5%90%AB%E3%81%BE%E3%81%AA%E3%81%84&entry.1371169874=%E5%90%AB%E3%81%BE%E3%81%AA%E3%81%84&entry.1771506502=%E5%90%AB%E3%81%BE%E3%81%AA%E3%81%84&entry.1453325687=%E5%90%AB%E3%81%BE%E3%81%AA%E3%81%84&entry.579253767=%E5%90%AB%E3%81%BE%E3%81%AA%E3%81%84&entry.674291266=%E5%90%AB%E3%81%BE%E3%81%AA%E3%81%84)で<#993097895928668161>を作成できます。","color":10092543}
    
    !cembed #🪪ユーザ設定
    {"title":"Index","description":"
    :ic_visibility_white_48dp:[Type](https://discord.com/channels/960448632233005096/999686684276969632/1043557994031489024)
    :ic_visibility_white_48dp:[Roles](https://discord.com/channels/960448632233005096/999686684276969632/1043558043805306960)
    :ic_visibility_white_48dp:[License](https://discord.com/channels/960448632233005096/999686684276969632/1043558078873882785)
    :ic_visibility_white_48dp:[Status](https://discord.com/channels/960448632233005096/999686684276969632/1043558114135396493)
    :ic_visibility_white_48dp:[Feed](https://discord.com/channels/960448632233005096/999686684276969632/1043558232603492393)
    :ic_visibility_white_48dp:[Badge](https://discord.com/channels/960448632233005096/999686684276969632/1043558295664865352)
    :ic_visibility_white_48dp:[YouTube](https://discord.com/channels/960448632233005096/999686684276969632/1043558347342884974)
    :ic_visibility_white_48dp:[Twitter](https://discord.com/channels/960448632233005096/999686684276969632/1043558379890692096)
    :ic_visibility_white_48dp:[Profile](https://discord.com/channels/960448632233005096/999686684276969632/1043558419380047932)",
    "color":10092543}
    
    // carl cmd
    // !rr addmany #🪪ユーザ設定 1043557994031489024
    // :dog: @Partner
    // :cat: @Guest
    // :rabbit: @Listener

    // !rr addmany #🪪ユーザ設定 1043558043805306960
    // :star2: @Vtuber
    // :art: @絵師
    // :scissors: @動画編集
    // :ice_cube: @3Dデザイナー
    // :radioactive: @グラフィッカー
    // :dvd: @歌い手
    // :parking: @ボカロP
    // :musical_keyboard: @作曲
    // :leaves: @作詞

    // !rr addmany #🪪ユーザ設定 1043558078873882785
    // :t_rex: @Staff
    // :wrench: @YouTubeMod
    // :key: @TwitterMod

    // !rr addmany #🪪ユーザ設定 1043558114135396493
    // :revolving_hearts: @コラボ募集
    // :axe: @凸待ち中

    // !rr addmany #🪪ユーザ設定 1043558140131680377
    // :vibration_mode: @リクエスト募集
    // :mobile_phone_off: @リクエスト停止
    // :package: @出品中
    // :hourglass_flowing_sand: @制作中

    // !rr addmany #🪪ユーザ設定 1043558196381491220
    // :triangular_flag_on_post: @制作依頼中

    // !rr addmany #🪪ユーザ設定 1043558232603492393
    // :orange_heart: @新人Vfeed
    // :yellow_heart: @Vと繋がりたいfeed
    // :purple_heart: @V募集feed
    // :blue_heart: @V素材feed
    // :green_heart: @制作依頼feed

    // !rr addmany #🪪ユーザ設定 1043558295664865352
    // :gear: @botOP
    // :pill: @ヘルプ
    // :warning: @R18
    // :beginner: @初心者
    // :crossed_swords: @ガチ勢
    // :balloon: @エンジョイ勢

    // !rr addmany #🪪ユーザ設定 1043558347342884974
    // :canned_food: @200subscriber
    // :pretzel: @100subscriber
    // :candy: @50subscriber

    // !rr addmany #🪪ユーザ設定 1043558379890692096
    // :doughnut: @3000follower
    // :salad: @2000follower
    // :shaved_ice: @1000follower
    // :egg: @500follower
  
//  if(command === 'ping'){
//   message.reply(hyperlink('discord.js', 'https://discord.js.org/'));
//   message.channel.send(hideLinkEmbed('https://discord.js.org/'));
//   message.channel.send(userMention('1010465672507162634'));
//   client.channels.cache.get('1010465672507162634').send({ "content": "pong", "embeds": [exampleEmbed] });
//   client.users.cache.get('1015062677216825384').send("pong");
//   console.log("pong");
//  }
//  if (command === 'add') {
//   const [a, b] = args.map(str => Number(str))
//   message.channel.send(`${a} + ${b} = ${a + b}`)
// }

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




{
  "username": "Qiitaさん",
  "avatar_url": "https://github.com/qiita.png",
  "content": "オススメの記事です！",
  "embeds": [
    {
      "title": "Markdown記法 チートシート",
      "description": "Markdown記法のチートシートです。本ページではQiitaで使用可能なMarkdownのみ掲載しているため、一部原文と異なります。Markdownの原文については、Daring Fireball: Markdown Syntax Documentationをご覧下さい。...",
      "url": "https://qiita.com/Qiita/items/c686397e4a0f4f11683d",
      "timestamp":"2018-04-09T00:00:00+09:00",
      "color": 5620992,
      "footer": {
        "text": "© 2011-2018 Increments Inc.",
        "icon_url": "https://github.com/increments.png"
      },
      "image": {
        "url": "http://lorempixel.com/400/200/cats/"
      },
      "thumbnail": {
        "url": "https://github.com/qiita.png"
      },
      "author": {
        "name": "@Qiita",
        "url": "https://qiita.com/Qiita",
        "icon_url": "https://qiita-image-store.s3.amazonaws.com/0/88/profile-images/1512392618"
      },
      "fields": [
        {
          "name": ":thumbsup:いいね",
          "value": "6353",
          "inline":true
        },
        {
          "name": ":file_folder:ストック",
          "value": "999",
          "inline":true
        },
        {
          "name": ":bookmark_tabs:タグ",
          "value": "Qiita, Markdown"
        }
      ]
    }
  ]
}