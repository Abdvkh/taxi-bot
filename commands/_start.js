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


if (params && params.startsWith('l')) {
  const [ longitude, latitude ] = params.slice(1).split('-');
  Bot.run({command: `/location ${longitude} ${latitude}`});
} if (params && params.startsWith('ph')) {
  const [ first_name, phone_number ] = params.slice(2).split('-');
  Bot.run({command: `/contact ${first_name.replace(' ', '')} ${phone_number}`});
} else {
  Bot.run({command: 'where'});
}
