const SlackBot = require('slackbots');
const axios = require('axios');

const bot = new SlackBot({
    token: 'xoxb-1279110960401-1266545820914-qqbqJvffPx3MJcAhn3YoCRgJ',
    name: 'firstbot'
});

bot.on('start', () => {
    const params = {
        icon_emoji: ':+1:'
    }

    bot.postMessageToChannel(
        'general',
        'Hello PEOPLEEEEEE',
        params
    );
});
