const mongoose = require("mongoose")

const eventSchema = new mongoose.Schema({
    organizer: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    venue: {
        type: String,
        required: true,
        enum: ["club house", "society hall"],
        default : "club house"
    }
})