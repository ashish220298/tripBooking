const express = require('express');
const { auth, adminAuth } = require('../middleware/auth');
const { createBooking, getUserBookings, getAllBookings, verifyQR, cancelBooking } = require('../controllers/bookingController');

const router = express.Router();

router.post('/', auth, createBooking);
router.get('/mine', auth, getUserBookings);
router.get('/', auth, adminAuth, getAllBookings);
router.patch('/verify/:bookingId', auth, adminAuth, verifyQR);
router.patch('/cancel/:bookingId', auth, cancelBooking);

module.exports = router;
