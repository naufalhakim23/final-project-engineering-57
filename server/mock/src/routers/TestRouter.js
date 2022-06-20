const Router = require("express").Router();
const TestController = require("../controllers/Test");

// Get all test question data
Router.get("/questions", TestController.getAllTest);
// Get test question data by id
Router.get("/:id", TestController.getTest);
// Create new test question
Router.post("/addQuestion", TestController.createTest);
// Update test question data by id
Router.put("/:id", TestController.updateTest);
// Delete test question data by id
Router.delete("/:id", TestController.deleteTest);

module.exports = Router;
