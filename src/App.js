import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchRecipes } from './actions/recipeActions.js';
import RandomRecipesCotnainer from './containers/RandomRecipesContainer.js';

class App extends Component {

  componentDidMount(){
    this.props.fetchRecipes()
  }

  render() {
    return (
      <div>
        "Hello my React App!"
        <RandomRecipesCotnainer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipesReducer.recipes
  }
}


export default connect(mapStateToProps,{ fetchRecipes })(App);
