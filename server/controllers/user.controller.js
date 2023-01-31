const User = require('../models/user.model')
const myFirstSecret = process.env.SECRET_KEY;


const register = (req, res) => {
  User.create(req.body)
    .then(user => {
      res
        .cookie(
          "usertoken",
          jwt.sign({ id: user._id }, myFirstSecret),
          {
            httpOnly: true,
          })
        .json({ msg: "success!" })
        .catch(err => res.json(err));
    })
}