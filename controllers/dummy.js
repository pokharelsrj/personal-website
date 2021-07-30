const Dummy = require("../models/Dummy");

const dummy = async (req, res) => {
  const emailExist = await Dummy.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists");

  const dummy = new Dummy({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    await dummy.save();
    const { id, name, email } = dummy;
    const obj = { id, name, email };
    res.json(obj);
    console.log(obj);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { dummy };
