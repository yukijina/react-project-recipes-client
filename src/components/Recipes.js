import React, { Component } from 'react';
import Recipe from './Recipe.js'


class Recipes extends Component {
    render() {
        console.log(this.props.recipes)
        return(
            <div>
                {this.props.recipes !== null? this.props.recipes.map(recipe => <div key={recipe.recipeId}><h2 >{recipe.title}</h2><img src={recipe.image}></img></div>) : null}
            </div>
        )
    }
}

export default Recipes;