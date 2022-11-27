/*CMD
  command: time
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

User.setProperty('time', message, 'string');
Bot.sendMessage('✅Joyingiz saqlandi');
Api.sendMessage({
  text: '🏃‍♂️Oz qoldi, endi telefon raqamingizni jonating',
  reply_markup: {
    keyboard: [
      [ { text: '📞Raqamimni jonatish', request_contact: true } ]
    ],
    resize_keyboard: true
  }
});
Bot.run({command: 'contact'});
