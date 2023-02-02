const mongoose = require("mongoose")
const PollModel = require("../models/Vote_poll.js")
const CandidateModel = require("../models/Candidate.js")
const VoteModel = require("../models/Votes.js")
const e = require("express")


const createPoll = async (req, res) => {

    try {
        const { title, startTime, endTime, candidates } = req.body;
        if (candidates?.length > 1) {
            const poll = new PollModel({ title, startTime, endTime, candidates });
            await poll.save();
            res.status(201).json({ poll });
        } else {
            res.status(401).json({ message: " please add at least 2 candidates" })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getActivePolls = async (req, res) => {
    try {
        const result = await PollModel?.aggregate([
            {
                $match: {
                    startTime: { $lt: new Date() },
                    endTime: { $gt: new Date() }
                }
            }
        ])

        res.status(200).json({ polls: result })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updateVotesCount = async (req, res) => {
    try {
        const { pollID, candidateID, memberID } = req.params;
        const voted = await VoteModel.findOne({
            $and: [
                { poll_id: { $eq: pollID } },
                { member_id: { $eq: memberID } }
            ]
        })
        if (voted) return res.status(404).send("already voted for the poll");

        const vote = new VoteModel({ poll_id: pollID, member_id: memberID, candidate_id: candidateID })
        await vote.save();

        const poll = await PollModel.findById(pollID);
        if (!poll) return res.status(404).send("Poll not found");
        const index = poll.candidates.findIndex(c => c._id.toString() === candidateID);
        if (index === -1) return res.status(404).send("Candidate not found");

        poll.candidates[index].votes++;
        await poll.save();
        res.status(200).json(poll);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

const addVote = async (req, res) => {

}
module.exports = {
    createPoll,
    getActivePolls,
    updateVotesCount
}