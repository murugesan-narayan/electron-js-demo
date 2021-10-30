const fs = require("fs");
const path = require("path");

const btnCreate = document.getElementById("btnCreate");
const btnRead = document.getElementById("btnRead");
const btnDelete = document.getElementById("btnDelete");

const fileName = document.getElementById("fileName");

const fileContents = document.getElementById("fileContents");

const baseDir = path.join(__dirname, "Files");

btnCreate.addEventListener("click", () => {
  let file = path.join(baseDir, fileName.value);
  let contents = fileContents.value;
  fs.writeFile(file, contents, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("The file creation is successful.");
    }
  });
});

btnRead.addEventListener("click", () => {
  let file = path.join(baseDir, fileName.value);
  fs.readFile(file, (err, data) => {
    if (err) {
      fileContents.value = "";
      console.log(err);
    } else {
      fileContents.value = data;
      console.log("The file reading is successful.");
    }
  });
});

btnDelete.addEventListener("click", () => {
  let file = path.join(baseDir, fileName.value);
  fs.unlink(file, (err) => {
    if (err) {
      console.log(err);
    } else {
      fileContents.value = "";
      fileName.value = "";
      console.log("The file delete is successful.");
    }
  });
});
