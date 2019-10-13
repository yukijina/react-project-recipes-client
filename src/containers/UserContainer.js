import React, { Component } from 'react';
import { connect } from 'react-redux';
import { recipeShow } from '../actions/recipeActions';
import User from '../components/User.js';

class UserContainer extends Component {
 
    render() {
        return (
            <User user={this.props.currentUser} recipes={this.props.favoriteRecipes} recipeShow={this.props.recipeShow} history={this.props.history} />
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUsersReducer,
        favoriteRecipes: state.currentUsersReducer.recipes
    }
}

export default connect(mapStateToProps, { recipeShow })(UserContainer);