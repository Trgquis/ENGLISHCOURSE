const mongoose = require('mongoose');

// Define schema for User collection
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
    },
    avatar: {
        data: Buffer,
        contentType: String
    }
}, { timestamps: true });

// Create User model from the schema
const User = mongoose.model('User', userSchema);


module.exports = User;
