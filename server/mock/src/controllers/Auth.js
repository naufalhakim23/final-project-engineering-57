const uuid = require("uuid").v4;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../db/db");
class AuthController {
  // //Get User test (don't implement this because it's sensitive data)
  static getUser(req, res) {
    try {
      pool.query("SELECT * FROM impianmu.users", (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).json({
            error: err,
          });
        } else {
          res.status(200).json(result.rows);
        }
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  //Register User
  static register(req, res) {
    try {
      const { password } = req.body;
      const hash = bcrypt.hashSync(password, 10);
      const id = uuid();
      pool.query(
        //Check email if it's already registered
        "SELECT * FROM impianmu.users WHERE email = $1",
        [req.body.email],
        (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).json({
              error: err,
            });
          } else if (result.rows.length > 0) {
            res.status(400).json({
              message: "Email already registered",
            });
          } else {
            pool.query(
              //Insert new user
              "INSERT INTO impianmu.users (id, first_name, last_name, email, password, role, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
              [
                id,
                req.body.first_name,
                req.body.last_name,
                req.body.email,
                hash,
                "user",
                new Date(),
                new Date(),
              ],
              (err, result) => {
                if (err) {
                  console.log(err);
                  res.status(500).json({
                    error: err,
                  });
                } else {
                  res.status(201).json({
                    message: "User created",
                  });
                }
              }
            );
          }
        }
      );
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  // //Login User
  static login(req, res) {
    try {
      pool.query(
        "SELECT * FROM impianmu.users WHERE email = $1",
        [req.body.email],
        (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).json({
              error: err,
            });
          } else if (result.rows.length === 0) {
            res.status(400).json({
              message: "User does not exist",
            });
          } else {
            const user = result.rows[0];
            if (bcrypt.compareSync(req.body.password, user.password)) {
              const token = jwt.sign(
                {
                  id: user.id,
                  email: user.email,
                  firstName: user.first_name,
                  lastName: user.last_name,
                  role: user.role,
                },
                "secret",
                {
                  expiresIn: "1h",
                }
              );
              res.status(200).json({
                message: "User logged in successfully",
                token: token,
              });
            } else {
              res.status(400).json({
                message: "Incorrect password",
              });
            }
          }
        }
      );
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  //check if user is logged in
  static check(req, res) {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      jwt.verify(token, "secret", (err, decoded) => {
        if (err) {
          res.status(401).json({
            message: "Invalid token",
          });
        } else {
          res.status(200).json({
            message: "User is logged in",
          });
        }
      });
    }
  }
}

module.exports = AuthController;
