/*CMD
  command: location
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

User.setProperty('location', request.location, 'JSON');
Bot.run({command: 'amount'});
