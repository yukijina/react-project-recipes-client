import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchRecipes } from './actions/recipeActions.js';
import RandomRecipesContainer from './containers/RandomRecipesContainer.js';
import Login from './components/Login.js';
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
        <Login />
        <RandomRecipesContainer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipesReducer.recipes
  }
}


export default connect(mapStateToProps,{ getCurrentUser, fetchRecipes })(App);
