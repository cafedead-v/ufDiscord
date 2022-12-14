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
		.setTitle('ðªPrologue')
		.setURL('https://twitter.com/ulyfly_v/')
		.setAuthor({ name: 'CAFEDEAD', iconURL: 'https://cdn.discordapp.com/attachments/993825189416665118/1041400716880781361/icon_clyde_blurple_RGB.png', url: 'https://twitter.com/cafedead_v/' })
		.setDescription(':ic_verified_user_white_48dp:ã¬ã¤ãã©ã¤ã³\n:ic_account_circle_white_48dp:èª°ã«ã§ãæ¬æãæã£ã¦æ¥ãããã¨\n:ic_lock_outline_white_48dp:å®å¨ãä¿ã¤ãã¨\n:ic_favorite_outline_white_48dp:è¦ªåãªã³ã¡ã³ãããããã¨\n:ic_question_answer_white_48dp:èª å®ã§ãããã¨\n:ic_loyalty_white_48dp:ã³ãã¥ããã£ãå¿å°ããå ´æã«ãããã¨\n\n:ic_report_problem_white_48dp:ãé¡ã\nã¡ã³ã·ã§ã³éç¥ãå±ããã¨ãããã¾ããä¸è¦ãªéç¥ã«ã¯åèªã®è¨­å®ã§å¯¾å¦ããã³ãã¥ããã£ã®ã¢ã¯ãã£ããªæ´»åããçè§£ããã ãããããé¡ããã¾ãã\n\næå¾ãªã³ã¯ã¯',hyperlink('ãã¡ã', 'https://discord.gg/GyceDW5zqH'))
		.setFooter({ text: 'ã¦ãªããª', iconURL: 'https://cdn.discordapp.com/attachments/993825189416665118/1041400716880781361/icon_clyde_blurple_RGB.png' });
		client.users.cache.get(member.user).send({'embeds':[prologueEmbed]});
		console.log('send DM done');
  });
  
  const prefix = '!!'
  client.on('messageCreate', message => {
    if (!message.content.startsWith(prefix) || message.author.bot || message.system) return;
    const [command, ...args] = message.content.slice(prefix.length).split(/\s+/)
    
    
    
//guide
:ic_home_white_48dp:https://discord.gg/GyceDW5zqH

__:ic_bookmark_white_48dp:Vtuberãã¡ã³ãéã³ãæ¢ç©¶ããã³ãã¥ããã£ã§ã__
```ããã«ã¯ãVtuberããããªãæãããªã¹ãã¼ãè¡¨ç¾æè¡ãç£¨ãã¯ãªã¨ã¤ã¿ã¼ãææ¬²çã«æ´»åãç¶ããVtuberãã¯ãããããããäººããã¾ããåå èä¸äººã²ã¨ãã®ç®çã¯æ§ãã§ãããVtuberãå¥½ãã§ããæ°æã¡ã¯ãå±éãã¦ããã¨è¨ãããã§ããäº¤æµã®ã»ããã³ãã¥ããã£ç¬èªã®ã³ã³ãã³ãããµã¼ãã¹ãè¨­åãä»çµã¿ã§Vtuberã·ã¼ã³ã«æ°ããä¾¡å¤ãã¤ãããã¨ãçå¿µã«æ²ãã¦æ´»åãã¦ãã¾ãã```

__:ic_assignment_turned_in_white_48:å¯©æ»ãæå±å¶åº¦ã¯ããã¾ãã__
```ã§ããã ãå¤ãã®Vtuberãã¡ã³ã«ãä¼ããããã§ããä½æ­³ã§ããã©ããªäººç¨®ãæ°æã§ããè½åã«éãããã£ã¦ããã©ããªå®æãä¿¡ãã¦ãã¦ããã©ããªæ§çæåãæ§åä¸æ§ãæã£ã¦ãã¦ãããã¹ã¦ã®Vtuberãã¡ã³ãæ­è¿ãã¾ããç®çã«å¿ãã¦ãèªç±ã«ãæ´»ç¨ãã ããã```

__:ic_description_white_48dp:å¥å¨ãªéå¶ã«ãååãã ãã__

:ic_account_child_white_48dp:æ¬æãæã£ã¦æ¥ããã```åå èã«ã¯ãåãã®ã¢ã¤ãã³ãã£ãã£ãèæ¯ãé¢å¿ãçµé¨ãããã¾ãã```
:ic_favorite_white_48dp:è¦ªåãªã³ã¡ã³ããå¿ãããã```ä½åã®æ°ã«å¥ã£ãã¨ãããæãããã¢ã¤ãã¢ã«ææ¡ãããè³ªåã«ããããããç­ãããªã©ãä¾ã§ãã```
:ic_verified_user_white_48dp:ãã©ã¤ãã·ã¼ãå®ãã```æ°åãé»è©±çªå·ãä½æãåºèº«å°ãå­¦æ ¡åãã¡ã¼ã«ã¢ãã¬ã¹ããã£ããã¢ããªIDãªã©ã¯åäººæå ±ã«è©²å½ãã¾ãã```
:ic_speaker_notes_white_48dp:é©åã«å©ç¨ããã```ã¹ãã æç¨¿ããã§ã¼ã³ã¡ã¼ã«æç¨¿ããªããã¾ãããããæµããã¨ãªã©ã¯è¿·æè¡çºã«è©²å½ãã¾ãã```
:ic_report_problem_white_48dp:è¿·æè¡çºã«é­éããã¨ãã¯ãéå¶ã«éå ±ããã```åå¿ããã«éå¶ã«éå ±ãããã¨ãåªåã§ãã```
:ic_settings_white_48dp:ã¡ã³ã·ã§ã³ãä¸è¦ãªã¨ãã¯ãåèªã®éç¥è¨­å®ã§å¯¾å¦ããã```ã³ãã¥ããã£ã®ã¢ã¯ãã£ããªæ´»åã«ãååãé¡ããã¾ãã```

__:ic_help_white_48dp:ããããå§ããã__

:ic_perm_identity_white_48dp:<#999686684276969632>ãã
:ic_assignment_ind_white_48dp:<#993097895928668161>ã§åå èãæ¢ã
:ic_assignment_white_48dp:ãã£ã³ãã«ãããã¯ãèª­ã
[:ic_explore_white_48dp:](https://twitter.com/ulyfly_v)[Twitter](https://twitter.com/ulyfly_v)ãè¦ã
[:ic_explore_white_48dp:](https://www.youtube.com/channel/UCliZ7CIZnFZ5b52m5WhKy8A)[YouTube](https://www.youtube.com/channel/UCliZ7CIZnFZ5b52m5WhKy8A)ãè¦ã


__:ic_track_changes_white_48dp:ãã£ã¨ã¿ã__

:ic_event_white_48dp:ã¤ãã³ãã«åå ãã
[:ic_event_white_48dp:](https://calendar.google.com/calendar/u/0?cid=c2VuZDJuYXJ1c2VAZ21haWwuY29t)[ã¹ã±ã¸ã¥ã¼ã«](https://calendar.google.com/calendar/u/0?cid=c2VuZDJuYXJ1c2VAZ21haWwuY29t)ãè¦ã
[:ic_get_app_white_48dp:](https://drive.google.com/drive/folders/1H5zW-gcWPB429dgmQxoOUy9X5-9UT8zF?usp=sharing)[å±æç´ æ](https://drive.google.com/drive/folders/1H5zW-gcWPB429dgmQxoOUy9X5-9UT8zF?usp=sharing)ãæ¢ã
[:ic_explore_white_48dp:](https://discord.com/channels/960448632233005096/1023412641915490364/1047051140648415262)[Minecraft](https://discord.com/channels/960448632233005096/1023412641915490364/1047051140648415262)ã§éã¶



//profile
if(command === 'profile'){
  const profileEmbed = new EmbedBuilder()
  .setColor(0x0ce4ec)
  .setTitle('å½±ç½')
  .setDescription('é«æ ¡é¢¨ã°ãã°ãç³»Vtuberãå¥½ããªã²ã¼ã ãå¥½ããªããã«éä¿¡ãã¦ãããã¨ããã®ã¯è¡¨ã®è¨­å®ã§ãè£ã§ã¯ç°ä¸çè»¢çãã¦äººçãè¬³æ­ãã¦ãããããã')
  .setThumbnail('https://cdn.discordapp.com/avatars/678832424628650004/24d73608e72b8346c14c7c8b7670e460.webp?size=1024')
  .addFields(
    { name: 'Games', value: ':ic_done_white_48dp:GTA\n:ic_done_white_48dp:Minecraft BE\netc.', inline: false },
    { name: 'YouTube', value: '[:ic_explore_white_48dp:](https://www.youtube.com/channel/UCBIthlHTY8oJ86iRltFBrHA)[here](https://www.youtube.com/channel/UCBIthlHTY8oJ86iRltFBrHA)', inline: true },
      { name: 'Twitter', value: '[:ic_explore_white_48dp:](https://twitter.com/kageri_haku)[here](https://twitter.com/kageri_haku)', inline: true },
      { name: 'Mirrativ', value: '[:ic_explore_white_48dp:](https://mirrativ.page.link/?link=https%3A%2F%2Fwww.mirrativ.com%2Fuser%2F100883588%3Fwhere%3Dprofile&apn=com.dena.mirrativ&ibi=com.dena.mirrativ&isi=1028944599&ius=mirrativ&st=%E5%BD%B1%E7%99%BD&sd=VERTEC%20community%E6%89%80%E5%B1%9E%E3%81%AEVtuber%E3%81%A7%E3%81%99%E3%80%82&si=https%3A%2F%2Fcdn.mirrativ.com%2Fmirrorman-prod%2Fimage%2Fprofile_image%2F13019d4f0a1a6e6cd12820e8fcfe77ad590d203d4df0ded31f05ec789679ad7a_m.jpeg%3F1659886333)[here](https://mirrativ.page.link/?link=https%3A%2F%2Fwww.mirrativ.com%2Fuser%2F100883588%3Fwhere%3Dprofile&apn=com.dena.mirrativ&ibi=com.dena.mirrativ&isi=1028944599&ius=mirrativ&st=%E5%BD%B1%E7%99%BD&sd=VERTEC%20community%E6%89%80%E5%B1%9E%E3%81%AEVtuber%E3%81%A7%E3%81%99%E3%80%82&si=https%3A%2F%2Fcdn.mirrativ.com%2Fmirrorman-prod%2Fimage%2Fprofile_image%2F13019d4f0a1a6e6cd12820e8fcfe77ad590d203d4df0ded31f05ec789679ad7a_m.jpeg%3F1659886333)', inline: true })
      .setFooter({ text: 'ããã ã¯ã Vtuber M 19 0113', iconURL: 'https://cdn.discordapp.com/emojis/1046023071062040616.webp?size=96&quality=lossless' });
      client.channels.cache.get('ãã­ãã£ã¼ã«CHID').send({ "embeds": [profileEmbed] });
      console.log("send profile done");
    }})

    // .setColor(0x99FFFF)
    // .setTitle('æç¬:butterfly:â¨')
    // .setDescription('2008å¹´ã­ãµã³ã¼ã«ã¹ã¸åèº«æ¸¡ç±³ããã®å¾ãå¨ç±³ãã¨ã¼ã­ãããä¸­æ±ãæ±åã¢ã¸ã¢ãå¤ªé½ç³»åå¤ãæããªãããåºèªã®è¬ãæããã«ãã¹ããåå°ã§UMAæç²ãã­ã¸ã§ã¯ããæ°å¤ãææãããå¸°å½å¾ãä»®æ³ç©ºéã®å­å¨ã«æéãåãããã¨ã«ãããã°ã«ã¼ãè¨­ç«ãæ±ºæããã2022å¹´ãããã¼ãã£ã«ã©ã¤ãã¼ã°ã«ã¼ããã¦ãªã·ã¹ããªã¼ããææãããããã¤ã³ã¿ã¼ãããã®ãã¹ã¦ãç§ã®æã«ãããã¸ã§ã³ã«æ²ããåæ§ããµããã©ã¤ãã¼ã»ã¯ãªã¨ã¤ã¿ã¼ã¨å±ã«ãã¦ãªããªãã®ãããªãçºå±ãä¼ã¦ããåææã®æåãã³ãã¥ããã£ã§ç£¨ãããå¤æ§ãªææ§ã§ã°ã«ã¼ããå°ãå­å¨ã')
    // .setThumbnail('https://cdn.discordapp.com/attachments/993825189416665118/1005677988815323166/9988.jpg')
    // .addFields(
    //   {"name":"YouTube","value":"[:ic_explore_white_48dp:](https://www.youtube.com/channel/UCliZ7CIZnFZ5b52m5WhKy8A)[here](https://www.youtube.com/channel/UCliZ7CIZnFZ5b52m5WhKy8A)", inline: true},
    //   { name: 'Twitter', value: '[:ic_explore_white_48dp:](https://twitter.com/ulyfly_v)[here](https://twitter.com/ulyfly_v)', inline: true },
    // .setFooter({ text: 'ç¤¾é·', iconURL: 'https://cdn.discordapp.com/emojis/1046023071062040616.webp?size=96&quality=lossless' });      
    
    // .setColor(0x#4F3240)
    // .setTitle('CAFEDEADâð°ï¸')
    // .setDescription('å¯ãéãæããã§éã³ããã')
    // .setThumbnail('https://cdn.discordapp.com/attachments/993825189416665118/1046050905692323881/AMkq2N_2.jpg')
    // .addFields(
    //   {"name":"YouTube","value":"[:ic_explore_white_48dp:](https://www.youtube.com/channel/UCV8GoEPab6VfiEx6Pd8IEnQ)[here](https://www.youtube.com/channel/UCV8GoEPab6VfiEx6Pd8IEnQ)", inline: true},
    //   { name: 'Twitter', value: '[:ic_explore_white_48dp:](https://twitter.com/cafedead_v)[here](https://twitter.com/cafedead_v)', inline: true },
    // .setFooter({ text: 'ããµãã§ã£ã© éå¶ åç»ç·¨é M 22 0222 #CAFELIVE', iconURL: 'https://cdn.discordapp.com/attachments/993825189416665118/1041404121896456232/ic_assignment_ind_white_48dp.png' });      
  

// role
  if(command === 'role'){
    client.channels.cache.get('ã¦ã¼ã¶è¨­å®ã®CHID').send();
  }

  :ic_reorder_white_48dp:ã¿ã¤ã
  :dog:@Partner : é©åº¦ã«æ´»åãã
  :cat:@Guest : èº«è»½ã«æ´»ç¨ãã
  :rabbit:@Listener : æ°æ¥½ã«éãã
  
  :ic_reorder_white_48dp:ã­ã¼ã«
  :star2:@Vtuber
  :art:@çµµå¸«
  :scissors:@åç»ç·¨é
  :ice_cube:@3Dãã¶ã¤ãã¼
  :radioactive:@ã°ã©ãã£ãã«ã¼
  :dvd:@æ­ãæ
  :parking:@ãã«ã­P
  :musical_keyboard:@ä½æ²
  :leaves:@ä½è©
  
  :ic_reorder_white_48dp:ã¹ãã¼ã¿ã¹
  :revolving_hearts:@ã³ã©ãOK
  :axe:@å¸OK
  :vibration_mode:@ãªã¯ã¨ã¹ãOK
  :mobile_phone_off:@ãªã¯ã¨ã¹ãNG
  
  :ic_reorder_white_48dp:ããã¸
  :beginner:@åå¿è
  :balloon:@ã¨ã³ã¸ã§ã¤å¢
  :crossed_swords:@ã¬ãå¢
  :canned_food:@1000subscriber
  :pretzel:@500subscriber
  :candy:@200subscriber
  :doughnut:@4000follower 
  :salad:@3000follower
  :shaved_ice:@2000follower
  
  :ic_reorder_white_48dp:ã¢ã¯ã»ã¹æ¨©é
  :gear:@botOP : #ðã³ã³ã½ã¼ã«
  :warning:@R18 : #ðnsfw
  :unlock:@Inspector : éå¶ã¨ã¢ã¼ã«ã¤ã
  
  !cembed #ðªªã¦ã¼ã¶è¨­å®
  {"description":"[Googleãã©ã¼ã ](https://docs.google.com/forms/d/e/1FAIpQLSdCTWLxsU0ezwpmfBimHY89WL7x7oGBeWu4D3OLe9SnRZQgPg/viewform?usp=pp_url&entry.1151304886=%E4%BE%8B%0A%E9%85%8D%E4%BF%A1:%23%0A%E3%83%95%E3%82%A1%E3%83%B3%E3%82%A2%E3%83%BC%E3%83%88:%23&entry.692858119=%E9%85%8D%E4%BF%A1&entry.941053599=%E5%90%AB%E3%81%BE%E3%81%AA%E3%81%84&entry.1371169874=%E5%90%AB%E3%81%BE%E3%81%AA%E3%81%84&entry.1771506502=%E5%90%AB%E3%81%BE%E3%81%AA%E3%81%84&entry.1453325687=%E5%90%AB%E3%81%BE%E3%81%AA%E3%81%84&entry.579253767=%E5%90%AB%E3%81%BE%E3%81%AA%E3%81%84&entry.674291266=%E5%90%AB%E3%81%BE%E3%81%AA%E3%81%84)ã§<#993097895928668161>ãä½ã","color":10092543}
  
  !cembed #ðªªã¦ã¼ã¶è¨­å®
  {"description":"
  :ic_label_white_48dp:[ã¿ã¤ã](https://discord.com/channels/960448632233005096/999686684276969632/1047066700887117884)
  :ic_label_white_48dp:[ã­ã¼ã«](https://discord.com/channels/960448632233005096/999686684276969632/1047066759829667890)
  :ic_label_white_48dp:[ã¹ãã¼ã¿ã¹](https://discord.com/channels/960448632233005096/999686684276969632/1047066789470818334)
  :ic_label_white_48dp:[ããã¸](https://discord.com/channels/960448632233005096/999686684276969632/1047066854205694003)
  :ic_label_white_48dp:[ã¢ã¯ã»ã¹æ¨©é](https://discord.com/channels/960448632233005096/999686684276969632/1047066908857479199)
  :ic_label_white_48dp:[ãã­ãã£ã¼ã«ä½æ](https://discord.com/channels/960448632233005096/999686684276969632/1047066987534221342)",
  "color":10092543}

  !rr addmany #ðªªã¦ã¼ã¶è¨­å® 1047066700887117884
  :dog: @Partner
  :cat: @Guest
  :rabbit: @Listener
  
  !rr addmany #ðªªã¦ã¼ã¶è¨­å® 1047066759829667890
  :star2: @Vtuber
  :art: @çµµå¸«
  :scissors: @åç»ç·¨é
  :ice_cube: @3Dãã¶ã¤ãã¼
  :radioactive: @ã°ã©ãã£ãã«ã¼
  :dvd: @æ­ãæ
  :parking: @ãã«ã­P
  :musical_keyboard: @ä½æ²
  :leaves: @ä½è©
  
  !rr addmany #ðªªã¦ã¼ã¶è¨­å® 1047066789470818334
  :revolving_hearts: @ã³ã©ãOK
  :axe: @å¸OK
  :vibration_mode: @ãªã¯ã¨ã¹ãOK
  :mobile_phone_off: @ãªã¯ã¨ã¹ãNG
  
  !rr addmany #ðªªã¦ã¼ã¶è¨­å® 1047066854205694003
  :beginner: @åå¿è
  :balloon: @ã¨ã³ã¸ã§ã¤å¢
  :crossed_swords: @ã¬ãå¢
  :canned_food: @1000subscriber
  :pretzel: @500subscriber
  :candy: @200subscriber
  :salad: @4000follower
  :shaved_ice: @3000follower
  :egg: @2000follower
  

  
  !rr addmany #ðªªã¦ã¼ã¶è¨­å® 1047066908857479199
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
//   "username": "Qiitaãã",
//   "avatar_url": "https://github.com/qiita.png",
//   "content": "ãªã¹ã¹ã¡ã®è¨äºã§ãï¼",
//   "embeds": [
//     {
//       "title": "Markdownè¨æ³ ãã¼ãã·ã¼ã",
//       "description": "Markdownè¨æ³ã®ãã¼ãã·ã¼ãã§ããæ¬ãã¼ã¸ã§ã¯Qiitaã§ä½¿ç¨å¯è½ãªMarkdownã®ã¿æ²è¼ãã¦ãããããä¸é¨åæã¨ç°ãªãã¾ããMarkdownã®åæã«ã¤ãã¦ã¯ãDaring Fireball: Markdown Syntax Documentationããè¦§ä¸ããã...",
//       "url": "https://qiita.com/Qiita/items/c686397e4a0f4f11683d",
//       "timestamp":"2018-04-09T00:00:00+09:00",
//       "color": 5620992,
//       "footer": {
//         "text": "Â© 2011-2018 Increments Inc.",
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
//           "name": ":thumbsup:ããã­",
//           "value": "6353",
//           "inline":true
//         },
//         {
//           "name": ":file_folder:ã¹ããã¯",
//           "value": "999",
//           "inline":true
//         },
//         {
//           "name": ":bookmark_tabs:ã¿ã°",
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
// !role color ä½æ² #DFFF69
// !rr color test 1043888352656633886 #aaaaaa
// !embed 99ffff Index | Contents
