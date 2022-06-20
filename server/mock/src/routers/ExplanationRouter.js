const Router = require("express").Router();
const ExplanationController = require("../controllers/Explanation");

//Get specific explanation by id
Router.get("/:id", ExplanationController.getExplanation);
//Get all explanations
Router.get("/", ExplanationController.getAllExplanations);
//Create new explanation
Router.post("/addExplanation", ExplanationController.createExplanation);
//Update explanation by id
Router.patch("/:id", ExplanationController.updateExplanation);
//Delete explanation by id
Router.delete("/:id", ExplanationController.deleteExplanation);

// Export the Router
module.exports = Router;
