import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
const renderBtn = props.isLoggedin ? <div><button><Link to="/login" className="btn btn-full">Log Out</Link></button></div> : <div><button><Link to="/login" className="btn btn-full">Log In</Link></button><button><Link to="/signup" className="btn btn-ghost">Sign Up</Link></button></div>

    return (
        <div className="Home">
            <h1>Hello my React App!</h1>
                {renderBtn}
         </div>
   
    )
}

export default Home;