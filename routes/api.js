const express = require('express');
const router = express.Router();

// Import your database models
const Contact = require('../models/Contact');
const Application = require('../models/Application');

// 1. Route to handle Contact Form Submissions
router.post('/contact', async (req, res) => {
    try {
        // Create a new contact using the data sent in the request body
        const newContact = new Contact(req.body);
        
        // Save it to MongoDB
        await newContact.save();
        
        // Send a success response
        res.status(201).json({ message: "Contact message saved successfully!", data: newContact });
    } catch (error) {
        // If validation fails (e.g., missing name), send an error response
        res.status(400).json({ error: error.message });
    }
});

// 2. Route to handle Internship Applications
router.post('/apply', async (req, res) => {
    try {
        const newApplication = new Application(req.body);
        await newApplication.save();
        res.status(201).json({ message: "Application submitted successfully!", data: newApplication });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// 3. Route for Admin to View All Submissions
router.get('/admin/view', async (req, res) => {
    try {
        // Fetch all contacts and applications, sorted by newest first
        const contacts = await Contact.find().sort({ createdAt: -1 });
        const applications = await Application.find().sort({ createdAt: -1 });
        
        res.status(200).json({ 
            totalContacts: contacts.length,
            contacts: contacts,
            totalApplications: applications.length,
            applications: applications 
        });
    } catch (error) {
        res.status(500).json({ error: "An error occurred while fetching data." });
    }
});

module.exports = router;