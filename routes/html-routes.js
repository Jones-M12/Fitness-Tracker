const router = require("express").Router();
// const Transaction = require("../models/workout.js");
const model = require(("./models"));
var path = require("path");

//Setup routes to 
module.exports = function(app){

    app.get('/', (req, res) => {

        res.sendFile(path.join(__dirname, "../public/index.html"));
      });

    app.get('/exercise', (req, res) => {

        res.sendFile(path.join(__dirname, "../public/exercise.html"));
      });
  
    app.get("/stats", function(req,res){
        
        res.sendFile(path.join(__dirname, "../public/stats.html"));
        
    });
  
    
    
  
    
  };