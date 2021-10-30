const { dialog } = require("electron");
const ipc = require("electron").ipcMain;

ipc.on("open-error-dialog", (event, message) => {
  dialog.showErrorBox(
    "Error",
    "Error occured while getting the data. Please try later or contact customer support."
  );
  event.sender.send(
    "opened-error-dialog-success",
    "Error window opened successfully"
  );
});
