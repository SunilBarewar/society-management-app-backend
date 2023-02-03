const { addMeeting, cancelMeeting, removeMeeting } = require('../controllers/meetingController');

const router = require('express').Router();

router.post('/add',addMeeting);
router.put('/cancel/:meetingId',cancelMeeting)
router.delete('/remove/:meetingId',removeMeeting);


module.exports = router