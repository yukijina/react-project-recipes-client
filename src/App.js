import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchRecipes } from './actions/recipeActions.js';

class App extends Component {

  componentDidMount(){
    this.props.fetchRecipes()
  }
  render() {
    return (
      <div>
        "Hello my React App!"
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
