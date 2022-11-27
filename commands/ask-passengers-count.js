/*CMD
  command: ask-passengers-count
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: ❓Nechi kishi
  keyboard: 1,2,3,4,\n🔙Boshqatdan
  aliases: 
CMD*/

const { createFromText } = Libs.ReplyMarkupHelper.keyboardFactory;
const keyboard = [
  ["🚀Srochno", "🧳Tayor, srochnomas"],
  ["00:00 - 02:00", "02:00 - 04:00", "04:00 - 06:00", "06:00 - 08:00"],
  ["08:00 - 10:00", "10:00 - 12:00", "12:00 - 14:00", "14:00 - 16:00"],
  ["16:00 - 18:00", "18:00 - 20:00", "20:00 - 22:00", "22:00 - 00:00"],
  ["🔙Boshqatdan"],
];
const passengersCount = message;

User.setProperty("passengersCount", passengersCount, "number");
Api.sendMessage({
  text: `${passengersCount} kishilik joy, soat nechida ketamiz`,
  reply_markup: createFromText(keyboard),
});
Bot.run({ command: "wait-time" });
