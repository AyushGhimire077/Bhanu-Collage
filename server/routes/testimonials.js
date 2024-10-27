// routes/testimonials.js
const express = require('express');
const Testimonial = require('../models/testimonial.js');

const router = express.Router();

// Create a new testimonial
router.post('/', async (req, res) => {
    const testimonial = new Testimonial(req.body);
    try {
        const savedTestimonial = await testimonial.save();
        res.status(201).json(savedTestimonial); // Corrected spelling here
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all testimonials
router.get('/', async (req, res) => {
    try {
        const testimonials = await Testimonial.find();
        res.json(testimonials);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
