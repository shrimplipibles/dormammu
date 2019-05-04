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
client.login('NTc0MTI0OTQwMjkxMzQyMzc1.XM02tQ.rivvjdgWfhS7F8Tro0hfkJ5N2GY')
