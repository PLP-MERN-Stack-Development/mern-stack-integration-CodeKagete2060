const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(Process.env.MONGODB_URI);
        console.log(`MongoDB connected successfully: ${conn.connection.host}`)
    } catch (error) {
        console.error({ message: error.message });
        Process.exit(1);
    }
};

module.exports = connectDB; 
