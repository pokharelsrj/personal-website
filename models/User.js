const mongoose = require("mongoose");
const findOrCreate = require("mongoose-find-or-create");

const User = new mongoose.Schema({
  googleId: String,
  facebookId: String,
  name: String,
  email: String,
});
User.plugin(findOrCreate);

module.exports = mongoose.model("User", User);
