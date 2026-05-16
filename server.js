require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// --> ADD THIS LINE: Import your new routes
const apiRoutes = require('./routes/api'); 

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// --> ADD THIS LINE: Tell Express to use your routes
app.use('/', apiRoutes); 

app.get('/', (req, res) => {
    res.send('TEYZIX CORE Backend is running!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is successfully running on port ${PORT}`);
});