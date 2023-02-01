const mongoose = require("mongoose")


const vote_pollSchema = new mongoose.Schema({
    isActive: { type: Boolean, required: true },
    candidates: [{ type: Schema.Types.ObjectId, ref: "Candidate" }]
}, {
    timestamps: true
})

    const vote_pollModel = mongoose.model("vote_poll",vote_pollSchema)
    module.exports = vote_pollModel;