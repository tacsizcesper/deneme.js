const Asena = require('../events');
const{MessageType} = require('@adiwajshing/baileys');


Asena.addCommand({pattern: 'deniyorum', fromMe: true}, (async (message, match) => {


    await message.sendMessage('Bu bir testtir!');
    await new Promise(r => setTimeout(r, 5));
    await message.sendMessage('Bu e!');
