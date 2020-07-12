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
  router.put("/api/workouts/:id" , ({ body, params }, res) => {
    const { id } = params;
    // db.workout.create(body)
    console.log(body)
    db.workout.findByIdAndUpdate(id, { $push: { exercises: body } })
    .then(dbworkout => {
      res.json(dbworkout);
      console.log(dbworkout)
    })
    
    
  });
  
  router.get("/api/workouts/range", (req, res) => {
    // db.workout.find().limit(7)
    db.workout.find( {}, { exercises: { $slice: [ 0, 7 ]} } )
    // db.workout.find( {}, { exercises: { $limit: 7 } } )
    // db.workout.aggregate([
    //   { $limit : 7 }
  //  ])
      
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  module.exports = router;