/*CMD
  command: ask-where-from
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: ❓Qayerdan
  keyboard: Toshkentdan -> Angrenga🏞\n, Angrendan -> Toshkentga🏙\n, Angrendan(Borib-Kelish)🔁\n, Toshkentdan(Borib-Kelish)🔁
  aliases: 🔙boshqatdan, 🙋‍♂️taksi kerak, 🙋‍♂️taksi kerak!
CMD*/

const { create, RequestLocationButton } =
  Libs.ReplyMarkupHelper.keyboardFactory;
const keyboard = [[RequestLocationButton("📍Joyimni(lokatsiya) jonatish")]];

User.setProperty("whereFrom", message, "string");
Bot.sendMessage("🚀Ketdik");

Api.sendMessage({
  text: "❓Qayerdasiz(lokatsiya)",
  reply_markup: create(keyboard),
});
Bot.run({ command: "wait-location" });
