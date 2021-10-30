const electron = require("electron");
const { app, BrowserWindow, globalShortcut } = electron;

const path = require("path");

function createWindow() {
  //we can also create multiple window with the below code at the starting itself,
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, "preload.js"),
    },
  });
  win.loadURL(`file://${__dirname}/index-crud.html`);
  //win.webContents.openDevTools();
  // win.webContents.on("context-menu", (events, params) => {
  //   ctxMenu.popup(win, params.x, params.y);
  // });
  //globalShortcut.register("Alt+1", () => win.show());
}

app.whenReady().then(() => {
  createWindow();
  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

//app.on("will-quit", () => globalShortcut.unregisterAll());
