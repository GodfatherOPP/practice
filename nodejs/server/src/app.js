const path = require("path");
const express = require("express");

const app = express();
// const PublicDirPath = path.join(__dirname, "../public/");
// // app.use(express.static(PublicDirPath));
// app.use("/static", express.static(PublicDirPath));
// app.get("/weather", (req, res) => {
//   res.send("<h1>weather page</h1>");
// });
// app.use("view engine", handlebars);
app.listen(3000, () => {
  console.log("server is up and running ");
});
// use npx nodemon app.js to run
