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

const { create: createOrder } = Libs.Taxi.order;
const { create: createKeyboard, Button } =
  Libs.ReplyMarkupHelper.inlineKeyboardFactory;

const { longitude, latitude } = User.getProperty("location");
const { first_name, phone_number } = User.getProperty("contact");

const admin = 469750202;
const group = -1001861709110;

const order = createOrder({
  fromUser: user,
  whereFrom: User.getProperty("whereFrom"),
  time: User.getProperty("time"),
  passengersCount: User.getProperty("passengersCount"),
  phoneNumber: phone_number,
});
const keyboard = [
  [Button("Joyni olish", { url: getLocationLink(longitude, latitude) })],
  [
    Button("Raqamni olish", {
      url: getPhoneNumberLink(first_name, phone_number),
    }),
  ],
];
const body = {
  text: order.toString(),
  parse_mode: "Markdown",
  reply_markup: createInlineKeyboard(keyboard),
};

Api.sendMessage({ chat_id: admin, ...body });
Api.sendMessage({ chat_id: group, ...body });
Api.sendMessage(body);

function getLocationLink(longitude, latitude) {
  const parsedLongitude = longitude.toString().replace(".", "_");
  const parsedLatitude = latitude.toString().replace(".", "_");

  return `https://t.me/angrentaxibot?start=l${parsedLongitude}-${parsedLatitude}`;
}

function getPhoneNumberLink(first_name, phone_number) {
  const parsedFirstName = first_name.replace(" ", "");

  return `https://t.me/angrentaxibot?start=ph${parsedFirstName}-${phone_number}`;
}
