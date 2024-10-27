const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');

// All required modules
const connectDB = require('./config/db');
const Testimonial = require('./models/testimonial');
const Contact = require('./models/Contact'); 

const app = express();
const port = 4000;

// Middleware
app.use(cors({
    origin:'*',
    methods:['GET','POST'],
    allowedHeaders:['Content-Type'],
}));

app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

// Configure multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage });

// Database connection
connectDB();

// Testimonial POST endpoint
app.post('/testimonials', upload.single('image'), async (req, res) => {
    const testimonial = new Testimonial({
        name: req.body.name,
        program: req.body.program,
        quote: req.body.quote,
        image: req.file ? req.file.path : null
    });

    try {
        const savedTestimonial = await testimonial.save();
        res.status(201).json(savedTestimonial);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Testimonial GET endpoint
app.get('/testimonials', async (req, res) => {
    try {
        const testimonials = await Testimonial.find();
        res.json(testimonials);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Contact POST endpoint
app.post('/api/contact', async (req, res) => { // Corrected endpoint
    const { firstName, lastName, email, phone, message } = req.body;

    const contact = new Contact({
        firstName,
        lastName,
        email,
        phone,
        message
    });

    try {
        const savedContact = await contact.save();
        res.status(201).json({ message: "Message received successfully", savedContact });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Server listener
app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
});
