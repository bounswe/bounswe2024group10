import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../styles/subforumNavbar.module.css";

const SubforumNavbar = ({ subforums }) => {
    const location = useLocation(); 
    const currentPath = location.pathname.toLowerCase();

    return (
        <nav className={styles.subforumNavbar}>
            <ul>

                {subforums.map((subforum, i) => {
                    const formattedName = subforum.name.toLowerCase().replace(/\s+/g, "%20");
                    const isSelected = currentPath === `/${formattedName}`;

                    return (
                        <li
                            key={i}
                            className={isSelected ? `${styles.selected}` : ""}
                        >
                            <Link to={`/${subforum.id}`}>{subforum.name}</Link>
                        </li>
                    );
                })}

            </ul>
        </nav>
    );
};

export default SubforumNavbar;
