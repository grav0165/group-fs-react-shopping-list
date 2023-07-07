const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.put('/', (req, res) => {
    console.log('Inside of updating all items 🧁')
    let sqlQuery = `
    UPDATE "shoppinglist"
    SET "purchased"=false`
    pool.query(sqlQuery)
    .then(result => {
        res.sendStatus(200);
    })
    .catch(error => {
        console.log('Error in updating task: ', error);
        res.sendStatus(500);
    })
})

module.exports = router;