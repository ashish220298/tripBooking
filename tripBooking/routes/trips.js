const express = require('express');
const { addTrip, getAllTrips, updateTrip, deleteTrip } = require('../controllers/tripController');
const { auth, adminAuth } = require('../middleware/auth');

const router = express.Router();

router.get('/', getAllTrips);
router.post('/', auth, adminAuth, addTrip);
router.put('/:id', auth, adminAuth, updateTrip);
router.delete('/:id', auth, adminAuth, deleteTrip);

module.exports = router;
