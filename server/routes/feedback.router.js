const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET feedback
router.get('/', (req, res) =>{
    console.log('in get');
    const sqlText = `SELECT * FROM "feedback" ORDER BY "id";`;
    pool.query(sqlText).then(response => res.send(response.rows)).catch((error) => {
            console.log('Error in get', error);
            res.sendStatus(500);
        });
});

//POST feedback to server
router.post('/', (req, res) =>{
    console.log(req.body);
    const feedback = req.body;
    console.log('In POST list', feedback);
    const sqlText = `INSERT INTO "feedback"("feeling","understanding","support","comments")
    VALUES($1, $2, $3, $4);`
    pool.query(sqlText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
        .then(results => {
            console.log('POST feedback is', feedback);
            res.sendStatus(201)
        }).catch(err =>{
            console.log('ERROR in POST', err);
            res.sendStatus(500);
        });
})

module.exports = router;