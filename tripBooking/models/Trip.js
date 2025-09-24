const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  from: { type: String, required: true },
  to: { type: String, required: true },
  date: { type: Date, required: true },
  price: { type: Number, required: true },
  totalSeats: { type: Number, required: true },
  availableSeats: { type: Number, required: true, default: function() { return this.totalSeats; } }
}, { timestamps: true });

module.exports = mongoose.model('Trip', tripSchema);
