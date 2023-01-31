const UserController = require('../controllers/user.controller')
const { authenticate } = require('../config/jwt.config');

module.exports = function(app) {
  app.post('/api/register', UserController.register);
  app.post("/api/login", UserController.login);
  // this route now has to be authenticated
  // app.get("/api/users", authenticate, UserController.get);
}