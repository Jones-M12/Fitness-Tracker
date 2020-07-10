const router = require("express").Router();
const Transaction = require("../models/workout.js");

//Setup routes to 
module.exports = function(app){

    app.get('/', (req, res) => {
        res.send('exercise');
      });
    app.get('/exercise', (req, res) => {
        res.send('exercise');
      });
  
    app.get("/stats", function(req,res){
        
        res.send('stats');
        
    });
  
    
    
  
    
  };