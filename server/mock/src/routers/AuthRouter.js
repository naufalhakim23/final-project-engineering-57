const Router = require("express").Router();
const AuthController = require("../controllers/Auth");
const UserController = require("../controllers/User");

// Create new User
Router.post("/register", AuthController.register);
// Login User
Router.post("/login", AuthController.login);
// Check if user is logged in
Router.get("/check", AuthController.check);

// Export the Router
module.exports = Router;
