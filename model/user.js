const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
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
    phone: {
        type: String,
        required: true
    },
    kind: {
        type: String,
        required: true
    },
    token: {
        type: String
    },
    expiresIn: {
        type: String
    }
});

module.exports = mongoose.model('User', userSchema);