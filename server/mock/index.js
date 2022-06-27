const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3001;
// Router data
const AuthRouter = require("./src/routers/AuthRouter");
const UserRouter = require("./src/routers/UserRouter");
const TestRouter = require("./src/routers/TestRouter");
const ExplanationRouter = require("./src/routers/ExplanationRouter");

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Router
app.use("/api/auth", AuthRouter);
app.use("/api/user", UserRouter);
app.use("/api/test", TestRouter);
app.use("/api/explanation", ExplanationRouter);

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
