const { User } = require('../models/user.model')
const secret = process.env.SECRET_KEY;
const jwt = require("jsonwebtoken");


module.exports.register = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  
  if (user !== null) {
    // email not found in users collection
    console.log(req.body.email)
    return res.status(400).json("email is already taken");
  }
  
  if (req.body.comfirmedPassword !== req.body.password) {
    // password wasn't a match!
    console.log('password')
    return res.status(400).json("passwords do not match");
  }
  
  User.create({
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password
  })
  const userToken = jwt.sign({
    id: req.body._id
  }, secret);
  res
  .cookie("usertoken", userToken, secret, {
      httpOnly: true
  })
  .json({ msg: "success!" });
}

module.exports.login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (user === null) {
    // email not found in users collection
    return res.sendStatus(400);
  }

  // if we made it this far, we found a user with this email address
  // let's compare the supplied password to the hashed password in the database
  const correctPassword = await bcrypt.compare(req.body.password, user.password);

  if (!correctPassword) {
    // password wasn't a match!
    return res.sendStatus(400);
  }

  // if we made it this far, the password was correct
  const userToken = jwt.sign({
    id: user._id
  }, secret);

  // note that the response object allows chained calls to cookie and json
  res
    .cookie("usertoken", userToken, secret, {
      httpOnly: true
    })
    .json({ msg: "success!" });
}

module.exports.logout = (req, res) => {
  res.clearCookie('usertoken');
  res.sendStatus(200);
}

module.exports.oneUser = (req, res) => {
  User.findOne({ _id: req.params.id })
    .then(user => res.json(user))
    .catch(err => res.json(err))
}