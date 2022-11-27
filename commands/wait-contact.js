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
const phoneNumber = (contact ? contact.phone_number : message).replace("+", "");

if (!phoneNumber.match("998[0-9]{9}")) {
  const {
    create: createKeyboard,
    RequestContactButton,
    Button,
  } = Libs.ReplyMarkupHelper.keyboardFactory;
  const keyboard = [
    [RequestContactButton("📞Raqamimni jonatish")],
    [Button("🔙Boshqatdan")],
  ];

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
    phoneNumber: phoneNumber,
  });

  User.setProperty(
    "contact",
    { first_name: user.first_name, phone_number: phoneNumber },
    "json"
  );
  Bot.sendMessage("✅Raqamingiz saqlandi");
  Bot.sendMessage(order.toString());
  Bot.sendKeyboard(
    "📤Jonatish, 🔙Boshqatdan",
    "☑️Malumotlaringizni tekshiring, '📤Jonatish' tugmasini bosing❗️"
  );
}
