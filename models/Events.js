const mongoose = require("mongoose")

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    organizer: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    status: {
        type: String,
        required: true,
        enum: ["completed", "cancelled"], 
        default: "completed"
    },
    venue: {
        type: String,
        required: true,
    }
})

const eventModel = mongoose.model("events", eventSchema)
module.exports = eventModel