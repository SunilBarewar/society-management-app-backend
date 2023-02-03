const { addEvent, cancelEvent, removeEvent } = require('../controllers/eventsController');

const router = require('express').Router();

router.post('/add',addEvent);
router.put('/cancel/:eventId',cancelEvent)
router.delete('/remove/:eventId',removeEvent);


module.exports = router