/*CMD
  command: wait-contact
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

const contact = request.contact;
const phoneNumber = contact.phone_number ?? message;

if (!phoneNumber.match(/\+?998[0-9]{9}/gm)) {
  const { create: createKeyboard, RequestContactButton } =
    Libs.ReplyMarkupHelper.keyboardFactory;
  const keyboard = [[RequestContactButton("📞Raqamimni jonatish")]];

  Api.sendMessage({
    text: "⛔️Telefon raqamingizni boshqatdan jonating yoki tering, o'zbekiston raqamlari qabul qilinadi",
    reply_markup: createKeyboard(keyboard),
  });
  Bot.run({ command: "wait-contact" });
  return;
} else {
  const { create: createOrder } = Libs.Taxi.order;
  const order = createOrder({
    fromUser: user,
    whereFrom: User.getProperty("whereFrom"),
    passengersCount: User.getProperty("passengersCount"),
    time: User.getProperty("time"),
    contactNumber: phoneNumber,
  });

  User.setProperty("contact", contact, "JSON");
  Bot.sendMessage("✅Raqamingiz saqlandi");
  Bot.sendMessage(order.toString());
  Bot.sendKeyboard(
    "📤Jonatish, 🔙Boshqatdan",
    "☑️Malumotlaringizni tekshiring, '📤Jonatish' tugmasini bosing❗️"
  );
}
