const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: "Name is required",
        unique: "Name is already exists"
    },
    status: {
        type: String,
        required: "Status is required",
        default: "ACTIVE"
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date
    }
});

module.exports = {
    "CategoryModel": mongoose.model("Category", CategorySchema)
}
