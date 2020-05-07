const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  date: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Please enter an excercise type",
      },
      name: {
        type: String,
        trim: true,
        required: "What is this excercise called?",
      },
      duration: {
        type: Number,
        required: "How long did you perform the excircise?",
      },
      distance: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      weight: {
        type: Number,
      },
    },
  ],
});

const Transaction = mongoose.model("Workout", workoutSchema);

module.exports = workout;
