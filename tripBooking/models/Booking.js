const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  trip: { type: mongoose.Schema.Types.ObjectId, ref: 'Trip', required: true },
  seats: [{ type: String, required: true }],
  status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
  qrVerified: { type: Boolean, default: false },
  bookingDate: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
