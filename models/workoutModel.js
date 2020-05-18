const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        enum: ["Resistance", "Cardio"],
        required: "type is required!",
      },

      name: {
        type: String,
        trim: true,
        required: "name is required!",
      },

      weight: {
        type: Number,
        trim: true,
        min: [1, "must have weight greater than 0"],
        max: 500,
        required: "weight is required",
      },

      reps: {
        type: Number,
        trim: true,
        min: [1, "must have at least one repetition"],
        max: [30, "What are you Superman?"],
        required: "reps are required",
      },

      sets: {
        type: Number,
        trim: true,
        min: [1, "must have at least one set"],
        max: [30, "Whoa there tiger!"],
        required: "sets are required",
      },

      duration: {
        type: Number,
        trim: true,
        min: [1, "Why so little?"],
        required: "duration is required",
      },

      distance: {
        type: Number,
        trim: true,
        min: [1, "distance cannot be 0"],
        required: "distance is required",
      },
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
