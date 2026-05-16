const mongoose = require('mongoose');

// Define the blueprint for an Internship Application
const applicationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
        trim: true
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        trim: true
    },
    domain: {
        type: String,
        required: [true, 'Domain is required'],
        trim: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Application', applicationSchema);