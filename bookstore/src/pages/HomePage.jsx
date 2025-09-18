import { Link } from "react-router-dom";
import './style/HomePage.css';
import React from "react";
const HomePage = () => {
    return (
        <div>
            <h1>Welcome to the Bookstore</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
                nesciunt sit quidem officiis cum nostrum harum quis maiores
                libero perferendis culpa nulla laudantium aspernatur nemo totam,
                cumque ex ea architecto.</p>
            <Link to="/books">View Books</Link>
        </div>
    );
}
export default HomePage;