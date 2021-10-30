const Electron = require("electron");

const template = [
  {
    label: "Edit",
    submenu: [
      { role: "undo" },
      { role: "redo" },
      { type: "separator" },
      { role: "cut" },
      { role: "copy" },
      { role: "paste" },
      { role: "pasteandmatchstyle" },
      { role: "delete" },
      { role: "selectall" },
    ],
  },
  {
    label: "Flowers",
    submenu: [
      {
        label: "Roses",
        submenu: [
          {
            label: "Red",
          },
          {
            type: "separator",
          },
          {
            label: "White",
          },
        ],
      },
      {
        type: "separator",
      },
      {
        label: "Lotuses",
        click: () => {
          console.log("Lotus Menu clicked");
        },
      },
      {
        type: "separator",
      },
      {
        label: "Jasmins",
      },
    ],
  },
  {
    label: "Help",
    submenu: [
      {
        label: "About",
        accelerator: "CmdOrCtrl + Shift + H",
        click: () => Electron.shell.openExternal("http://electron.atom.io"),
      },
    ],
  },
];
const menu = Electron.Menu.buildFromTemplate(template);
Electron.Menu.setApplicationMenu(menu);
