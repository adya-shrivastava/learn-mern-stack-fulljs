import express from 'express';
import data from '../src/testData.json';

const router = express.Router();
const contests = data.contests.reduce((object, contest) => {
    object[contest.id] = contest;
    return object;
}, {});

router.get('/contests', (req, res) => {
    res.send({ 
        contests : contests
    });
});


router.get('/contests/:contestId', (req, res) => {
    let contest = contests[req.params.contestId];

    contest.description = 'This is a fake description ....';

    res.send(contest);
});

export default router;