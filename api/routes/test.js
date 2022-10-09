var express = require("express");
var router = express.Router();
const db = require("../database");
const uuidv4 = require("uuid").v4;

const answerConfig = {
  "test-one": {
    q1: "q1-4",
    q2: "q2-2",
    q3: "q3-3"
  },
  "test-two": {
    q1: "q1-3",
    q2: "q2-2"
  }
};

const evaluate = (data) => {
  const { testId, formData } = data;
  const qaMap = Object.entries(formData).reduce((acc, [questionId, answerId]) => {
    acc[questionId] = {
      answerId,
      correctAnswerId: answerConfig[testId][questionId],
      isCorrect: answerId === answerConfig[testId][questionId]
    };
    return acc;
  }, formData);
  const correctAnswers = Object.values(qaMap).filter((value) => value.isCorrect);
  const totalAnswerLength = Object.keys(answerConfig[testId]).length;
  const percent = (correctAnswers.length / totalAnswerLength) * 100;
  return { percent, qaMap };
};

router.get("/:id", function (req, res, next) {
  const id = req.params.id;
  console.log(req.params);
  if (id && db[id]) {
    res.json(db[id]).status(200);
  }
  res.sendStatus(404);
});

router.post("/", function (req, res, next) {
  const id = uuidv4();

  console.log("body: ", req.body);
  const result = evaluate(req.body);
  if (id) {
    db[id] = { ...req.body, ...result };
  }
  res.json({ id }).status(200);
});

module.exports = router;