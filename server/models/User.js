const mongoose = require('mongoose');

const userSchema = mongoose.Schema({ // eslint-disable-line
  id: Number,
  name: String,
  username: String,
});

module.exports = mongoose.model('User', userSchema);
