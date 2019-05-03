const Discord = require('discord.js')
const client = new Discord.Client()
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.on('message', msg => {
  if (msg.content === 'Dormammu, je suis venu marchander') {
    msg.reply('Tu es venu mourir !')
  }
})
client.login('NTczOTA1MDcyMTk1MzcxMDUx.XMyg3A.gH2_2qOKPYWWozHMxXS294zy2ds')