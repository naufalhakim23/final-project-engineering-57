const uuid = require("uuid").v4;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authUsers = [
  {
    id: "74bcaf50-aa40-476c-a539-9215fe788fd6",
    email: "test@gmail.com",
    password: bcrypt.hashSync("test", 10),
    firstName: "John",
    lastName: "Doe",
    role: "admin",
  },
  {
    id: "ec3775c7-b312-4528-a656-8b18edc10cce",
    email: "hakimnaufal212@gmail.com",
    password: bcrypt.hashSync("inibuattest", 10),
    firstName: "Hakim",
    lastName: "Naufal",
    role: "user",
  },
];
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
    const { email, password, firstName, lastName } = req.body;
    if (email === null) {
      res.status(400).json({
        message: "Email is required",
      });
    } else if (password === null) {
      res.status(400).json({
        message: "Password is required",
      });
    } else if (firstName === null) {
      res.status(400).json({
        message: "First name is required",
      });
    } else if (lastName === null) {
      res.status(400).json({
        message: "Last name is required",
      });
    } else {
      const user = authUsers.find((user) => user.email === email);
      if (user) {
        res.status(400).json({
          message: "Email already exists",
        });
      } else {
        const newUser = {
          id: uuid(),
          email,
          password: bcrypt.hashSync(password, 10),
          role: "user",
        };
        authUsers.push(newUser);
        try {
          res.status(201).json({
            message: "User created successfully",
          });
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      }
    }
  }
  //Login User
  static login(req, res) {
    const { email, password } = req.body;
    const authUser = authUsers.find((user) => user.email === email);
    if (!authUser) {
      return res.status(401).json({ message: "Invalid email or password" });
    } else if (!bcrypt.compareSync(password, authUser.password)) {
      return res.status(401).json({ message: "Invalid email or password" });
    } else {
      try {
        const token = jwt.sign({ id: authUser.id }, "secret");
        res.status(200).json({
          message: "User logged in successfully",
          token,
        });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    }
  }
  //Checking if user is logged in
  static check(req, res) {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      try {
        const decoded = jwt.verify(token, "secret");
        res.status(200).json({
          message: "User is logged in",
          decoded,
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
