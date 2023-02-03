const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

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
    type: String
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password must be 8 or more characters"]
  },
  pages: {
    type: [Object],
    default: []
  },
  transactions: {
    type: [Object],
    default: []
  }
}, { timestamps: true });


UserSchema.virtual('confirmPassword')
  .get(() => this.confirmPassword)
  .set(value => this.confirmPassword = value);

UserSchema.pre('validate', function (next) {
  if (this.password !== this.confirmPassword) {
    this.invalidate('confirmPassword', 'Passwords do not match');
  }
  next();
});

UserSchema.pre('save', function (next) {
  bcrypt.hash(this.password, 10)
    .then(hash => {
      this.password = hash;
      next();
    });
});


module.exports.User = mongoose.model('User', UserSchema)