const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.delete('/', (req, res) => {
    console.log('Inside of deleting all items')
    let queryText=
    `DELETE FROM "shoppinglist";`;
    pool.query(queryText).then ((results) => {
        console.log('deleted all items from database!', results);
        res.sendStatus(200);
        }).catch((error) => {
        console.log('error with deleting all items', error);
        res.sendStatus(500);
        }) 
})

module.exports = router;