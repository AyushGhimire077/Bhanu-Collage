import React, { useState, useEffect } from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Contact from './pages/Contact/Contact';
import Courses from './pages/Cources/Courses';
import AboutUs from './pages/AboutUs/AboutUs';
import Home from './pages/HomePage/Home';
import NewsAndEvents from './pages/NewsEvent/NewsEvent';
import Top from './components/Top/Top';
import Testimonials from './pages/Testimonials/Testimonials';
import Loader from './components/Loader/Loader';
import { simulateFetch, getNetworkSpeed } from './simulateFetch'; // Adjust the import as needed

const App = () => {
    const [loading, setLoading] = useState(false);

    const handleFetchData = async () => {
        setLoading(true);
        const duration = getNetworkSpeed(); // Get the network speed duration
        await simulateFetch(duration); // Simulate fetching data with the duration
        setLoading(false);
    };

    useEffect(() => {
        handleFetchData(); // Call the fetch function when the app loads
    }, []);

    return (
        <Router>
            <Top />
            <Navbar />
            {loading ? (
                <Loader />
            ) : (
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/news-events" element={<NewsAndEvents />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/testimonial" element={<Testimonials />} />
                </Routes>
            )}
        </Router>
    );
};

export default App;
