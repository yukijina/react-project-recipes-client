import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
const renderBtn = props.isLoggedin ? <div><button><Link to="/login">Log Out</Link></button></div> : <div><button><Link to="/login">Log In</Link></button><button><Link to="/signup">Sign Up</Link></button></div>

    return (
        <div>
            <h1>Hello my React App!</h1>
                <p>Display pic and Login pop up</p>
                {renderBtn}
         </div>
   
    )
}

export default Home;