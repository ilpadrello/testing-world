const { renderPug } = require("../lib/pugCreator");

const payload = {
  data: {
    name: "Simone",
  },
};
(async () => {
  renderPug("./templates/00_GETTING_STARTED.pug", payload);
})();
