const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
    name: {
        type: String,
        required: "Name is required",
    },
    author: {
        type: String,
        required: "Author is required",
    },
    published_date: {
        type: Date,
        required: "Published Date is required",
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: "Category is required",
    },
    description: {
        type: String,
        required: "Description is required",
    },
    image: {
        type: String,
        required: "Image is required",
    },
    file: {
        type: String,
        required: "File is required",
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
    "BookModel": mongoose.model("Book", BookSchema)
}
