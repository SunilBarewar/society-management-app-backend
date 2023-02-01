const { registerUser, loginUser, deleteUser } = require('../controllers/authController.js');
const router = require('express').Router();

router.post('/register', registerUser)
router.post('/login', loginUser)
router.delete('/delete/:id', deleteUser)


module.exports = router