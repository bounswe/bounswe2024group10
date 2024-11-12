import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/subforumNavbar.css'; 

const SubforumNavbar = ({ subforums }) => {
    return (
        <nav className="subforumNavbar">
            <ul>
                {subforums.map((subforum, i) => (
                    <li key={i}>
                        <Link to={`/${subforum.name.toLowerCase()}`}>{subforum.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default SubforumNavbar;
