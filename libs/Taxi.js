class Order {
  constructor({ fromUser, whereFrom, passengersCount, time, phoneNumber }) {
    this.fromUser = fromUser;
    this.whereFrom = whereFrom;
    this.passengersCount = passengersCount;
    this.time = time;
    this.phoneNumber = phoneNumber;
  }

  toString() {
    const userLink = Libs.commonLib.getLinkFor(this.fromUser);
    const contact = `+${this.phoneNumber.replace("+", "").slice(0, 8)}xxxx`;

    return `*Kimdan:* ${userLink}\n\nš*Qayerdan:* ${this.whereFrom}\nš„*Odam soni:* ${this.passengersCount} kishi\nš°*Vaqti:* ${this.time}\n\nš*Raqam:* ${contact}`;
  }
}

function createOrder(options) {
  return new Order(options);
}

publish({
  order: {
    create: createOrder,
  },
});
