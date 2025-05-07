const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
require("./config/db");
const router = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.json("Hello Blog World!");
});
app.use("/api/v1", router);

app.listen(PORT, () => {
  console.log("server is started on " + PORT);
});
