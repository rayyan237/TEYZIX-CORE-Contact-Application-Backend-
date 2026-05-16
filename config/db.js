const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // We use await because connecting to a database takes a fraction of a second
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Successfully connected to MongoDB!');
    } catch (error) {
        console.error('Database connection failed:', error.message);
        // If the database fails to connect, we should stop the server entirely
        process.exit(1); 
    }
};

// Export the function so server.js can use it
module.exports = connectDB;