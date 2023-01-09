const pug = require("pug");
const path = require("path");
const fs = require("fs/promises");
const { cp } = require("fs");

async function renderPug(payload = null, pathToTemplate = getPathToRequire()) {
  const result = pug.renderFile(pathToTemplate, payload);
  // const pathFolder = path.dirname(pathToTemplate);
  const fileName = path.basename(pathToTemplate);
  const newFileName = fileName.replace(path.extname(fileName), ".html");

  await fs.writeFile(
    path.join(path.resolve(__dirname, "../"), "html", newFileName),
    result
  );
}

function getPathToRequire() {
  //Using the Error Stack we can know where the call is made from!
  const error = new Error();
  const stack = error.stack.split("\n");
  var filename;
  let url;
  for (let i = 1; i < stack.length; i++) {
    url = stack[i].split("(");
    if (url.length > 1) {
      url = url[1]?.split(":").slice(0, 2).join();
    } else {
      url = url[0]?.split(":").slice(0, 2).join();
    }
    filename = path.basename(url);
    if (filename != path.basename(__filename)) {
      break;
    }
  }

  var pugName = filename.replace(path.extname(url), ".pug");
  return path.join("./templates/", pugName);
}

module.exports = {
  renderPug,
  getPathToRequire,
};
