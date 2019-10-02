import React from 'react'
import { connect } from 'react-redux';
import { logout } from '../actions/currentUsers.js';

const Logout = ({ logout }) => {
    
    return (    
        <form onSubmit={logout}>
            <input type="submit" value="Log Out"></input>
        </form>
    )
}

export default connect(null, { logout })(Logout);