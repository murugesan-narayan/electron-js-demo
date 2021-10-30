const { BrowserWindow } = require("electron");
const ipc = require("electron").ipcMain;

ipc.on("open-new-window", (event, message) => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: require("path").join(__dirname, "preload.js"),
    },
  });
  win.loadURL(`file://${__dirname}/new-win-index.html`);
  win.webContents.openDevTools();
});

ipc.on("open-new-color-window", (event, message) => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    maxWidth: 900,
    maxHeight: 700,
    backgroundColor: "#2e8c29",
  });
});

ipc.on("open-new-modal-window", (event, message) => {
  const win = new BrowserWindow({
    show: false,
    modal: true,
    parent: BrowserWindow.getFocusedWindow(),
  });
  win.loadURL("https://github.com");
  win.once("ready-to-show", () => {
    win.show();
  });
});

ipc.on("open-new-widget-window", (event, message) => {
  const win = new BrowserWindow({
    frame: false,
    show: false,
    height: 150,
    width: 500,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: require("path").join(__dirname, "preload.js"),
    },
  });
  win.loadURL(`file://${__dirname}/widget/new-widget-index.html`);
  win.once("ready-to-show", () => {
    win.show();
  });
  //win.webContents.openDevTools();
});
