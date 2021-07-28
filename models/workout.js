const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
      day: {
        type: Date,
        default: Date.now
      },
      type: {
        type: String,
        trim: true,
        required: "Enter type of exercise"
      },
      name: {
        type: String,
        trim: true,
        required: "Enter a name for the exercise"
      },
      duration: {
        type: Number,
        required: "Enter an amount"
      },
      weight: {
        type: Number,
        required: "Enter an amount"
      },
      reps: {
        type: Number,
        required: "Enter an amount"
      },
      sets: {
        type: Number,
        required: "Enter an amount"
      }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;