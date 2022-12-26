/*CMD
  command: /start
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

if (params && params.startsWith("l")) {
  const [longitude, latitude] = params.slice(1).split("-");
  Bot.run({ command: `/location ${longitude} ${latitude}` });
}
if (params && params.startsWith("ph")) {
  const [first_name, phone_number] = params.slice(2).split("-");
  Bot.run({ command: `/contact ${first_name} ${phone_number}` });
} else if (params && params.startsWith("close")) {
  const requestOwnerID = params.slice(5);
  const GROUP_ID = -1001861709110;
  const ADMIN_ID = 469750202;

  if ([ADMIN_ID, requestOwnerID].includes(request.from.id)) {
    Api.sendMessage({
      chat_id: GROUP_ID,
      text: `✅${Libs.commonLib.getLinkFor(
        user
      )} -ning so'rovi yopildi, rahmat!`,
      parse_mode: "markdown",
    });
    Api.deleteMessage({
      message_id: request.message.message_id,
    });
  } else {
    Api.sendMessage({
      text: "Siz sorovni yopishga haqdor emassiz, yolovchi yoki admindan sorang",
    });
  }
} else {
  Bot.run({ command: "ask-where-from" });
}
