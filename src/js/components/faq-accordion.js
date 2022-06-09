const { Accordion } = require("../functions/accordion");

document.querySelectorAll(".js-accordion").forEach((el) => {
  new Accordion(el);
});
