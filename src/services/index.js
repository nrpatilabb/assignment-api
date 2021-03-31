var express = require("express");
var Questions = require("../schema/QuestionSchema");
const getQuestions = require("../api/StackApi");
var router = express.Router();

router.post("/initialize", (req, res, next) => {
  Questions.find({})
    .then((value) => {
      if (value.length > 0) {
        res.status(200).send("Already initialised");
      } else {
        getQuestions()
          .then((result) => {
            Questions.insertMany(result).then(() => {
              res.status(200).send("Initialised");
            });
          })
          .catch((error) => {
            res.status(400).send("Failed to store");
          });
      }
    })
    .catch((err) => {
      res.status(400).send("Failed to fetch questions");
    });
});

router.post("/question", async (req, res, next) => {
  try{
    const response = await Questions.create(req.body);
    res.status(201).send(response);
  }
  catch(error){
      res.status(400).send("Failed to create");
  }
});

router.get("/question", async (req, res, next) => {
    try{
        const questions = await Questions.find({});
        res.status(200).send(questions);
    }
    catch(error){
        res.status(400).send("Failed to fetch questions");
    }
});

router.get("/question/:id", async (req, res, next) => {
    try{
        const question = await Questions.find({ _id: req.params.id });
        res.status(200).send(question);
    }
    catch(error){
        res.status(400).send("Failed to fetch question");
    }
});

router.delete("/question/:id", async (req, res, next) => {
    try{
        const response = await Questions.findOneAndDelete({ _id: req.params.id });
        res.status(204).send(response);
    }
    catch(error){
        res.status(400).send("Failed to delete question");
    }
});

router.patch("/question/:id", async (req, res, next) => {
  try{
    const response = await Questions.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
    res.status(200).send(response);
  }
  catch(error){
    res.status(400).send("Failed to update question");
  }
});

module.exports = router;
