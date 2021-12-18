const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model("user", {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validator(value) {
            if(!validator.isEmail(value)) {
                throw new Error("Email is invalid");
            }
        }
    }
})

module.exports = User;