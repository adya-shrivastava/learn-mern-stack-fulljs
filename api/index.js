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

export default router;