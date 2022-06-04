const {Module} = require('../main')
const {AUDIO_DATA} = require('../config')
const {readFileSync} = require('fs');
const {skbuffer} = require('raganork-bot');
const {saveMessage} = require('./misc/saveMessage');
Module({pattern: 'forward ?(.*)', fromMe: true}, (async (message, match) => {
var savedFile = message.reply_message.text || await saveMessage(message.reply_message);
if (message.reply_message.image) var type = 'image' 
if (message.reply_message.video) var type = 'video' 
if (message.reply_message.audio) var type = 'audio' 
if (message.reply_message.sticker) var type = 'sticker' 
if (message.reply_message.text) var type = 'text' 
var msg = savedFile.startsWith("./temp") ? readFileSync(savedFile) : savedFile;
var jids = match[1].split(",") || [message.jid]
var image = await skbuffer(AUDIO_DATA.split(";")[2]);
jids.map(async (jid) => {
await message.client.sendMessage(jid, { [type]: msg,ptt: true },{quoted: {key : { participant : '0@s.whatsapp.net'}, message: {orderMessage: {itemCount : 9999999, status: 1, surface : 1, message: "Hello bro", orderTitle: "Hello bro", thumbnail: image, sellerJid: '0@s.whatsapp.net'}}} ,"contextInfo": { forwardingScore: 900, isForwarded: true, text: 'Text 1 here', sendEphemeral: true, externalAdReply:{title:"Hello bro",body:"Hello bro",mediaType:"2",thumbnail:image,mediaUrl:"https://www.youtube.com/watch?v=HHOBekWVsgY"}}})
}) }))
