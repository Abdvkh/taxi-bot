/*CMD
  command: where
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: ❓Qayerdan
  keyboard: Toshkentdan -> Angrenga🏞, Angrendan -> Toshkentga🏙\n, Angrendan(Tuda-Obratno)🔁, Toshkentdan(Tuda-Obratno)🔁
  aliases: 🔙boshqatdan, 🙋‍♂️taksi kerak, 🙋‍♂️taksi kerak!
CMD*/

User.setProperty('where', message, 'string');
Bot.sendMessage('🚀Ketdik');
Api.sendMessage({
  text: '❓Qayerdasiz',
  reply_markup: {
    keyboard: [
      [ { text: '📍Joyimni(lokatsiya) jonatish', request_location: true } ]
    ],
    resize_keyboard: true
  }
});  
Bot.run({command: 'location'});
