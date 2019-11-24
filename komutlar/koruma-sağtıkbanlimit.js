const Discord = require('discord.js');
const db = require('quick.db')


exports.run = async(client, message, args) => {
  if(message.author.id !== message.guild.owner.user.id) return message.channel.send('Yeterli Yetkiye Sahip Görünmüyorsun! '+client.emojis.get('647760202875142154'))
  if (db.has(`premium_${message.guild.id}`) == false) {
    message.channel.send(`<@${message.author.id}> Maalesef Premium Süresi Bitmiştir. Hizmetimizden Memnun Olduysanız Tekrar Alabilirsiniz \`!premium\``)
  } else {
  
   if(!args[0] || isNaN(args[0])) return message.channel.send(`Ban limit sayısını belirtmelisin! (Özelliği devre dışı bırakmak isterseniz **0** yazmalısınız!)`);
  await db.set(`banlimit31_${message.guild.id}`, args[0])
  message.reply(`Ban Hassasiyeti **${args[0]}** Rakamına Ayarlanmıştır. Bu Rakamı Kimseyle Paylaşmayın
**ÖNEMLİ LÜTFEN OKUYUN**
!koruma Yazıp Kullanımını Detaylıca Öğreniniz Yoksa bir İşe Yaramaz!
`);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'koruma-banlimit',
  description: 'Ban limiti.',
  usage: 'banlimit',
  kategori: 'yetkili'
};