/* jshint esversion: 6 */

// import express, cors and mongoose
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();  // to have environment variables in .env file

const app = express();  // create the express server
const port = process.env.PORT || 5000;  // port of the server

app.use(cors());  // cors middleware
app.use(express.json());  // allow to parse json as the server is sending and receiving json


const uri = process.env.ATLAS_URI;  // get the uri from the environment variable defined in the .env file

// starting the database connection using the uri in mongodb atlas dashboard
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
/*
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
};
mongoose.connect(uri, options);
*/
/*
try {
    await mongoose.connect(uri, {
        useNewUrlParser: true
    });
} catch (error) {
    handleError(error);
}
*/
/*
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).catch(error => handleError(error));
*/

const connection = mongoose.connection;  // a mongoose connection is an instance of EventEmitter class

// this adds a one time listener for the event
// this listener is invoked only the next time the event is fired, after which it is removed
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

// require users.js and exercises.js files
const usersRouter = require('./routes/users');
const exercisesRouter = require('./routes/exercises');

// use users.js and exercises.js files
// when the following routes are added to the root url, the relevant Router will be loaded
app.use('/users', usersRouter);
app.use('/exercises', exercisesRouter);

// starts the server listening on a certain port
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
