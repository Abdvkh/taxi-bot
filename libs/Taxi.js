class Order {
  constructor({ fromUser, whereFrom, passengersCount, time, contactNumber }) {
    this.fromUser = fromUser;
    this.whereFrom = whereFrom;
    this.passengersCount = passengersCount;
    this.time = time;
    this.contactNumber = contactNumber;
  }

  toString() {
    const userLink = Libs.commonLib.getLinkFor(this.fromUser);
    const contact = `+${this.contactNumber.replace("+", "").slice(0, 8)}xxxx`;

    return `*Kimdan:* ${userLink}\n\n📍*Qayerdan:* ${this.whereFrom}\n👥*Odam soni:* ${this.passengersCount} kishi\n🕰*Vaqti:* ${this.time}\n\n📞*Raqam:* ${contact}`;
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
