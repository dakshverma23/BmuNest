const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { getDatabase } = require('./config/db');

// Load environment variables
dotenv.config();

const studentRoutes = require('./routes/students');
const documentRoutes = require('./routes/documents');
const alumniRoutes = require('./routes/alumni');
const announcementRoutes = require('./routes/announcements');
const timetableRoutes = require('./routes/timetables');
const db = require('./config/db'); 



// Connect to MongoDB
connectDB();


// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/students', studentRoutes);
app.use('/api/documents', documentRoutes);
app.use('/api/alumni', alumniRoutes);
app.use('/api/announcements', announcementRoutes);
app.use('/api/timetables', timetableRoutes);
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


