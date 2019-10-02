import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchRecipes } from './actions/recipeActions.js';
import RandomRecipesContainer from './containers/RandomRecipesContainer.js';
import Login from './components/Login.js';
import Logout from './components/Logout.js';
import { getCurrentUser } from './actions/currentUsers.js'

class App extends Component {

  componentDidMount(){
    this.props.getCurrentUser()
    this.props.fetchRecipes()
  }

  render() {
    return (
      <div>
        "Hello my React App!"
        {this.props.currentUser ? <Logout /> : <Login />}
       <RandomRecipesContainer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipesReducer.recipes,
    currentUser: state.currentUsersReducer
  }
}


export default connect(mapStateToProps,{ getCurrentUser, fetchRecipes })(App);


//route
// import reactroutesr
// import {link, Route}
// /  (home)
//search - recipe results (external api)
//favorite  (internal api)
//recipe  (external/internal api)
//user show   favorite, review - model

// recipe url, image, title, favor