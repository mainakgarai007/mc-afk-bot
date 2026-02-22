const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'Skyroot_Sanctuary.aternos.me', // change this
  port: 49635,
  username: 'AFK_Bot_24x7',
  version: false
})

bot.on('spawn', () => {
  console.log("Bot joined server!")

  // Random movement every 30 sec
  setInterval(() => {
    const actions = ['forward', 'back', 'left', 'right', 'jump']
    const action = actions[Math.floor(Math.random() * actions.length)]

    bot.setControlState(action, true)

    setTimeout(() => {
      bot.setControlState(action, false)
    }, 2000)

  }, 30000)
})


// Auto Chat Response
bot.on('chat', (username, message) => {
  if (username === bot.username) return

  const msg = message.toLowerCase()

  if (msg.includes('hi') || msg.includes('hello')) {
    bot.chat('Yo 😎 I am online 24x7 mode!')
  }

  if (msg.includes('where')) {
    bot.chat('Chilling here protecting the server ⚡')
  }

  if (msg.includes('time')) {
    bot.chat('Time never sleeps. Neither do I.')
  }
})


// Auto Sleep at Night
bot.on('time', () => {
  if (bot.time.isNight) {
    const bed = bot.findBlock({
      matching: block => bot.isABed(block)
    })

    if (bed) {
      bot.sleep(bed).catch(() => {})
    }
  }
})
