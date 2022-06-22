//import express
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware');
const {connectDB} = require('./config/db');
const PORT = process.env.PORT || 5000;

// Connect to database
connectDB();

//initialize app variable
const app = express();

//middleware that allows your requests to return json
app.use(express.json());

app.use(express.urlencoded({extended: false}));

//get request
app.get('/', (req, res) => {
    res.status(200).json({
        message: "Welcome to the Support Desk API"
    });
})

//Routes
//Hook up user route file to api endpoint
app.use('/api/users', require('./routes/userRoutes'));
//Hook up ticket route file to api endpoint
app.use('/api/tickets', require('./routes/ticketRoutes'));

app.use(errorHandler);

//listen in to port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));