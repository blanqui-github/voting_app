const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); // req.body
const port = process.env.PORT || 3000;

// Import the router files
const userRoutes = require('./routes/user_routes');
const candidateRoutes = require('./routes/candidate_routes');

// Use the routers
app.use('/user', userRoutes);
app.use('/candidate', candidateRoutes);


app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})