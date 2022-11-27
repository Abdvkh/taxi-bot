/*CMD
  command: wait-location
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

User.setProperty("location", request.location, "json");
Bot.run({ command: "ask-passengers-count" });
