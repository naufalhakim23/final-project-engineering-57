const db = require("../db/db");

class UserController {
  // Get User data user/:id
  static getUser(req, res) {
    const { id } = req.params;
    db.query(`SELECT * FROM users WHERE id = '${id}'`, (err, result) => {
      if (err) {
        res.status(500).json({
          message: "Internal Server Error",
        });
      } else {
        res.status(200).json(result.rows[0]);
      }
    });
    // const { id } = req.params;
    // const user = users.find((user) => user.id === id);
    // if (!user) {
    //   return res.status(404).json({ message: "User not found" });
    // }
    // res.status(200).json({
    //   message: "User retrieved successfully",
    //   user,
    // });
  }
  //Update User data user/:id
  static updateUser(req, res) {
    const { id } = req.params;
    const { firstName, lastName, email } = req.body;
    const user = users.find((user) => user.id === id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    } else if (firstName === null) {
      return res.status(400).json({ message: "First name is required" });
    } else if (lastName === null) {
      return res.status(400).json({ message: "Last name is required" });
    } else if (email === null) {
      return res.status(400).json({ message: "Email is required" });
    }

    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.updatedAt = new Date();
    res.status(200).json({
      message: "User updated successfully",
      user,
    });
  }
  //Delete User data user/:id
  static deleteUser(req, res) {
    db.query(
      `DELETE FROM users WHERE id = '${req.params.id}'`,
      (err, result) => {
        if (err) {
          res.status(500).json({
            message: "Internal Server Error",
          });
        } else {
          res.status(200).json({
            message: "User deleted successfully",
          });
        }
      }
    );
  }
  //get All User data if role is admin
  static getAllUser(req, res) {
    db.query(`SELECT * FROM users`, (err, result) => {
      if (err) {
        res.status(500).json({
          message: "Internal Server Error",
        });
      } else {
        res.status(200).json(result.rows);
      }
    });
  }
  //   const { role } = req.user;
  //   if (role === "admin") {
  //     res.status(200).json({
  //       message: "All user retrieved successfully",
  //       users,
  //     });
  //   }
  //   res.status(403).json({
  //     message: "You are not authorized to access this resource",
  //   });
  // }
}

module.exports = UserController;
