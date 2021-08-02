const { OAuth2Client } = require("google-auth-library");
const { createIndexes } = require("../models/User");
const User = require("../models/User");

const client = new OAuth2Client(
  "119868810317-t4gu0iqskcrupnqkanu1g532d52f689i.apps.googleusercontent.com"
);

const loginGoogle = async (req, res) => {
  const { tokenId } = req.body;
  console.log(tokenId);
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
            if (err) {
              res.json(err);
            } else {
              res.json({ result, tokenId });
            }
          }
        );
      }
    });
};

module.exports = { loginGoogle };
