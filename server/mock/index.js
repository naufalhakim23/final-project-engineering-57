const express = require("express");
const jsonServer = require("json-server");
const app = express();

const AuthRouter = require("./src/routers/AuthRouter");
// const UserRouter = require("./src/routers/UserRouter");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Router
app.use("/api/auth", AuthRouter);
// app.use("/api/user", UserRouter);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
