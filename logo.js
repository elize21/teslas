const {Module} = require('../main')
const {MODE} = require('../config')
const {skbuffer} = require('raganork-bot');
var x = MODE == 'public'?false:true
var list = '```'+`Logo Maker List
Use: .logo_14 Text
1 - 11 : Calligraphy
12 - 13 : Beast
14 - 19 : Pubg
20 - 25 : RRR
26 - 27 : Free Fire
28 - 29 : India
30 - 32 : Avengers
33 - 34 : Pushpa
35 - 37 Master
38 - 44 IPL
45 : Dhoni
46 : Vijay`+'```'
Module({pattern: "logo list",fromMe: x,desc: "45 + Logo maker commands"}, async(message, match) => {
await message.sendReply(list);
})
Module({pattern: "logo_0 ?(.*)",fromMe: x,dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://api.zeks.me/api/lithgtext?apikey=souravkl11&text="+text
var image = await skbuffer(api_url);
await message.sendReply(image,'image');
})
Module({pattern: "logo_01 ?(.*)",fromMe: x,dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-api.vercel.app/api/logo/calligraphy?style=1&text="+text
var image = await skbuffer(api_url);
await message.sendReply(image,'image');
})
Module({pattern: "logo_02 ?(.*)",fromMe: x,dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-api.vercel.app/api/logo/calligraphy?style=2&text="+text
var image = await skbuffer(api_url);
await message.sendReply(image,'image');
})
Module({pattern: "logo_03 ?(.*)",fromMe: x,dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-api.vercel.app/api/logo/calligraphy?style=3&text="+text
var image = await skbuffer(api_url);
await message.sendReply(image,'image');
})
Module({pattern: "logo_04 ?(.*)",fromMe: x,dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-api.vercel.app/api/logo/calligraphy?style=4&text="+text
var image = await skbuffer(api_url);
await message.sendReply(image,'image');
})
Module({pattern: "logo_05 ?(.*)",fromMe: x}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-api.vercel.app/api/logo/calligraphy?style=5&text="+text
var image = await skbuffer(api_url);
await message.sendReply(image,'image');
})
Module({pattern: "logo_06 ?(.*)",fromMe: x,dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-api.vercel.app/api/logo/calligraphy?style=6&text="+text
var image = await skbuffer(api_url);
await message.sendReply(image,'image');
})
Module({pattern: "logo_07 ?(.*)",fromMe: x,dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-api.vercel.app/api/logo/calligraphy?style=7&text="+text
var image = await skbuffer(api_url);
await message.sendReply(image,'image');
})
Module({pattern: "logo_08 ?(.*)",fromMe: x,dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-api.vercel.app/api/logo/calligraphy?style=8&text="+text
var image = await skbuffer(api_url);
await message.sendReply(image,'image');
})
Module({pattern: "logo_09 ?(.*)",fromMe: x,dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-api.vercel.app/api/logo/calligraphy?style=9&text="+text
var image = await skbuffer(api_url);
await message.sendReply(image,'image');
})
Module({pattern: "logo_10 ?(.*)",fromMe: x,dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-api.vercel.app/api/logo/calligraphy?style=10&text="+text
var image = await skbuffer(api_url);
await message.sendReply(image,'image');
})
Module({pattern: "logo_11 ?(.*)",fromMe: x,dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-api.vercel.app/api/logo/calligraphy?style=11&text="+text
var image = await skbuffer(api_url);
await message.sendReply(image,'image');
})
Module({pattern: "logo_12 ?(.*)",fromMe: x,dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-api.vercel.app/api/logo/beast?style=1&text="+text
var image = await skbuffer(api_url);
await message.sendReply(image,'image');
})
Module({pattern: "logo_13 ?(.*)",fromMe: x,dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-api.vercel.app/api/logo/beast?style=2&text="+text
var image = await skbuffer(api_url);
await message.sendReply(image,'image');
})
Module({pattern: "logo_14 ?(.*)",fromMe: x,dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-api.vercel.app/api/logo/pubg?style=1&text="+text
var image = await skbuffer(api_url);
await message.sendReply(image,'image');
})
Module({pattern: "logo_15 ?(.*)",fromMe: x,dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-api.vercel.app/api/logo/pubg?style=2&text="+text
var image = await skbuffer(api_url);
await message.sendReply(image,'image');
})
Module({pattern: "logo_16 ?(.*)",fromMe: x,dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-api.vercel.app/api/logo/pubg?style=3&text="+text
var image = await skbuffer(api_url);
await message.sendReply(image,'image');
})
Module({pattern: "logo_17 ?(.*)",fromMe: x,dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-api.vercel.app/api/logo/pubg?style=4&text="+text
var image = await skbuffer(api_url);
await message.sendReply(image,'image');
})
Module({pattern: "logo_18 ?(.*)",fromMe: x,dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-api.vercel.app/api/logo/pubg?style=5&text="+text
var image = await skbuffer(api_url);
await message.sendReply(image,'image');
})
Module({pattern: "logo_19 ?(.*)",fromMe: x,dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-api.vercel.app/api/logo/pubg?style=6&text="+text
var image = await skbuffer(api_url);
await message.sendReply(image,'image');
})
Module({pattern: "logo_20 ?(.*)",fromMe: x,dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-api.vercel.app/api/logo/rrr?style=1&text="+text
var image = await skbuffer(api_url);
await message.sendReply(image,'image');
})
Module({pattern: "logo_21 ?(.*)",fromMe: x,dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-api.vercel.app/api/logo/rrr?style=2&text="+text
var image = await skbuffer(api_url);
await message.sendReply(image,'image');
})
Module({pattern: "logo_22 ?(.*)",fromMe: x,dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-api.vercel.app/api/logo/rrr?style=3&text="+text
var image = await skbuffer(api_url);
await message.sendReply(image,'image');
})
Module({pattern: "logo_23 ?(.*)",fromMe: x,dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-api.vercel.app/api/logo/rrr?style=4&text="+text
var image = await skbuffer(api_url);
await message.sendReply(image,'image');
})
Module({pattern: "logo_24 ?(.*)",fromMe: x,dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-api.vercel.app/api/logo/rrr?style=5&text="+text
var image = await skbuffer(api_url);
await message.sendReply(image,'image');
})
Module({pattern: "logo_25 ?(.*)",fromMe: x,dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-api.vercel.app/api/logo/rrr?style=6&text="+text
var image = await skbuffer(api_url);
await message.sendReply(image,'image');
})
Module({pattern: "logo_26 ?(.*)",fromMe: x,dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-api.vercel.app/api/logo/freefire?style=1&text="+text
var image = await skbuffer(api_url);
await message.sendReply(image,'image');
})
Module({pattern: "logo_27 ?(.*)",fromMe: x,dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-api.vercel.app/api/logo/freefire?style=2&text="+text
var image = await skbuffer(api_url);
await message.sendReply(image,'image');
})
Module({pattern: "logo_28 ?(.*)",fromMe: x,dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-api.vercel.app/api/logo/india?style=1&text="+text
var image = await skbuffer(api_url);
await message.sendReply(image,'image');
})
Module({pattern: "logo_29 ?(.*)",fromMe: x,dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-api.vercel.app/api/logo/india?style=2&text="+text
var image = await skbuffer(api_url);
await message.sendReply(image,'image');
})
Module({pattern: "logo_30 ?(.*)",fromMe: x,dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-api.vercel.app/api/logo/avengers?style=1&text="+text
var image = await skbuffer(api_url);
await message.sendReply(image,'image');
})
Module({pattern: "logo_31 ?(.*)",fromMe: x,dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-api.vercel.app/api/logo/avengers?style=2&text="+text
var image = await skbuffer(api_url);
await message.sendReply(image,'image');
})
Module({pattern: "logo_32 ?(.*)",fromMe: x,dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-api.vercel.app/api/logo/avengers?style=3&text="+text
var image = await skbuffer(api_url);
await message.sendReply(image,'image');
})
Module({pattern: "logo_33 ?(.*)",fromMe: x,dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-api.vercel.app/api/logo/pushpa?style=1&text="+text
var image = await skbuffer(api_url);
await message.sendReply(image,'image');
})
Module({pattern: "logo_34 ?(.*)",fromMe: x,dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-api.vercel.app/api/logo/pushpa?style=2&text="+text
var image = await skbuffer(api_url);
await message.sendReply(image,'image');
})
Module({pattern: "logo_35 ?(.*)",fromMe: x,dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-api.vercel.app/api/logo/master?style=1&text="+text
var image = await skbuffer(api_url);
await message.sendReply(image,'image');
})
Module({pattern: "logo_36 ?(.*)",fromMe: x,dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-api.vercel.app/api/logo/master?style=2&text="+text
var image = await skbuffer(api_url);
await message.sendReply(image,'image');
})
Module({pattern: "logo_37 ?(.*)",fromMe: x,dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-api.vercel.app/api/logo/master?style=3&text="+text
var image = await skbuffer(api_url);
await message.sendReply(image,'image');
})
Module({pattern: "logo_38 ?(.*)",fromMe: x,dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-api.vercel.app/api/logo/ipl?style=1&text="+text
var image = await skbuffer(api_url);
await message.sendReply(image,'image');
})
Module({pattern: "logo_39 ?(.*)",fromMe: x,dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-api.vercel.app/api/logo/ipl?style=2&text="+text
var image = await skbuffer(api_url);
await message.sendReply(image,'image');
})
Module({pattern: "logo_40 ?(.*)",fromMe: x,dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-api.vercel.app/api/logo/ipl?style=3&text="+text
var image = await skbuffer(api_url);
await message.sendReply(image,'image');
})
Module({pattern: "logo_41 ?(.*)",fromMe: x,dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-api.vercel.app/api/logo/ipl?style=4&text="+text
var image = await skbuffer(api_url);
await message.sendReply(image,'image');
})
Module({pattern: "logo_42 ?(.*)",fromMe: x,dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-api.vercel.app/api/logo/ipl?style=5&text="+text
var image = await skbuffer(api_url);
await message.sendReply(image,'image');
})
Module({pattern: "logo_43 ?(.*)",fromMe: x,dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-api.vercel.app/api/logo/ipl?style=6&text="+text
var image = await skbuffer(api_url);
await message.sendReply(image,'image');
})
Module({pattern: "logo_44 ?(.*)",fromMe: x,dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-api.vercel.app/api/logo/ipl?style=7&text="+text
var image = await skbuffer(api_url);
await message.sendReply(image,'image');
})
Module({pattern: "logo_45 ?(.*)",fromMe: x,dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-api.vercel.app/api/logo/dhoni?style=1&text="+text
var image = await skbuffer(api_url);
await message.sendReply(image,'image');
})
Module({pattern: "logo_46 ?(.*)",fromMe: x,dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-api.vercel.app/api/logo/thalapathy?style=1&text="+text
var image = await skbuffer(api_url);
await message.sendReply(image,'image');
})
