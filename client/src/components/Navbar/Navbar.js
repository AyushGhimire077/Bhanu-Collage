import React, { useState, useEffect, useRef } from 'react'; 
import './Navbar.css';
import { logo } from '../../assets/assets';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [underlineStyle, setUnderlineStyle] = useState({});
    const [menuOpen, setMenuOpen] = useState(false);
    const [showMenuButton, setShowMenuButton] = useState(false);
    const linksRef = useRef([]);

    const links = [
        { path: '/', name: 'Home' },
        { path: '/courses', name: 'Courses' },
        { path: '/news-events', name: 'News & Events' },
        { path: '/about-us', name: 'About Us' },
        { path: '/contact', name: 'Contact' },
        { path: '/testimonial', name: 'Testimonials' }
    ];

    const location = useLocation();

    useEffect(() => {
        const activeLinkIndex = links.findIndex(link => link.path === location.pathname);
        if (linksRef.current[activeLinkIndex]) {
            const { offsetLeft, offsetWidth } = linksRef.current[activeLinkIndex];
            setUnderlineStyle({
                width: `${offsetWidth}px`,
                transform: `translateX(${offsetLeft}px)`,
            });
        }
    }, [location.pathname, links]);

    useEffect(() => {
        const handleResize = () => {
            const isSmallScreen = window.innerWidth < 1199;
            setShowMenuButton(isSmallScreen);
            if (!isSmallScreen) {
                setMenuOpen(false); // Close menu if resizing to a larger screen
            }
        };

        handleResize(); // Set initial state
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        <>
            <div className='container'>
                <div className="logo">
                    <img src={logo} alt="College Logo" />
                </div>

                <div className='nav-com'>
                    {showMenuButton && (
                        <button 
                            className="menu-button" 
                            onClick={toggleMenu}
                            aria-expanded={menuOpen}
                        >
                            ☰
                        </button>
                    )}
                    <ul className={menuOpen || !showMenuButton ? 'open' : 'closed'}>
                        {links.map((link, index) => (
                            <li key={link.name} ref={el => linksRef.current[index] = el}>
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) => (isActive ? 'active' : '')}
                                    onClick={() => {
                                        setMenuOpen(false); // Close menu on click
                                    }}
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <div className='underline' style={underlineStyle} />
                </div>
            </div>
            <hr />
        </>
    );
};

export default Navbar;
