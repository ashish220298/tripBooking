const express = require('express');
const { auth } = require('../middleware/auth');
const User = require('../models/User');
const router = express.Router();

router.get('/me', auth, async (req, res) => {
  try {
    const me = await User.findById(req.user.id).select('-password');
    res.json(me);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
