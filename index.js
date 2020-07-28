const SlackBot = require('slackbots');
const axios = require('axios');

const bot = new SlackBot({
    token: 'xoxb-1279110960401-1266545820914-QkifWHfxIjssa0GOyxcPeplw',
    name: 'firstbot'
});

bot.on('start', () => {
    const params = {
        icon_emoji: ':+1:'
    }

    bot.postMessageToChannel(
        'bottest',
        'Hello PEOPLEEEEEE',
        params
    );
});
