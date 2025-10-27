const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['User', 'Reader'],
        default: 'User'
    }
}, {timestamps: true });

const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User;