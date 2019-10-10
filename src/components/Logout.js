import React from 'react'
import { connect } from 'react-redux';
import { logout } from '../actions/currentUsers.js';

const Logout = ({ logout }) => {
    
    return (    
        <div className="Logout">
            <form onSubmit={logout}>
                <input type="submit" value="CLICK and CHAO!" className="logoutInput"></input>   
            </form>
        </div>
    )
}

export default connect(null, { logout })(Logout);