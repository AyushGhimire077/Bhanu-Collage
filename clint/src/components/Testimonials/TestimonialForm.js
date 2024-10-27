import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import './TestimonialForm.css';

const TestimonialForm = ({ addTestimonial }) => {
    const [name, setName] = useState('');
    const [program, setProgram] = useState('');
    const [quote, setQuote] = useState('');
    const [image, setImage] = useState(null); // Change to null for file upload
    const [imagePreview, setImagePreview] = useState(''); // For previewing the image

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const testimonialData = new FormData(); 
        testimonialData.append('name', name);
        testimonialData.append('program', program);
        testimonialData.append('quote', quote);
        if (image) {
            testimonialData.append('image', image);
        }

        try {
            const response = await axios.post('http://localhost:4000/testimonials', testimonialData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Testimonial submitted:', response.data);
            addTestimonial(response.data); 
            
            toast.success('Testimonial submitted successfully!');

            setName('');
            setProgram('');
            setQuote('');
            setImage(null);
            setImagePreview('');
            window.scrollTo(0, 0);
        } catch (error) {
            console.error('Error submitting testimonial:', error);
            toast.error('Error submitting testimonial. Please try again.');
        }
    };

    return (
        <div>
            <ToastContainer position="top-right" autoClose={5000} />
            <form onSubmit={handleSubmit} className="form-container">
                <h2>Add Your Testimonial</h2>
                <div className="input-group">
                    <label className="label">Name:</label>
                    <input 
                        className="input" 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
                <div className="input-group">
                    <label className="label">Program:</label>
                    <input 
                        className="input" 
                        type="text" 
                        value={program} 
                        onChange={(e) => setProgram(e.target.value)} 
                        required
                    />
                </div>
                <div className="input-group">
                    <label className="label">Quote:</label>
                    <textarea 
                        className="textarea" 
                        value={quote} 
                        onChange={(e) => setQuote(e.target.value)} 
                        required 
                    />
                </div>
                <div className="input-group">
                    <label className="label">Image:</label>
                    <input 
                        className="input" 
                        type="file" // Change to file input
                        accept="image/*" // Accept only images
                        onChange={handleImageChange} 
                    />
                    {imagePreview && <img src={imagePreview} alt="Preview" className="image-preview" />} {/* Image preview */}
                </div>
                <button type="submit" className="button">Submit Testimonial</button>
            </form>
        </div>
    );
};

export default TestimonialForm;
