/*CMD
  command: delete-order
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

const orderOwner = params;
const admin = 469750202;
const permittedList = [orderOwner, admin];
if (permittedList.includes(request.from.id)) {
  Api.deleteMessage({
    chat_id: request.chat.id,
    message_id: request.message.message_id,
  });
} else {
  Api.answerCallbackQuery({
    callback_query_id: request.id,
    text: "Siz sorovni yopishga haqdor emassiz, yolovchi yoki admindan sorang",
    show_alert: true,
  });
}
