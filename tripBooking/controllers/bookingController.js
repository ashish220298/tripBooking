const Booking = require('../models/Booking');
const Trip = require('../models/Trip');

exports.createBooking = async (req, res) => {
  try {
    const { tripId, seats } = req.body;
    const userId = req.user.id;

    const trip = await Trip.findById(tripId);
    if (!trip) return res.status(404).json({ message: 'Trip not found' });

    if (seats.length > trip.availableSeats) {
      return res.status(400).json({ message: 'Not enough seats available' });
    }

    const booking = new Booking({
      user: userId,
      trip: tripId,
      seats,
      status: 'confirmed'
    });

    await booking.save();

    trip.availableSeats -= seats.length;
    await trip.save();

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUserBookings = async (req, res) => {
  try {
    const userId = req.user.id;
    const bookings = await Booking.find({ user: userId }).populate('trip').sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate('user', 'fullName email')
      .populate('trip')
      .sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.verifyQR = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const booking = await Booking.findById(bookingId);
    if (!booking) return res.status(404).json({ msg: 'Booking not found' });
    booking.qrVerified = true;
    await booking.save();
    res.json({ msg: 'QR Verified' });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.cancelBooking = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const booking = await Booking.findById(bookingId);
    if (!booking) return res.status(404).json({ msg: 'Booking not found' });
    if (booking.status === 'cancelled') return res.status(400).json({ msg: 'Booking is already cancelled' });
    booking.status = 'cancelled';
    await booking.save();

    const trip = await Trip.findById(booking.trip);
    trip.availableSeats += booking.seats.length;
    await trip.save();

    res.json({ msg: 'Booking cancelled' });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
