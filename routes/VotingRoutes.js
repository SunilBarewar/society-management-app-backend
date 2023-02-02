const { getActivePolls, createPoll, updateVotesCount } = require('../controllers/votingController');

const router = require('express').Router();

/*
add candidate
edit candidate
remove candidate

add vote
count vote


create poll
get Active Polls
*/

router.post("/poll/create",createPoll);
router.get("/poll/active",getActivePolls);
router.put("/poll/update/:pollID/:candidateID/:memberID",updateVotesCount);

// router.post("/vote/add", addVote)
// router.get("/vote/count", getVoteCount)

// router.post("/candidate/add",addCandidate)
// router.put("/candidate/edit",editCandidate)
// router.delete("/candidate/remove",removeCandidate)

module.exports = router