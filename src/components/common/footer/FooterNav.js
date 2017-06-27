import React from 'react';
import { NavLink } from 'react-router-dom';

export default (props) => (
    <nav>
        <ul>
            <NavLink to="/"><li>home</li></NavLink>
            <NavLink to="/about"><li>about</li></NavLink>
            <NavLink to="/programs"><li>programs</li></NavLink>
            <NavLink to="/contact"><li>contact</li></NavLink>
        </ul>
    </nav>
);
