/*CMD
  command: onGitPush
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

Bot.sendMessage("Start code importing...");

// Bot.exportGit also possible
Bot.importGit({
  branch: "master", // it is master branch
  success: "onGitImportCompleted",
});
