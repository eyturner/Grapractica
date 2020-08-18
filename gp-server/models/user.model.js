const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  passhash: {
    type: String,
    required: true,
    trim: true,
    minlength: 8
  },
  level: {
    type: Number,
    required: true
  },
  reviews: {
    type: [{nextReview: Date, lesson: Schema.Types.ObjectId, ref="Lesson"}],
    required: true
  },
  isAdmin: {
    type: Boolean,
    required: true
  }

}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;