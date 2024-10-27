import React, { useState } from 'react';
import './TestimonialsList.css';

const TestimonialsList = ({ testimonials, formRef }) => {
    const handleScrollToForm = () => {
        if (formRef.current) {
            formRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <button className="add-testimonial-button" onClick={handleScrollToForm}>
                +
            </button>
            <h1 className='mt-7 text-4xl'>Students Review</h1>
            {testimonials.map((testimonial, index) => (
                <TestimonialItem key={testimonial.id || index} testimonial={testimonial} />
            ))}
        </div>
    );
};

const TestimonialItem = ({ testimonial }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleQuote = () => {
        setIsExpanded(prevState => !prevState);
    };

    return (
        <div className="testimonial-item">
            <div className="testimonial-container">
                <img 
                    src={testimonial.image ? `http://localhost:4000/${testimonial.image}` : 'path/to/placeholder.jpg'} 
                    alt={testimonial.name || 'Testimonial placeholder'} 
                    className="testimonial-image" 
                />
                <div className="testimonial-text">
                    <h3 className="testimonial-name">{testimonial.name}</h3>
                    <p className="testimonial-program">{testimonial.program}</p>
                    <p className="testimonial-quote">
                        {isExpanded ? testimonial.quote : `${testimonial.quote.slice(0, 100)}... `}
                        {testimonial.quote.length > 100 && (
                            <span className="see-more" onClick={toggleQuote}>
                                {isExpanded ? 'see less' : 'see more'}
                            </span>
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsList;
