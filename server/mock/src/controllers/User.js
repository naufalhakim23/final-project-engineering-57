const users = [
  {
    id: "74bcaf50-aa40-476c-a539-9215fe788fd6",
    firstName: "John",
    lastName: "Doe",
    email: "test@gmail.com",
    role: "admin",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "ec3775c7-b312-4528-a656-8b18edc10cce",
    firstName: "Bima",
    lastName: "Satria",
    email: "bimasatriagaruda@gmail.com",
    role: "user",
    createdAt: new Date(),
    updatedAt: new Date(),
    riasecResult: {
      r: 10,
      i: 7,
      a: 9,
      s: 8,
      e: 5,
      c: 4,
    },
  },
];

class UserController {
  // Get User data user/:id
  static getUser(req, res) {
    const { id } = req.params;
    const user = users.find((user) => user.id === id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({
      message: "User retrieved successfully",
      user,
    });
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
    const { id } = req.params;
    const user = users.find((user) => user.id === id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    } else {
      users.splice(users.indexOf(user), 1);
    }
    res.status(200).json({
      message: "User deleted successfully",
      user,
    });
  }
  //get All User data if role is admin
  static getAllUser(req, res) {
    const { role } = req.user;
    if (role === "admin") {
      res.status(200).json({
        message: "All user retrieved successfully",
        users,
      });
    }
    res.status(403).json({
      message: "You are not authorized to access this resource",
    });
  }
}

module.exports = UserController;
