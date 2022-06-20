const Router = require("express").Router();
const AuthController = require("../controllers/Auth");
const UserController = require("../controllers/User");

//Get User data user/:id
Router.get("/:id", UserController.getUser);
//Update User data user/:id
Router.patch("/:id", UserController.updateUser);
//Delete User data user/:id
Router.delete("/:id", UserController.deleteUser);
//Get All User data if role is admin
Router.get("/", UserController.getAllUser);
//
module.exports = Router;
