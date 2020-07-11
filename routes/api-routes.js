const router = require("express").Router();
const db = require(("../models"));

router.get("/api/workouts", ({ body }, res) => {
    db.workout.create(body)
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  router.post("/api/workouts", ({ body }, res) => {
    db.workout.create({})
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  router.get("/api/transaction/range", (req, res) => {
    db.workout.find({})
      
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  module.exports = router;