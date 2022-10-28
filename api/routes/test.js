var express = require("express");
var router = express.Router();
const db = require("../database");
const uuidv4 = require("uuid").v4;

const answerConfig = {
  "test-one": {
    q1: "q1-1",
    q2: "q2-2",
    q3: "q3-4",
    q4: "q4-3",
    q5: "q5-4",
    q6: "q6-1",
    q7: "q7-4",
    q8: "q8-3",
    q9: "q9-1",
    q10: "q10-3"
  },
  "test-two": {
    q1: "q1-1",
    q2: "q2-1",
    q3: "q3-3",
    q4: "q4-2",
    q5: "q5-2",
    q6: "q6-3",
    q7: "q7-4",
    q8: "q8-1",
    q9: "q9-4",
    q10: "q10-4"
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
  }, {});
  const correctAnswers = Object.values(qaMap).filter((value) => value.isCorrect);
  const totalAnswerLength = Object.keys(answerConfig[testId]).length;
  const percent = (correctAnswers.length / totalAnswerLength) * 100;
  return { percent, qaMap };
};

router.get("/:id", function (req, res, next) {
  const id = req.params.id;
  // console.log(req.params);
  if (id && db[id]) {
    res.json(db[id]).status(200);
  }
  res.sendStatus(404);
});

router.post("/", function (req, res, next) {
  const id = uuidv4();

  // console.log("body: ", req.body);
  const result = evaluate(req.body);
  if (id) {
    db[id] = { ...req.body, ...result };
  }
  res.json({ id }).status(200);
});

module.exports = router;
