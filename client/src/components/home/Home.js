import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <ul>
                <li><Link to="/cabinet">Cabinet</Link></li>
                <li><Link to="/cabinet/room">Room</Link></li>
            </ul>
        </div>
    )
}

export default Home;