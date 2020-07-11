const router = require("express").Router();
const db = require(("../models"));

router.get("/api/workouts", (req, res) => {
    db.workout.find({})
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
 /* 
 * We can update the values in an array with `$push`:

```
db.places.update({"country": "Morocco"}, {$push: {"majorcities": "Agadir"}})
```
 */
  router.put("/api/workouts" + id, ({ body }, res) => {
    db.workout.create(body)
    console.log(body)
    .then(({ _id }) => db.workout.findOneAndUpdate({}, { $push: { exercises: _id } }, { new: true }))
    .then(dbworkout => {
      res.json(dbworkout);
      console.log(dbworkout)
    })
    .catch(err => {
      res.json(err);
    });
    
    // (
    //   {_id: mongojs.ObjectId(req.params.id)
    //   }, 
    //   {
    //     $push:{

    //       id:req.params.id,
    //       // type: req.body.title,
    //       // name: req.body.name,
    //       // duration: req.body.duration,
    //       // weight: req.body.weight,
    //       // reps: req.body.reps,
    //       // sets: req.body.sets,
    //       // distance: req.body.sets,
    //       //  day: Date.now()

    //     },
    //    })
    //   .then(dbTransaction => {
    //     res.json(dbTransaction);
    //   })
    //   .catch(err => {
    //     res.status(400).json(err);
    //   });
    
  });
  
  router.get("/api/workouts/range", (req, res) => {
    db.workout.find({})
      
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  module.exports = router;