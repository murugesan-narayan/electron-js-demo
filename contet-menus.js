const { MenuItem } = require("electron");
const Electron = require("electron");

const ctxMenu = Electron.Menu();
ctxMenu.append(
  new MenuItem({
    label: "UserInfo",
    click: () => console.log("UserInfo contex clicked"),
  })
);

ctxMenu.append(new MenuItem({ role: "selectAll" }));

module.exports = { ctxMenu: ctxMenu };
