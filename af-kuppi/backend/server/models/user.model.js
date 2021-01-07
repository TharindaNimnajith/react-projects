const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    full_name: {
        type: String,
        required: "Full Name is required"
    },
    email: {
        type: String,
        required: "Email is required",
        unique: "Email is already exists"
    },
    password: {
        type: String,
        required: "Password is required",
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
    }
});

module.exports = {
    "UserModel": mongoose.model("User", UserSchema)
}
