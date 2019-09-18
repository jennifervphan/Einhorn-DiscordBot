const path = require('path')

function requireFolder(commandSystem, subFolder) {
  require("fs").readdirSync(path.join(__dirname, subFolder)).forEach(function(file) {
    if(!file.endsWith(".js")) {
      requireFolder(commandSystem, path.join(subFolder, file));
      return;
    }
    if(file === 'index.js') return;
    console.log(file)
    require("./" + (subFolder ? subFolder + "/" : "") + file)(commandSystem);
  });
}

// automatically register all commands from the files in the commands folder
module.exports = commandSystem => {
  requireFolder(commandSystem, '');
}