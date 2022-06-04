/* Copyright (C) 2022 Sourav KL11.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Raganork MD - Sourav KL11
*/ 
const {Module} = require('../main');
const {SUDO} = require('../config');
const Heroku = require('heroku-client');
const heroku = new Heroku({token: process.env.HEROKU_API_KEY});
const baseURI = '/apps/' + process.env.HEROKU_APP_NAME;
Module({pattern: 'sudo ?(.*)', fromMe: true, desc: "Sets sudo"}, (async (m,mm) => { 
var newSudo = ( m.reply_message ? m.reply_message.jid : '' || m.mention[0] || mm[1]).split("@")[0]
if (!newSudo) return await m.sendReply("*Need reply/mention/number*")
var setSudo = (SUDO+","+newSudo).replace(/,,/g,"");
setSudo = setSudo.startsWith(",")?setSudo.replace(",",""):setSudo
await m.sendReply('```UPDATED SUDO: ```'+setSudo)
await m.sendReply('```BOT RESTARTING```')
await heroku.patch(baseURI + '/config-vars', {body: { "SUDO": setSudo}}).then(async (app) => {
      });
}));
Module({pattern: 'delsudo ?(.*)', fromMe: true, desc: "Sets sudo"}, (async (m,mm) => { 
var newSudo = ( m.reply_message ? m.reply_message.jid : '' || m.mention[0] || mm[1]).split("@")[0]
if (!newSudo) return await m.sendReply("*Need reply/mention/number*")
var setSudo = SUDO.replace(newSudo,"").replace(/,,/g,"");
setSudo = setSudo.startsWith(",")?setSudo.replace(",",""):setSudo
await m.sendReply('```UPDATED SUDO: ```'+setSudo)
await m.sendReply('```BOT RESTARTING```')
await heroku.patch(baseURI + '/config-vars', {body: { "SUDO": setSudo}}).then(async (app) => {
});
}));
