const { renderPug } = require("../lib/pugCreator");

const payload = {
  data: {
    name: "Simone",
  },
};
(async () => {
  renderPug(payload);
})();
