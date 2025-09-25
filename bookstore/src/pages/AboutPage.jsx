import { Link } from "react-router-dom";
import './style/HomePage.css';
import React from "react";
const AboutPage = () => {
    return (
        <div>
            <h1>This is a Aboutpage</h1>
            <p>Thanks</p>
            <Link to="/books">View Books</Link>
        </div>
    );
}
export default AboutPage;