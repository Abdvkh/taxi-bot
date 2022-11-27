/*CMD
  command: /contact
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (params) {
  const [first_name, phone_number] = params.split(" ");

  Api.sendContact({
    first_name,
    phone_number,
  });
}
