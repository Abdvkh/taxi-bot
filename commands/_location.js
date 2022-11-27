/*CMD
  command: /location
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (params) {
  const [longitude, latitude] = params.split(" ");
  Api.sendLocation({
    longitude: longitude.replace("_", "."),
    latitude: latitude.replace("_", "."),
  });
}
