require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

// Routes
const postRoutes = require('./Routes/postRoutes.js');
const categoryRoutes = require('./Routes/categoryRoutes.js');
const authRoutes = require('./Routes/authRoutes.js');

// Middlewares
const errorHandler = require('./middleware/errorHandler.js');

const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Static folder for images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/posts', postRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/auth', authRoutes);

// Health check route
app.get('/', (req, res) => res.send('API is running...'));

// Error handler
app.use(errorHandler);

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB connection failed:', err.message));

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
