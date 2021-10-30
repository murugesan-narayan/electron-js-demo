const { app, Tray, Menu, nativeImage } = require("electron");
const path = require("path");

let tray = null;

//app.whenReady().then(() => {
app.on("ready", () => {
  //const icon = nativeImage.createFromPath(path.join(__dirname, "logo.png"));
  tray = new Tray(path.join(__dirname, "logo.png"));

  const contextMenu = Menu.buildFromTemplate([
    {
      label: "Volume",
      submenu: [
        { label: "Low", type: "radio", checked: true },
        { label: "High", type: "radio" },
      ],
    },
    { label: "Mute", type: "checkbox" },
    { label: "App", role: "appMenu" },
  ]);

  tray.setContextMenu(contextMenu);
  tray.setToolTip("Electron Tray App");
  tray.setTitle("Electron Tray App Title");
});
