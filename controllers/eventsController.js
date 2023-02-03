const eventModel = require('../models/Events.js')

const addEvent = async (req, res) => {
    const { title, organizer, time, date, venue } = req.body

    try {
        const event = new eventModel({ title, organizer, date, time, venue });
        await event.save();
        res.status(200).json({ message: "event added successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


const cancelEvent = async (req, res) => {
    const { eventId } = req.params

    try {
        await eventModel.findByIdAndUpdate(
            { _id: eventId },
            { status: "cancelled" })
            res.status(200).json({ message : "event cancelled" });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const removeEvent = async(req,res) =>{
    const {eventId} = req.params

    try {
        await eventModel.findByIdAndDelete({_id : eventId})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    addEvent,
    cancelEvent,
    removeEvent,
    
}