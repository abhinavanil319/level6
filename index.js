/* eslint-disable no-undef */
const app = require("./app");
app.listen(process.env.PORT || 3000, () => {
  console.log("started express server");
});
