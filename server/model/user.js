const mongoose = require('mongoose');

var User = mongoose.model('User',{
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    required: true,
    type: Boolean,
  },
  email:{
    type: Number,
  }
});

module.exports = {User};
