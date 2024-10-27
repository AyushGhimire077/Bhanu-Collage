import React from 'react';
import './Courses.css';

const Courses = () => {
    const courses = [
        {
            title: 'Computer Management',
            description: 'Learn about the management of computer systems and technologies in a business environment.',
            duration: '2 years',
            requirements: '10 Pass',
        },
        {
            title: 'Computer Science',
            description: 'Explore the fundamentals of computer science, programming, algorithms, and software development.',
            duration: '2 years',
            requirements: '10 Pass',
        },
        {
            title: 'Management',
            description: 'Gain skills in managing businesses, understanding organizational behavior, and strategic planning.',
            duration: '2 years',
            requirements: '10 Pass',
        },
        {
            title: 'Science',
            description: 'Study various scientific disciplines, including physics, chemistry, and biology, focusing on practical applications.',
            duration: '2 years',
            requirements: '10 Pass',
        },
    ];

    return (
        <div className="courses-container">
            <h1 className="courses-title">Our Courses</h1>
            <div className="courses-list">
                {courses.map((course, index) => (
                    <div className="course-item" key={index}>
                        <h2 className="course-title">{course.title}</h2>
                        <p className="course-description">{course.description}</p>
                        <p className="course-duration">Duration: {course.duration}</p>
                        <p className="course-requirements">Requirements: {course.requirements}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Courses;
