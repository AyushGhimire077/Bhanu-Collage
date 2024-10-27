const mongoose = require('mongoose');
require('dotenv').config(); // Make sure this line is present

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('DB connected');
    } catch (error) {
        console.error('DB connection error:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
