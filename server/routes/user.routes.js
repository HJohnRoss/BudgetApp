const UserController = require('../controllers/user.controller')
const {authenticate} = require('../config/jwt.config');


module.exports = function(app) {
  app.post('/api/register', UserController.register);
  app.post("/api/login", UserController.login);
  app.get("/api/logout", authenticate, UserController.logout);
  // this route now has to be authenticated
  app.get("/api/user/:id", authenticate, UserController.oneUser);
  app.put("/api/user/:id", authenticate, UserController.update);
}