import React from 'react';
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <ul>
                <li><Link to="/"></Link> Home</li>
                <li><Link to="/services"></Link>Services</li>
                <li><Link to="/about"></Link>About Us</li>
                <li><Link to="/contact"></Link>Contact</li>
            </ul>
            <div>&copy;2022 - Copyright by Blue Rental Cars Inc.</div>
        </footer>
    )
};

export default Footer;
