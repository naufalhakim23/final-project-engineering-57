const pool = require("../db/db");
class TestController {
  //Get All Test
  static getAllTest(req, res) {
    pool.query("SELECT * FROM impianmu.questions", (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      } else {
        res.status(200).json(result.rows);
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
    pool.query(
      "INSERT INTO impianmu.questions (question, answerFor, options) VALUES ($1, $2, $3)",
      [req.body.question, req.body.answerFor, req.body.options],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).json({
            error: err,
          });
        } else {
          res.status(201).json({
            message: "Test created",
          });
        }
      }
    );
  }
  //Update Test Question
  static updateTest(req, res) {
    pool.query(
      "UPDATE impianmu.questions SET question = $1, answerFor = $2, options = $3 WHERE id = $4",
      [req.body.question, req.body.answerFor, req.body.options, req.params.id],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).json({
            error: err,
          });
        } else {
          res.status(200).json({
            message: "Test updated",
          });
        }
      }
    );
  }
  //Delete Test Question
  static deleteTest(req, res) {
    pool.query(
      "DELETE FROM impianmu.questions WHERE id = $1",
      [req.params.id],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).json({
            error: err,
          });
        } else {
          res.status(200).json({
            message: "Test deleted",
          });
        }
      }
    );
  }
}
module.exports = TestController;
