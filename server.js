const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const compression = require(`compression`);

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(express.static("public"));
app.use(compression());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workItOut", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
