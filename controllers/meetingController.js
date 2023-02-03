const meetingModel = require('../models/Meetings.js')

const addMeeting = async (req, res) => {
    const { title, time, date} = req.body

    try {
        const event = new meetingModel({ title, date, time});
        await event.save();
        res.status(200).json({ message: "meeting added successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


const cancelMeeting = async (req, res) => {
    const { meetingId } = req.params

    try {
        await meetingModel.findByIdAndUpdate(
            { _id: meetingId },
            { status: "cancelled" })
            res.status(200).json({ message : "meeting cancelled" });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const removeMeeting = async(req,res) =>{
    const {meetingId} = req.params

    try {
        await meetingModel.findByIdAndDelete({_id : meetingId})
        res.status(200).json({message : "meeting removed successfully"})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    addMeeting,
    cancelMeeting,
    removeMeeting,
}