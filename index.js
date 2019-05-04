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
client.login('NTc0MTI5MTU0NTc3MTM3NjY0.XM06ew.ctqKtDiBQzAOPfserXldhTxxo40')
