const express = require('express');
const { auth, adminAuth } = require('../middleware/auth');
const { getAllTrips, addTrip, updateTrip, deleteTrip } = require('../controllers/tripController');
const { getAllBookings, verifyQR } = require('../controllers/bookingController');

const router = express.Router();

router.use(auth);
router.use(adminAuth);

router.get('/trips', getAllTrips);
router.post('/trips', addTrip);
router.put('/trips/:id', updateTrip);
router.delete('/trips/:id', deleteTrip);

router.get('/bookings', getAllBookings);
router.patch('/bookings/verify/:bookingId', verifyQR);

module.exports = router;
