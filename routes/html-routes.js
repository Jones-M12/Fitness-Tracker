const router = require("express").Router();
const Transaction = require("../models/workout.js");

//Setup routes to Handlebar Pages
module.exports = function(app){

    app.get('/exercise', (req, res) => {
        res.send('exercise');
      });
  
    app.get("/stats", function(req,res){
        
        res.send('stats');
        
    });
  
    
    
  
    
  };