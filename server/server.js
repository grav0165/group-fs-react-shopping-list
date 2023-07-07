const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const itemRouter = require('./routes/item.router');
const resetRouter = require('./routes/itemReset.router')
const clearRouter = require('./routes/itemClear.router')

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
// Create your API routes in a separate file
// and plug them in here with `app.use()`
app.use('/item', itemRouter)
app.use('/itemReset', resetRouter)
app.use('/itemClear', clearRouter)

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});