const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

// Loading .env files
dotenv.config({ path: './config.env' });

const app = express();

//Dev Logging

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

//Production Handling
if (process.env.NODE_ENV === 'production') {
    //Set Static Folder
    app.use(express.static(__dirname + '/public/'));

    //Handles Single Page Application(SPA)
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

//Profile Routes
app.use('/api/v1/profile', require('./routes/profile'));

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server Running in ${process.env.NODE_ENV} and Listening On Port ${port}`);
});