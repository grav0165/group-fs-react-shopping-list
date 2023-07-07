const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET route for /item
router.get('/', (req, res) => {
    const sqlQuery = `SELECT * FROM shoppinglist ORDER BY purchased, name ASC;`;
    pool.query(sqlQuery)
    .then((result) => {
        // console logging out result received from server
        console.log(`Got items back from database`, result);
        res.send(result.rows);
    })
    .catch((error) => {
        // console logging out any errors that arise 
        console.log(`Error making database query ${sqlQuery}`, error);
        res.sendStatus(500);
    })
})

// POST router
router.post('/', (req, res) => {
    const item = req.body;
    const sqlQuery = 
    `INSERT INTO shoppinglist ("name", "quantity", "unit")
    VALUES ($1, $2, $3);`;
    pool.query(sqlQuery, [item.name, item.quantity, item.unit])
    .then((result) => {
        // console logging result of POST request
        console.log(`Added creature to the database`, item);
        res.sendStatus(201);
    })
    .catch((error) => {
        // console logging out error of POST
        console.log(`Error in making database query ${sqlQuery}`, error);
        res.sendStatus(500);
    })
})

// PUT router
router.put('/:id', (req,res) => {
    console.log('Inside of updating an item 🧘‍♀️')
    let itemToUpdate = req.params.id;
    const sqlQuery = `
    UPDATE "shoppinglist"
    SET "purchased"=true
    WHERE "id"=$1;`;
    pool.query(sqlQuery, [itemToUpdate])
    .then(result => {
        res.sendStatus(200);
    })
    .catch(error => {
        console.log('Error in updating task ', error);
        res.sendStatus(500);
    })

})

// DELETE router 

module.exports = router;