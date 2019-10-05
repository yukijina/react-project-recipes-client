import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchRecipes } from './actions/recipeActions.js';
import Home from './components/Home.js';
import NavBar from './components/NavBar.js';
import RandomRecipesContainer from './containers/RandomRecipesContainer.js';
import Login from './components/Login.js';
import Logout from './components/Logout.js';
import Signup from './components/Signup.js';
import { getCurrentUser } from './actions/currentUsers.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Recipe from './components/Recipe.js';

class App extends Component {

  componentDidMount(){
    this.props.getCurrentUser()
    //this.props.fetchRecipes()
  }

  
  render() {
  
    return (
      <Router>
        {this.props.isLoggedin ? <NavBar isLoggedin= {this.props.isLoggedin} /> : <Home />}
        <div className="App">

          <Switch>
            {/* <Route exact path='/' render={() => <Home isLoggedin={this.props.isLoggedin} />}/> */}
            <Route exact path='/login' component={Login} />
            <Route exact path='/logout' component={Logout}/>
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/recipes' component={RandomRecipesContainer}/>
            <Route exact path='/recipe/:id' render={() => <Recipe recipe={this.props.recipe}/>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipesReducer.recipes,
    currentUser: state.currentUsersReducer,
    isLoggedin: !!state.currentUsersReducer
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