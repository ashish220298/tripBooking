const Trip = require('../models/Trip');

exports.addTrip = async (req, res) => {
  try {
    const { from, to, date, price, totalSeats } = req.body;
    const trip = new Trip({ from, to, date, price, totalSeats, availableSeats: totalSeats });
    await trip.save();
    res.status(201).json(trip);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllTrips = async (req, res) => {
  try {
    const trips = await Trip.find().sort({ date: 1 });
    res.json(trips);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateTrip = async (req, res) => {
  try {
    const { id } = req.params;
    const trip = await Trip.findByIdAndUpdate(id, req.body, { new: true });
    if (!trip) return res.status(404).json({ message: 'Trip not found' });
    res.json(trip);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteTrip = async (req, res) => {
  try {
    const { id } = req.params;
    const trip = await Trip.findByIdAndDelete(id);
    if (!trip) return res.status(404).json({ message: 'Trip not found' });
    res.json({ message: 'Trip deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
