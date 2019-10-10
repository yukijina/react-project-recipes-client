import React, { Component } from 'react';
import { connect } from 'react-redux';
import { recipeShow } from '../actions/recipeActions';

class User extends Component {

    handleClick = (event) => {
        this.props.recipeShow(event.target.dataset.apiid, this.props.history)
    }

    
    render() {
        const user = this.props.currentUser
        const recipes = this.props.favoriteRecipes
        
        let favoriteText;
            if(recipes){
                console.log(recipes)
            favoriteText = (
                recipes.map(recipe => <li><a href="#" onClick={this.handleClick} data-apiId={recipe.api_id}>{recipe.title}</a></li>)
            )
            } else {
             favoriteText = ("You don't have any favorite recipes yet.")
           }
        

        return (
            <div className="MyAccount">
                <h2>My Account</h2>
                 {user ? <div><h2>Hello, {user.username}</h2><h3>Your Favorite Recipes:</h3></div> : null}
                <ul>{favoriteText}</ul>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUsersReducer,
        favoriteRecipes: state.currentUsersReducer.recipes
    }
}

export default connect(mapStateToProps, { recipeShow })(User);