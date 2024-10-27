const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// POST /api/contact
router.post("/", async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  try {
    const newContact = new Contact({ firstName, lastName, email, phone, message });
    await newContact.save();
    res.status(201).json({ message: "Message received successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
