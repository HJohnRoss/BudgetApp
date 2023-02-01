const mongoose = require('mongoose')
// near the top is a good place to group our imports
const bcrypt = require('bcrypt');
// this should go after 

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "email is required"],
    validate: {
      validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
      message: "Please enter a valid email"
    }
  },
  phone: {
    type: String,
    // validate: {
      //   validator: val => /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/.test(val),
      //   messgae: "Please enter a valid phone number"
      // }
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be 8 or more characters"]
    },
    pages: {
      type: [Object],
      default: []
    }
  }, { timestamps: true });
  
  UserSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set(value => this._confirmPassword = value);
  
  UserSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
      .then(hash => {
        this.password = hash;
        next();
      });
  });



module.exports.User = mongoose.model('User', UserSchema)