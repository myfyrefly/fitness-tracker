const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  // useFindAndModify: false
});

// requiring routes
// require('./routes/html-routes')(app);
// require('./routes/api')(app);

app.use(require("./routes/html-routes"));
app.use(require("./routes/api"));


app.listen(PORT, () => {
  console.log(`Fitness Tracker running at http://localhost:${PORT}`);
});