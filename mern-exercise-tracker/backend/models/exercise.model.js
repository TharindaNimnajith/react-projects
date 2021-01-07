/* jshint esversion: 6 */

const mongoose = require('mongoose');  // require mongoose

// everything in mongoose starts with a schema
// each schema maps to a MongoDB collection (table) and defines the shape of the documents (rows) within that collection
const Schema = mongoose.Schema;

// exerciseSchema has 4 fields which are username, description, duration and date
// can define validations for that field username such as type, required, unique, trim, minlength etc.
const exerciseSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
}, {
    timestamps: true  // timestamps will be automatically set and updated when creating or modifying the particular field
});

const Exercise = mongoose.model('Exercise', exerciseSchema);  // to use the schema definition, the schema needs to be converted into a model

// export module in node.js
// module.exports is a special object which is included in every JS file in the node.js application by default
// module is a variable that represents current module
// exports is an object that will be exposed as a module
// whatever you assign to module.exports or exports, will be exposed as a module
module.exports = Exercise;
