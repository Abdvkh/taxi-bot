/*CMD
  command: wait-time
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

const { create, RequestContactButton } = Libs.ReplyMarkupHelper.keyboardFactory;
const keyboard = [[RequestContactButton("📞Raqamimni jonatish")]];

User.setProperty("time", message, "string");
Bot.sendMessage("✅Joyingiz saqlandi");
Api.sendMessage({
  text: "🏃‍♂️Oz qoldi, endi telefon raqamingizni jonating yoki tering",
  reply_markup: create(keyboard),
});
Bot.run({ command: "wait-contact" });