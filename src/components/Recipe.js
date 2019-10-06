import React, { Component } from 'react';
import { connect } from 'react-redux';

class Recipe extends Component {
    handleClick = (recipeId) => {
        console.log("like btn:", recipeId)
    }

    render() {
        return(
            <div className="Recipe">
                <div>
                <h2>{this.props.recipe.title}</h2> 
                <img src={this.props.recipe.image}></img>
                </div>
                <button onClick={() => this.handleClick(this.props.recipe.recipeId)}>&#10084; Like</button>
                <p>Read in Minutes: {this.props.recipe.readyInMinutes}</p>
                <p>Servings: {this.props.recipe.servings}</p>
                <p>Vegetarian: {this.props.recipe.vegetarian ? "Yes" : "No" }</p>
                <p>Vegan: {this.props.recipe.vegan ? "Yes" : "No" }</p>
                <p>Gluten Free: {this.props.recipe.glutenfree ? "Yes" : "No" }</p>
                <p>Dairy Free: {this.props.recipe.dairyfree ? "Yes" : "No"}</p>
                <p>Ketogenic: {this.props.recipe.ketogenic ? "Yes" : "No" }</p>
                <p>Whole30: {this.props.recipe.whole30 ? "Yes" : "No" }</p>
                {/* <p>Instructions:{this.props.recipe.instructions}</p>
                <>this.props.ingredients.map(ing => <ul><li>{ing.name}</li><li>{ing.original}</li><li>{ing.amount}: {ing.unit}</li></ul>)}</> */}
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        recipe: state.recipeReducer.recipe
    }
}

export default connect(mapStateToProps)(Recipe);