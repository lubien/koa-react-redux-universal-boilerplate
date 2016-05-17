const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  id: Number,
  name: String,
  username: String
});

module.exports = mongoose.model('User', userSchema);
