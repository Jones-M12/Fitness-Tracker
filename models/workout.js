const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
        },
        exercises: [{

            type: {
                type: String,
                trim: true,
                required: "Select or enter a workout type."
            },
            name: {
                type: String,
                trim: true,
                required: "Select or enter a name for the workout."
            },
            duration: {
                type: Number,
                
            },
            weight: {
                type: Number,
                
            },
            reps: {
                type: Number,
                
            },
            sets: {
                type: Number,
                
            },
            distance: {
                type: Number,
                
            },
        }]

    },
    
    {// Include virtuals
        toJSON: {virtuals: true}
    }
  
);

//Virtual duraion property

workoutSchema.virtual("totalDuration").get(function(){
    return this.exercises.reduce(function(total, session){
        return total + session.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
