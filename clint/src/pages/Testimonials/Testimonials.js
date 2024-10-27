import React, { useState, useEffect, useRef } from 'react';
import TestimonialsList from '../../components/Testimonials/TestimonialsList';
import TestimonialForm from '../../components/Testimonials/TestimonialForm';
import axios from 'axios';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const formRef = useRef(null);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await axios.get('http://localhost:4000/testimonials');
                setTestimonials(response.data);
            } catch (error) {
                console.error('Error fetching testimonials:', error);
            }
        };

        fetchTestimonials();
    }, []);

    const addTestimonial = (newTestimonial) => {
        setTestimonials((prevTestimonials) => [...prevTestimonials, newTestimonial]);
    };

    return (
        <>
            <TestimonialsList testimonials={testimonials} formRef={formRef} />
            <div ref={formRef}>
                <TestimonialForm addTestimonial={addTestimonial} />
            </div>
        </>
    );
};

export default Testimonials;
