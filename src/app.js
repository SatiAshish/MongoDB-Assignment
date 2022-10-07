const express = require('express');
const app = express();
const PORT =  8080;
const bodyParser = require('body-parser')
const connectDb = require('./db/conn')
const routes = require('./routes')

//database connection
connectDb();

//body parser
app.use(bodyParser.json())

//route setup
app.use('/api',routes)

//handle bad request
app.use((req, res) => {
    res.status(404).json({
        error: "page not found"
    })
})

//server create and listning
app.listen(PORT, () => console.log(`server listining on Port ${PORT}`));