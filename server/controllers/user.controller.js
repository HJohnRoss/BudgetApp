const { User } = require('../models/user.model')
const  jwt = require("jsonwebtoken");


module.exports.register = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (user !== null) {
    console.log("email was already taken")
    return res.status(400).json({
        errors: {"email":"Email was already taken"}
    })
  }

  User.create(req.body)
    .then(user => {
      res
        .cookie(
          "usertoken",
          jwt.sign({ id: user._id }, process.env.SECRET_KEY),
          {
            httpOnly: true,
          }
        )
        .json({ msg: "success!", user: user.email });
    })
    .catch(err => res.status(400).json(err))
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
  }, process.env.SECRET_KEY);

  // note that the response object allows chained calls to cookie and json
  res
    .cookie("usertoken", userToken, secret, {
      httpOnly: true
    })
  res.json({ msg: "success!" });
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

module.exports.allUsers = (req, res) => {
  User.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
}

// module.exports.getLoggedInUser = (req, res) => {
//   const decodedJWT = jwt.decode(req.cookies.usertoken, { complete: true });

//   User.findById(decodedJWT.payload._id)
//     .then((user) => res.json(user))
//     .catch((err) => res.json(err));
// }