const express = require("express");
const router = express.Router();
const { OAuth2Client } = require("google-auth-library");
const mongoose = require("mongoose");
const findOrCreate = require("mongoose-find-or-create");

const userSchema = new mongoose.Schema({
  googleId: String,
  facebookId: String,
  name: String,
  email: String,
});
userSchema.plugin(findOrCreate);
const User = new mongoose.model("User", userSchema);
//Import Controllers
const client = new OAuth2Client(
  "119868810317-t4gu0iqskcrupnqkanu1g532d52f689i.apps.googleusercontent.com"
);

router.post("/", (req, res) => {
  const { tokenId } = req.body;
  client
    .verifyIdToken({
      idToken: tokenId,
      audience:
        "119868810317-t4gu0iqskcrupnqkanu1g532d52f689i.apps.googleusercontent.com",
    })
    .then((response) => {
      const { email_verified, name, email, sub } = response.payload;
      if (email_verified) {
        User.findOrCreate(
          { googleId: sub, name: name, email: email },
          (err, result) => {
            console.log(result);
          }
        );
      }
    });
});

module.exports = router;
