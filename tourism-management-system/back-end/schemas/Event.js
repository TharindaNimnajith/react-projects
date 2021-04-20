const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    venue: { type: String, required: true },
    pPrice: { type: String, required: true },
    image: { type: String }

});

module.exports = mongoose.model('event', eventSchema);