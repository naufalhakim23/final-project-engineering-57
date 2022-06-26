const db = require("../db/db");

class TestController {
  //Get All Test
  static getAllTest(req, res) {
    db.query("SELECT * FROM question", (err, results) => {
      if (err) {
        res.status(500).json({
          message: "Error getting all test",
          error: err,
        });
      } else {
        res.status(200).json(results);
      }
    });
  }
  //Get Test Question by id
  static getTest(req, res) {
    const { id } = req.params;
    const test = question.find((test) => test.id === parseInt(id));
    if (!test) {
      res.status(404).json({ message: "Test not found" });
    } else {
      res.status(200).json(test);
    }
  }
  //Create Test Question and add to the list
  static createTest(req, res) {
    const newTest = {
      id: question.length + 1,
      question: req.body.question,
      answerFor: req.body.answerFor,
      options: req.body.options,
    };
    question.push(newTest);
    try {
      res.status(201).json(newTest);
    } catch (error) {
      res.status(400).json({ message: "Bad Request" });
    }
  }
  //Update Test Question
  static updateTest(req, res) {
    const { id } = req.params;
    const test = question.find((test) => test.id === parseInt(id));
    if (!test) {
      res.status(404).json({ message: "Test not found" });
    }
    const updateTest = {
      id: test.id,
      question: req.body.question,
      answerFor: req.body.answerFor,
      options: req.body.options,
    };
    question.splice(question.indexOf(test), 1, updateTest);
    res.status(200).json(updateTest);
  }
  //Delete Test Question
  static deleteTest(req, res) {
    const { id } = req.params;
    const test = question.find((test) => test.id === parseInt(id));
    if (!test) {
      res.status(404).json({ message: "Test not found" });
    } else {
      question.splice(question.indexOf(test), 1);
      res.status(200).json({ message: "Test deleted" });
    }
  }
}
module.exports = TestController;
