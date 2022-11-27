/*CMD
  command: amount
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: ❓Nechi kishi
  keyboard: 1,2,3,4
  aliases: 
CMD*/

User.setProperty('amount', message, 'number');
Api.sendMessage({
  text: `${message} kishilik joy, soat nechida ketamiz`,
  reply_markup: {
    keyboard: [
      [{text: '🚨Hozir'}, {text: '🚀Srochno'}, {text: '🧳Tayor'}],
      [
        {
          text: '00:00 - 02:00'
        },
        {
          text: '02:00 - 04:00'
        },
        {
          text: '04:00 - 06:00'
        },
        {
          text: '06:00 - 08:00'
        },
      ],
      [
        {
          text: '08:00 - 10:00'
        },
        {
          text: '10:00 - 12:00'
        },
        {
          text: '12:00 - 14:00'
        },
        {
          text: '14:00 - 16:00'
        },
      ],
      [
        {
          text: '16:00 - 18:00'
        },
        {
          text: '18:00 - 20:00'
        },
        {
          text: '20:00 - 22:00'
        },
        {
          text: '22:00 - 00:00'
        },
      ],
    ],
    resize_keyboard: true
  }
});
Bot.run({command: 'time'});
