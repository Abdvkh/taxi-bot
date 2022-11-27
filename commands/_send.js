/*CMD
  command: /send
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: ✅Qabul qilindi, javob kuting
  keyboard: 🙋‍♂️Taksi kerak!
  aliases: 📤jonatish
CMD*/

const where = User.getProperty('where');
const location = User.getProperty('location');
const time = User.getProperty('time');
const amount = User.getProperty('amount');
const contact = User.getProperty('contact');
const admin = 469750202;
const group = -1001861709110;
const body = {
  text: `*Kimdan:* ${Libs.commonLib.getLinkFor(user)}\n\n📍*Qayerdan:* ${where}\n*Soni:* ${amount}\n🕰*Vaqti:* ${time}\n\n📞*Raqam:* +${contact.phone_number.replace('+', '').slice(0, 8)}xxxx`,
  parse_mode: 'Markdown',
  reply_markup: {
    inline_keyboard: [
      [
        { text: 'Joyni olish', url: `https://t.me/angrentaxibot?start=l${location.longitude.toString().replace(".","_")}-${location.latitude.toString().replace(".","_")}` }
      ],
      [
        { text: 'Raqamni olish', url: `https://t.me/angrentaxibot?start=ph${contact.first_name}-${contact.phone_number}` }
      ]
    ]
  }
};


Api.sendMessage({chat_id: admin, ...body});
Api.sendMessage({chat_id: group, ...body});
Api.sendMessage(body);

