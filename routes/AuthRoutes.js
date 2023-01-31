const { registerUser, loginUser } = require('../controllers/authController.js');
const router = require('express').Router();

router.post('/register', registerUser)
router.post('/login', loginUser)


module.exports = router