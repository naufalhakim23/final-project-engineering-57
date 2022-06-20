const explanations = [
  {
    id: 1,
    title: "Realistic",
    description: "These people are often good at mechanical or athletic jobs.",
    listJurusan: [
      "Sistem Informasi",
      "Teknik Sipil",
      "Teknik Mesin",
      "Teknik Elektro",
      "Teknik Industri",
      "Teknik Kimia",
    ],
  },
  {
    id: 2,
    title: "Investigative",
    description: "These people are often good at logical or scientific jobs.",
    listJurusan: [
      "Sistem Informasi",
      "Kelautan",
      "Kimiastri",
      "Psikologi",
      "Teknik",
      "Ekonomi",
    ],
  },
];
class ExplanationController {
  //Get specific explanation by id
  static getExplanation(req, res) {
    const explanation = explanations.find((explanation) => {
      return explanation.id === parseInt(req.params.id);
    });
    if (explanation) {
      res.status(200).json(explanation);
    } else {
      res.status(404).json({ message: "Explanation not found" });
    }
  }
  //Get all explanations
  static getAllExplanations(req, res) {
    res.status(200).json(explanations);
  }
  //Create new explanation
  static createExplanation(req, res) {
    const newExplanation = {
      id: explanations.length + 1,
      title: req.body.title,
      description: req.body.description,
      listJurusan: req.body.listJurusan,
    };
    explanations.push(newExplanation);
    try {
      res.status(201).json(newExplanation);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  //Update explanation by id
  static updateExplanation(req, res) {
    const explanation = explanations.find((explanation) => {
      return explanation.id === parseInt(req.params.id);
    });
    if (explanation) {
      explanation.title = req.body.title;
      explanation.description = req.body.description;
      explanation.listJurusan = req.body.listJurusan;
      res.status(200).json(explanation);
    } else {
      res.status(404).json({ message: "Explanation not found" });
    }
  }
  //Delete explanation by id
  static deleteExplanation(req, res) {
    const explanation = explanations.find((explanation) => {
      return explanation.id === parseInt(req.params.id);
    });
    if (explanation) {
      const index = explanations.indexOf(explanation);
      explanations.splice(index, 1);
      res.status(200).json({ message: "Explanation deleted" });
    } else {
      res.status(404).json({ message: "Explanation not found" });
    }
  }
}
module.exports = ExplanationController;
