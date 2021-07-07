//Imports
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv/config");

//Initializations
const app = express();
const PORT = process.env.PORT || 5000;

//Body Parser MiddleWares
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Routers
app.use("/api/test", require("./routes/api/test"));

//Mongoose Connection
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB")
);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

//Serve Static assets if in production

if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/dist"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
