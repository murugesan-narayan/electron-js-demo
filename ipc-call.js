const ipc = require("electron").ipcMain;

ipc.on("async-message-call-demo", function (event, message) {
  console.log(message);
  event.sender.send(
    "async-message-call-demo-reply",
    "Main process async reply."
  );
});

ipc.on("sync-message-call-demo", function (event, message) {
  console.log(message);
  event.returnValue = "Main process sync reply.";
});
