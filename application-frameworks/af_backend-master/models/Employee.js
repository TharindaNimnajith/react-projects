var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({

    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String
    },
    email: {
        type: String
    },
    age: {
        type: Number
    },
    basicsalary: {
        type: Number
    }

})

module.exports = Employee = mongoose.model('Employee',employeeSchema);
