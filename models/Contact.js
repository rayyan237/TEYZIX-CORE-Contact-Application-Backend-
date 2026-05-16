const mongoose = require('mongoose');

// Define the blueprint for a Contact message
const contactSchema = new mongoose.Schema({
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
    message: {
        type: String,
        required: [true, 'Message cannot be empty']
    }
}, { timestamps: true }); 
// timestamps: true automatically adds 'createdAt' and 'updatedAt' fields

module.exports = mongoose.model('Contact', contactSchema);