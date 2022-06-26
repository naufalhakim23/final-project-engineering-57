const uuid = require("uuid").v4;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../db/db");
class AuthController {
  // //Get User test (don't implement this because it's sensitive data)
  // static getUser(req, res) {
  //   res.status(200).json({
  //     message: "User retrieved successfully",
  //     authUsers,
  //   });
  // }
  //Register User
  static register(req, res) {
    db.query(
      "SELECT * FROM userdb WHERE email = ?",
      [req.body.email],
      (err, results) => {
        if (err) {
          res.status(500).json({
            message: "Error registering user",
            error: err,
          });
        } else if (results.length > 0) {
          res.status(409).json({
            message: "User already exists",
          });
        } else {
          const { email, password } = req.body;
          const id = uuid();
          const hash = bcrypt.hashSync(password, 10);
          db.query(
            "INSERT INTO userdb (id, first_name, last_name, email, password, role, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)",
            [
              id,
              req.body.first_name,
              req.body.last_name,
              email,
              hash,
              "user",
              new Date(),
            ],
            (err, results) => {
              if (err) {
                res.status(500).json({
                  message: "Error registering user",
                  error: err,
                });
              } else {
                res.status(201).json({
                  message: "User registered successfully",
                  authUser: {
                    id,
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email,
                    password: hash,
                    role: "user",
                    created_at: new Date(),
                  },
                });
              }
            }
          );
        }
      }
    );
    // const { email, password, firstName, lastName } = req.body;
    // if (email === null) {
    //   res.status(400).json({
    //     message: "Email is required",
    //   });
    // } else if (password === null) {
    //   res.status(400).json({
    //     message: "Password is required",
    //   });
    // } else if (firstName === null) {
    //   res.status(400).json({
    //     message: "First name is required",
    //   });
    // } else if (lastName === null) {
    //   res.status(400).json({
    //     message: "Last name is required",
    //   });
    // } else {
    //   const user = authUsers.find((user) => user.email === email);
    //   if (user) {
    //     res.status(400).json({
    //       message: "Email already exists",
    //     });
    //   } else {
    //     const newUser = {
    //       id: uuid(),
    //       email,
    //       password: bcrypt.hashSync(password, 10),
    //       firstName,
    //       lastName,
    //       role: "user",
    //     };
    //     authUsers.push(newUser);
    //     try {
    //       res.status(201).json({
    //         message: "User created successfully",
    //       });
    //     } catch (error) {
    //       res.status(500).json({ message: error.message });
    //     }
    //   }
    // }
  }
  //Login User
  static login(req, res) {
    db.query(
      "SELECT * FROM userdb WHERE email = ?",
      [req.body.email],
      (err, results) => {
        if (err) {
          res.status(500).json({
            message: "Error logging in user",
            error: err,
          });
        } else if (results.length === 0) {
          res.status(401).json({
            message: "User does not exist",
          });
        } else {
          const userdb = results[0];
          if (bcrypt.compareSync(req.body.password, userdb.password)) {
            const token = jwt.sign(
              {
                id: userdb.id,
                email: userdb.email,
                firstName: userdb.first_name,
                lastName: userdb.last_name,
              },
              "secret",
              {
                expiresIn: "1h",
              }
            );
            // console.log(token);
            res.status(200).json({
              message: "User logged in successfully",
              token,
            });
          } else {
            res.status(401).json({
              message: "Incorrect password",
            });
          }
        }
      }
    );
    // const { email, password } = req.body;
    // const authUser = authUsers.find((user) => user.email === email);
    // if (!authUser) {
    //   return res.status(401).json({ message: "Invalid email or password" });
    // } else if (!bcrypt.compareSync(password, authUser.password)) {
    //   return res.status(401).json({ message: "Invalid email or password" });
    // } else {
    //   try {
    //     const token = jwt.sign({ id: authUser.id }, "secret");
    //     res.status(200).json({
    //       message: "User logged in successfully",
    //       token,
    //     });
    //   } catch (error) {
    //     res.status(500).json({ message: error.message });
    //   }
    // }
  }
  //Checking if user is logged in
  static check(req, res) {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      try {
        // const decoded = jwt.verify(token, "secret");
        res.status(200).json({
          message: "User is logged in",
          // decoded,
        });
      } catch (error) {
        res.status(401).json({ message: "Invalid token" });
      }
    } else {
      res.status(401).json({ message: "No token provided" });
    }
  }
}

module.exports = AuthController;
