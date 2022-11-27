/*CMD
  command: contact
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

const contact = request.contact;
User.setProperty('contact', contact, 'JSON');

const where = User.getProperty('where');
const location = User.getProperty('location');
const time = User.getProperty('time');
const amount = User.getProperty('amount');

Bot.sendMessage('✅Raqamingiz saqlandi');
Bot.sendMessage(`*Kimdan:* ${Libs.commonLib.getLinkFor(user)}\n\n📍*Qayerdan:* ${where}\n*Soni:* ${amount}\n🕰*Vaqti:* ${time}\n\n📞*Raqam:* +${contact.phone_number.replace('+', '').slice(0, 8)}xxxx`);
Bot.sendKeyboard('📤Jonatish, 🔙Boshqatdan', '☑️Malumotlaringizni tekshiring');

