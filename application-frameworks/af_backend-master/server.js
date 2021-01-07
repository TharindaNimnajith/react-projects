const dbUrl = "mongodb+srv://group:group123@cluster0-4riju.mongodb.net/sms?retryWrites=true";


var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

//utils
app.use(bodyParser.json());
app.use(cors());


//DB Connection
mongoose
    .connect(dbUrl, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true })
    .then(() => console.log("Mongo database connected"))
    .catch(err => console.log(err));

//Routes
var EmployeeRoute = require('./routes/EmployeeRoute')





app.use('/api/employee', EmployeeRoute);


app.listen(3500, () => {
    console.log('Server is listening on port 3500')
})