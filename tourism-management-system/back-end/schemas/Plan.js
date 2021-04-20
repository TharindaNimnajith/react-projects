const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const planSchema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    contact: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    package: { type: String, required: true },
    venue: { type: String, required: true },
    price: { type: String, required: true }


});

module.exports = mongoose.model('plan', planSchema);