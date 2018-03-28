const mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{
  text: {
    type: String,
    // required: true,
    trim: true,
  },
  completed: {
    // required: true,
    type: Boolean,
  },
  completedAt:{
    type: Number,
  }
});

module.exports = {Todo};
