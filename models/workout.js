const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        // enum: ["Resistance", "Cardio"],
        required: "exercise type is required!"
      },

      name: {
        type: String,
        trim: true,
        required: "name is required!"
      },

      duration: {
        type: Number,
        trim: true,
        // min: [1, "Why so little?"],
        required: "duration is required"
      },

      weight: {
        type: Number,
        // trim: true,
        // min: 1,
        // max: 500,
        // required: "weight is required",
      },

      reps: {
        type: Number
        // trim: true,
        // min: [1, "must have at least one repetition"],
        // max: [30, "What are you Superman?"],
        // required: "reps are required",
      },

      sets: {
        type: Number
        // trim: true,
        // min: [1, "must have at least one set"],
        // max: [30, "Whoa there tiger!"],
        // required: "sets are required",
      },

      distance: {
        type: Number,
        trim: true,
        // min: [1, "distance cannot be 0"],
        required: "distance is required"
      }
    }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
