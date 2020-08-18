const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const lessonSchema = new Schema({
  grammar: {
    type: String,
    required: true 
  },
  meaning: {
    type: String,
    required: true
  },
  structure: {
    type:[String],
    //[usage1, usage2...]
    required: true
  },
  level: {
    type: String, 
    required: true 
  },
  sentences: { 
    type: [String], 
    required: true 
  },
  resources: {
    type: [String],
    required: true 
  },
}, {
  timestamps: true,
});

const Lesson = mongoose.model('Exercise', lessonSchema);

module.exports = Lesson;