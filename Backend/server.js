const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
const app = express();

//mongodb connection
mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://127.0.0.1:27017/MEAN_Example")
  .then((x) => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch((error) => console.log(error));

//Routes API
const userRoutes = require("./routes/UserRoute");
app.use(express.json());
app.use("/api", userRoutes);


// Angular build
app.use(express.static("ejemplo"));
app.use('/*', function(req, res) {
  res.sendFile('ejemplo/index.html');
});

app.use(cors({ origin: "*" }));

// Port
const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log("server listening on port", port);
});
