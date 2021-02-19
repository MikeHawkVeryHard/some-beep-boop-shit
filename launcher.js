const Discord = require('discord.js');
const buggie = new Discord.Client();
const chalk = require('chalk')
const colors = require('colors')
const fs = require('fs')
const moment = require('moment')
require('dotenv').config();
const request = require('request')
buggie.output = (message, color = 'white') => {
    return console.log(chalk.hex('7e8b86')('[') + chalk.hex('dcfbee')(moment(Date.now()).format('h:mm:ss')) + chalk.hex('7e8b86')(']') + chalk.gray(` ${color ? colors[color]('[Debug] '+message) : message}`))
}
buggie.accept = (user, callback) => {
    request.put(`https://discord.com/api/v8/users/@me/relationships/${user.id}`, {
        json: true,
        headers: {
            "authorization": `${process.env.buggieauth}`,
            'user-agent': 'Mozilla/5.0 (Linux; U; Android 2.2) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1'
        },
        body: {}
    }, (e, res, body) => {
        if(!res && !res.statusCode) return callback(false, null)
        if(res.statusCode !== 204) return callback(false, res.statusCode, body.message)
        return callback(true)
    })
}
buggie.rest.userAgentManager.userAgent = 'Mozilla/5.0 (Linux; U; Android 2.2) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1';
buggie.options.ws.properties = {
        $os: 'Android',
        $browser: 'Android',
        $device: 'Android',
};
global.buggie = buggie;
fs.readdir('Space/', (e, file) => {
    if(e) throw e;
    file.forEach(f => {
        const event = require(`./Space/${f}`);
        const eventName = f.split('.')[0];
        buggie.output(`Event module loaded => [${eventName.toUpperCase()}]`)
        buggie.on(eventName, (...args) => event.run(...args))
    })
})

buggie.login(process.env.buggieauth)