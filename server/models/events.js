
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
var EventSchema = new Schema({
  message: String,
  startDate: {
    day: Number,
    month: Number,
    hour: Number,
    min: Number
  },
  endDate: {
    day: Number,
    month: Number,
    hour: Number,
    min: Number
  }
});
module.exports = mongoose.model('Event', EventSchema);
