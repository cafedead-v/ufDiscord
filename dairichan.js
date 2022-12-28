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
		.setDescription(':ic_verified_user_white_48dp:ガイドライン\n:ic_account_circle_white_48dp:誰にでも敬意を持って接すること\n:ic_lock_outline_white_48dp:安全を保つこと\n:ic_favorite_outline_white_48dp:親切なコメントをすること\n:ic_question_answer_white_48dp:誠実であること\n:ic_loyalty_white_48dp:コミュニティを心地よい場所にすること\n\n:ic_report_problem_white_48dp:お願い\nメンション通知が届くことがあります。不要な通知には各自の設定で対処し、コミュニティのアクティブな活動をご理解いただけるようお願いします。\n\n招待リンクは',hyperlink('こちら', 'https://discord.gg/GyceDW5zqH'))
		.setFooter({ text: 'ユリフリ', iconURL: 'https://cdn.discordapp.com/attachments/993825189416665118/1041400716880781361/icon_clyde_blurple_RGB.png' });
		client.users.cache.get(member.user).send({'embeds':[prologueEmbed]});
		console.log('send DM done');
  });
  
  const prefix = '!!'
  client.on('messageCreate', message => {
    if (!message.content.startsWith(prefix) || message.author.bot || message.system) return;
    const [command, ...args] = message.content.slice(prefix.length).split(/\s+/)
    
    
    
//guide
:ic_home_white_48dp:https://discord.gg/GyceDW5zqH

__:ic_bookmark_white_48dp:Vtuberファンが遊び、探究するコミュニティです__
```ここには、Vtuberをこよなく愛するリスナー、表現技術を磨くクリエイター、意欲的に活動を続けるVtuberをはじめ、あらゆる人がいます。参加者一人ひとりの目的は様々ですが、Vtuberを好きでいる気持ちは、共通していると言えそうです。交流のほか、コミュニティ独自のコンテンツ、サービス、設備、仕組みでVtuberシーンに新しい価値をつくることを理念に掲げて活動しています。```

__:ic_assignment_turned_in_white_48:審査や所属制度はありません__
```できるだけ多くのVtuberファンにお会いしたいです。何歳でも、どんな人種、民族でも、能力に違いがあっても、どんな宗教を信じていても、どんな性的指向、性同一性を持っていても、すべてのVtuberファンを歓迎します。目的に応じて、自由にご活用ください。```

__:ic_description_white_48dp:健全な運営にご協力ください__

:ic_account_child_white_48dp:敬意を持って接しよう```参加者には、各々のアイデンティティ、背景、関心、経験があります。```
:ic_favorite_white_48dp:親切なコメントを心がけよう```作品の気に入ったところを挙げる、アイデアに提案する、質問にわかりやすく答えるなどが例です。```
:ic_verified_user_white_48dp:プライバシーを守ろう```氏名、電話番号、住所、出身地、学校名、メールアドレス、チャットアプリIDなどは個人情報に該当します。```
:ic_speaker_notes_white_48dp:適切に利用しよう```スパム投稿、チェーンメール投稿、なりすまし、デマを流すことなどは迷惑行為に該当します。```
:ic_report_problem_white_48dp:迷惑行為に遭遇したときは、運営に通報しよう```反応せずに運営に通報することが優先です。```
:ic_settings_white_48dp:メンションが不要なときは、各自の通知設定で対処しよう```コミュニティのアクティブな活動にご協力お願いします。```

__:ic_help_white_48dp:これから始めよう__

:ic_perm_identity_white_48dp:<#999686684276969632>する
:ic_assignment_ind_white_48dp:<#993097895928668161>で参加者を探す
:ic_assignment_white_48dp:チャンネルトピックを読む
[:ic_explore_white_48dp:](https://twitter.com/ulyfly_v)[Twitter](https://twitter.com/ulyfly_v)を見る
[:ic_explore_white_48dp:](https://www.youtube.com/channel/UCliZ7CIZnFZ5b52m5WhKy8A)[YouTube](https://www.youtube.com/channel/UCliZ7CIZnFZ5b52m5WhKy8A)を見る


__:ic_track_changes_white_48dp:もっとみる__

:ic_event_white_48dp:イベントに参加する
[:ic_event_white_48dp:](https://calendar.google.com/calendar/u/0?cid=c2VuZDJuYXJ1c2VAZ21haWwuY29t)[スケジュール](https://calendar.google.com/calendar/u/0?cid=c2VuZDJuYXJ1c2VAZ21haWwuY29t)を見る
[:ic_get_app_white_48dp:](https://drive.google.com/drive/folders/1H5zW-gcWPB429dgmQxoOUy9X5-9UT8zF?usp=sharing)[共有素材](https://drive.google.com/drive/folders/1H5zW-gcWPB429dgmQxoOUy9X5-9UT8zF?usp=sharing)を探す
[:ic_explore_white_48dp:](https://discord.com/channels/960448632233005096/1023412641915490364/1047051140648415262)[Minecraft](https://discord.com/channels/960448632233005096/1023412641915490364/1047051140648415262)で遊ぶ



//profile
if(command === 'profile'){
  const profileEmbed = new EmbedBuilder()
  .setColor(0x0ce4ec)
  .setTitle('影白')
  .setDescription('高校風グダグダ系Vtuber。好きなゲームを好きなように配信している。というのは表の設定で、裏では異世界転生して人生を謳歌していたりする。')
  .setThumbnail('https://cdn.discordapp.com/avatars/678832424628650004/24d73608e72b8346c14c7c8b7670e460.webp?size=1024')
  .addFields(
    { name: 'Games', value: ':ic_done_white_48dp:GTA\n:ic_done_white_48dp:Minecraft BE\netc.', inline: false },
    { name: 'YouTube', value: '[:ic_explore_white_48dp:](https://www.youtube.com/channel/UCBIthlHTY8oJ86iRltFBrHA)[here](https://www.youtube.com/channel/UCBIthlHTY8oJ86iRltFBrHA)', inline: true },
      { name: 'Twitter', value: '[:ic_explore_white_48dp:](https://twitter.com/kageri_haku)[here](https://twitter.com/kageri_haku)', inline: true },
      { name: 'Mirrativ', value: '[:ic_explore_white_48dp:](https://mirrativ.page.link/?link=https%3A%2F%2Fwww.mirrativ.com%2Fuser%2F100883588%3Fwhere%3Dprofile&apn=com.dena.mirrativ&ibi=com.dena.mirrativ&isi=1028944599&ius=mirrativ&st=%E5%BD%B1%E7%99%BD&sd=VERTEC%20community%E6%89%80%E5%B1%9E%E3%81%AEVtuber%E3%81%A7%E3%81%99%E3%80%82&si=https%3A%2F%2Fcdn.mirrativ.com%2Fmirrorman-prod%2Fimage%2Fprofile_image%2F13019d4f0a1a6e6cd12820e8fcfe77ad590d203d4df0ded31f05ec789679ad7a_m.jpeg%3F1659886333)[here](https://mirrativ.page.link/?link=https%3A%2F%2Fwww.mirrativ.com%2Fuser%2F100883588%3Fwhere%3Dprofile&apn=com.dena.mirrativ&ibi=com.dena.mirrativ&isi=1028944599&ius=mirrativ&st=%E5%BD%B1%E7%99%BD&sd=VERTEC%20community%E6%89%80%E5%B1%9E%E3%81%AEVtuber%E3%81%A7%E3%81%99%E3%80%82&si=https%3A%2F%2Fcdn.mirrativ.com%2Fmirrorman-prod%2Fimage%2Fprofile_image%2F13019d4f0a1a6e6cd12820e8fcfe77ad590d203d4df0ded31f05ec789679ad7a_m.jpeg%3F1659886333)', inline: true })
      .setFooter({ text: 'かげり はく Vtuber M 19 0113', iconURL: 'https://cdn.discordapp.com/emojis/1046023071062040616.webp?size=96&quality=lossless' });
      client.channels.cache.get('プロフィールCHID').send({ "embeds": [profileEmbed] });
      console.log("send profile done");
    }})

    // .setColor(0x99FFFF)
    // .setTitle('成瀬:butterfly:✨')
    // .setDescription('2008年ロサンゼルスへ単身渡米。その後、全米、ヨーロッパ、中東、東南アジア、太陽系内外を旅しながら、出自の謎を明らかにすべく、各地でUMA捕獲プロジェクトを数多く手掛ける。帰国後、仮想空間の存在に感銘を受けたことにより、グループ設立を決意する。2022年よりバーチャルライバーグループ「ユリシスフリー」を旗揚げする。「インターネットのすべてを私の手に」をビジョンに掲げ、個性あふれるライバー・クリエイターと共に「ユリフリ」のさらなる発展を企てる。各惑星の文化やコミュニティで磨かれた多様な感性でグループを導く存在。')
    // .setThumbnail('https://cdn.discordapp.com/attachments/993825189416665118/1005677988815323166/9988.jpg')
    // .addFields(
    //   {"name":"YouTube","value":"[:ic_explore_white_48dp:](https://www.youtube.com/channel/UCliZ7CIZnFZ5b52m5WhKy8A)[here](https://www.youtube.com/channel/UCliZ7CIZnFZ5b52m5WhKy8A)", inline: true},
    //   { name: 'Twitter', value: '[:ic_explore_white_48dp:](https://twitter.com/ulyfly_v)[here](https://twitter.com/ulyfly_v)', inline: true },
    // .setFooter({ text: '社長', iconURL: 'https://cdn.discordapp.com/emojis/1046023071062040616.webp?size=96&quality=lossless' });      
    
    // .setColor(0x#4F3240)
    // .setTitle('CAFEDEAD☕🕰️')
    // .setDescription('寝る間を惜しんで遊びたい。')
    // .setThumbnail('https://cdn.discordapp.com/attachments/993825189416665118/1046050905692323881/AMkq2N_2.jpg')
    // .addFields(
    //   {"name":"YouTube","value":"[:ic_explore_white_48dp:](https://www.youtube.com/channel/UCV8GoEPab6VfiEx6Pd8IEnQ)[here](https://www.youtube.com/channel/UCV8GoEPab6VfiEx6Pd8IEnQ)", inline: true},
    //   { name: 'Twitter', value: '[:ic_explore_white_48dp:](https://twitter.com/cafedead_v)[here](https://twitter.com/cafedead_v)', inline: true },
    // .setFooter({ text: 'かふぇでっど 運営 動画編集 M 22 0222 #CAFELIVE', iconURL: 'https://cdn.discordapp.com/attachments/993825189416665118/1041404121896456232/ic_assignment_ind_white_48dp.png' });      
  

// role
  if(command === 'role'){
    client.channels.cache.get('ユーザ設定のCHID').send();
  }

  :ic_reorder_white_48dp:タイプ
  :dog:@Partner : 適度に活動する
  :cat:@Guest : 身軽に活用する
  :rabbit:@Listener : 気楽に過ごす
  
  :ic_reorder_white_48dp:ロール
  :star2:@Vtuber
  :art:@絵師
  :scissors:@動画編集
  :ice_cube:@3Dデザイナー
  :radioactive:@グラフィッカー
  :dvd:@歌い手
  :parking:@ボカロP
  :musical_keyboard:@作曲
  :leaves:@作詞
  
  :ic_reorder_white_48dp:ステータス
  :revolving_hearts:@コラボOK
  :axe:@凸OK
  :vibration_mode:@リクエストOK
  :mobile_phone_off:@リクエストNG
  
  :ic_reorder_white_48dp:バッジ
  :beginner:@初心者
  :balloon:@エンジョイ勢
  :crossed_swords:@ガチ勢
  :canned_food:@1000subscriber
  :pretzel:@500subscriber
  :candy:@200subscriber
  :doughnut:@4000follower 
  :salad:@3000follower
  :shaved_ice:@2000follower
  
  :ic_reorder_white_48dp:アクセス権限
  :gear:@botOP : #📟コンソール
  :warning:@R18 : #🌙nsfw
  :unlock:@Inspector : 運営とアーカイブ
  
  !cembed #🪪ユーザ設定
  {"description":"[Googleフォーム](https://docs.google.com/forms/d/e/1FAIpQLSdCTWLxsU0ezwpmfBimHY89WL7x7oGBeWu4D3OLe9SnRZQgPg/viewform?usp=pp_url&entry.1151304886=%E4%BE%8B%0A%E9%85%8D%E4%BF%A1:%23%0A%E3%83%95%E3%82%A1%E3%83%B3%E3%82%A2%E3%83%BC%E3%83%88:%23&entry.692858119=%E9%85%8D%E4%BF%A1&entry.941053599=%E5%90%AB%E3%81%BE%E3%81%AA%E3%81%84&entry.1371169874=%E5%90%AB%E3%81%BE%E3%81%AA%E3%81%84&entry.1771506502=%E5%90%AB%E3%81%BE%E3%81%AA%E3%81%84&entry.1453325687=%E5%90%AB%E3%81%BE%E3%81%AA%E3%81%84&entry.579253767=%E5%90%AB%E3%81%BE%E3%81%AA%E3%81%84&entry.674291266=%E5%90%AB%E3%81%BE%E3%81%AA%E3%81%84)で<#993097895928668161>を作る","color":10092543}
  
  !cembed #🪪ユーザ設定
  {"description":"
  :ic_label_white_48dp:[タイプ](https://discord.com/channels/960448632233005096/999686684276969632/1047066700887117884)
  :ic_label_white_48dp:[ロール](https://discord.com/channels/960448632233005096/999686684276969632/1047066759829667890)
  :ic_label_white_48dp:[ステータス](https://discord.com/channels/960448632233005096/999686684276969632/1047066789470818334)
  :ic_label_white_48dp:[バッジ](https://discord.com/channels/960448632233005096/999686684276969632/1047066854205694003)
  :ic_label_white_48dp:[アクセス権限](https://discord.com/channels/960448632233005096/999686684276969632/1047066908857479199)
  :ic_label_white_48dp:[プロフィール作成](https://discord.com/channels/960448632233005096/999686684276969632/1047066987534221342)",
  "color":10092543}

  !rr addmany #🪪ユーザ設定 1047066700887117884
  :dog: @Partner
  :cat: @Guest
  :rabbit: @Listener
  
  !rr addmany #🪪ユーザ設定 1047066759829667890
  :star2: @Vtuber
  :art: @絵師
  :scissors: @動画編集
  :ice_cube: @3Dデザイナー
  :radioactive: @グラフィッカー
  :dvd: @歌い手
  :parking: @ボカロP
  :musical_keyboard: @作曲
  :leaves: @作詞
  
  !rr addmany #🪪ユーザ設定 1047066789470818334
  :revolving_hearts: @コラボOK
  :axe: @凸OK
  :vibration_mode: @リクエストOK
  :mobile_phone_off: @リクエストNG
  
  !rr addmany #🪪ユーザ設定 1047066854205694003
  :beginner: @初心者
  :balloon: @エンジョイ勢
  :crossed_swords: @ガチ勢
  :canned_food: @1000subscriber
  :pretzel: @500subscriber
  :candy: @200subscriber
  :salad: @4000follower
  :shaved_ice: @3000follower
  :egg: @2000follower
  

  
  !rr addmany #🪪ユーザ設定 1047066908857479199
  :gear: @botOP
  :warning: @R18
  :unlock: @Inspector
  
  :ic_label_white_48dp:License
  :wrench:@YouTubeMod
  :key:@TwitterMod 
  :t_rex:@Staff 
  :unicorn:@Manager 
  :dragon:@Moderator
  
  !rr addmany #scrap 1045745436113256528
  :t_rex: @Staff
  :wrench: @YouTubeMod
  :key: @TwitterMod

// dairichan templete
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

// something to curl
// curl -H 'Content-Type:application/json' "$DISCORD_WEBHOOK_URL" -d '{"content": "hello"}'

// json templete
// {
//   "username": "Qiitaさん",
//   "avatar_url": "https://github.com/qiita.png",
//   "content": "オススメの記事です！",
//   "embeds": [
//     {
//       "title": "Markdown記法 チートシート",
//       "description": "Markdown記法のチートシートです。本ページではQiitaで使用可能なMarkdownのみ掲載しているため、一部原文と異なります。Markdownの原文については、Daring Fireball: Markdown Syntax Documentationをご覧下さい。...",
//       "url": "https://qiita.com/Qiita/items/c686397e4a0f4f11683d",
//       "timestamp":"2018-04-09T00:00:00+09:00",
//       "color": 5620992,
//       "footer": {
//         "text": "© 2011-2018 Increments Inc.",
//         "icon_url": "https://github.com/increments.png"
//       },
//       "image": {
//         "url": "http://lorempixel.com/400/200/cats/"
//       },
//       "thumbnail": {
//         "url": "https://github.com/qiita.png"
//       },
//       "author": {
//         "name": "@Qiita",
//         "url": "https://qiita.com/Qiita",
//         "icon_url": "https://qiita-image-store.s3.amazonaws.com/0/88/profile-images/1512392618"
//       },
//       "fields": [
//         {
//           "name": ":thumbsup:いいね",
//           "value": "6353",
//           "inline":true
//         },
//         {
//           "name": ":file_folder:ストック",
//           "value": "999",
//           "inline":true
//         },
//         {
//           "name": ":bookmark_tabs:タグ",
//           "value": "Qiita, Markdown"
//         }
//       ]
//     }
//   ]
// }

// !embedsource 1043888352656633886 test
// !cembed test {
//     "fields":[
//     ],
//     "color":10092543,
//     "type":"rich",
//     "description":"\u5f8c\u4e16\u306b\u8a9e\u308a\u7d99\u304e\u305f\u3044\u30e1\u30c3\u30bb\u30fc\u30b8\u306f\u30d4\u30f3\u7559\u3081\u3057\u3066\u304f\u3060\u3055\u3044\u3002https://docs.carl.gg/utilities/embeds/\n\n[aaa](https://docs.carl.gg/utilities/embeds/)",
//     "title":"README"
// }
// !role color 作曲 #DFFF69
// !rr color test 1043888352656633886 #aaaaaa
// !embed 99ffff Index | Contents
