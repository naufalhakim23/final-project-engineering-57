const Router = require("express").Router();
const AuthController = require("../controllers/Auth");
// const UserController = "../controllers/User";

// Create new User
Router.post("/register", AuthController.register);
// Get authenticated user
Router.get("/users", AuthController.getUser);
// Login User
Router.post("/login", AuthController.login);
// Check if user is logged in
Router.get("/check", AuthController.check);
// // Get User
// Router.get("/auth/user", UserController.getUser);
// // Update User
// Router.put("/auth/user", UserController.updateUser);
// // Delete User
// Router.delete("/auth/user", UserController.deleteUser);

module.exports = Router;
