console.log("From Index.js");

const new_win_btn = document.getElementById("openNewWindow");

new_win_btn.addEventListener("click", (event) => {
  window.ipcRenderer.send("open-new-window", "");
});

const new_color_win_btn = document.getElementById("openNewColorWindow");

new_color_win_btn.addEventListener("click", (event) => {
  window.ipcRenderer.send("open-new-color-window", "");
});

const new_modal_win_btn = document.getElementById("openNewModalWindow");

new_modal_win_btn.addEventListener("click", (event) => {
  window.ipcRenderer.send("open-new-modal-window", "");
});

const new_widget_btn = document.getElementById("openNewWidget");

new_widget_btn.addEventListener("click", (event) => {
  window.ipcRenderer.send("open-new-widget-window", "");
});

const show_err_btn = document.getElementById("openErrorDialog");

show_err_btn.addEventListener("click", (event) => {
  window.ipcRenderer.send("open-error-dialog", "");
});

window.ipcRenderer.on("opened-error-dialog-success", (event, message) => {
  console.log(message);
});

const async_ipc_call_btn = document.getElementById("asyncIpcCall");

async_ipc_call_btn.addEventListener("click", (event) => {
  console.log("before ipc call...");
  window.ipcRenderer.send(
    "async-message-call-demo",
    "This is from IPC Render for Async call"
  );
  console.log("After ipc call...");
});

window.ipcRenderer.on("async-message-call-demo-reply", (event, message) => {
  console.log(message);
});

const sync_ipc_call_btn = document.getElementById("syncIpcCall");

sync_ipc_call_btn.addEventListener("click", (event) => {
  console.log("before ipc call...");
  const resp = window.ipcRenderer.sendSync(
    "sync-message-call-demo",
    "This is from IPC Render for Sync call"
  );
  console.log(resp);
  console.log("After ipc call...");
});

const open_main_folder_btn = document.getElementById("openMainFolder");
const shell = require("electron").shell;
open_main_folder_btn.addEventListener("click", (event) =>
  shell.showItemInFolder("C:\\Muru\\source\\electron-js-demo\\main.js")
);

const open_happiness_img_btn = document.getElementById("openHappinessImage");
open_happiness_img_btn.addEventListener("click", (event) =>
  shell.openPath("C:\\Muru\\source\\electron-js-demo\\Happiness.jfif")
);

//shell.openExternal('www.google.com')
