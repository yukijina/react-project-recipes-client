import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clickLike } from '../actions/recipeActions.js';


class Recipe extends Component {

    state = {
        review: ""
    }

    handleClick = (recipe, userId) => {
        console.log("like btn:", recipe, userId)
        this.props.clickLike(recipe, userId, this.state.review)
    }

    handleInputChange = (event) => {
        // this.props.updateReviewForm({...this.props.review, [event.target.name]: [event.target.value]})
        this.setState({
            review: event.target.value
        })
    }

    handleSubmit = (event, recipe, userId) => {
        event.preventDefault()
        console.log("review submit", recipe, userId, this.state.review)
        // this.props.postingReviews(this.state.review, recipe, userId)
        this.props.clickLike(recipe, userId, this.state.review)
    }

    render() {
        return(
            <div className="Recipe">
                <div>
                <h2>{this.props.recipe.title}</h2> 
                <img src={this.props.recipe.image}></img>
                </div>
                <button onClick={() => this.handleClick(this.props.recipe, this.props.userId, this.state.review)}>&#10084; Like: {this.props.favorite}</button>
                <p>Write Review:</p>
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
                <h2>Reviews: </h2>
                <form onSubmit={(event) => this.handleSubmit(event, this.props.recipe, this.props.userId)}>
                    <input type="text" name="review" value={this.state.review} onChange={this.handleInputChange}></input>
                    <input type="submit" value="Add review"></input>
                </form>

                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        recipe: state.recipeReducer.recipe,
        userId: state.currentUsersReducer.id,
        favorite: state.recipeReducer.favorite,
       // reviewData: state.recipeReducer,
        reviews: state.recipeReducer.reviews
    }
}

export default connect(mapStateToProps, { clickLike })(Recipe);