import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchRecipes } from '../actions/recipeActions.js';
//import Recipe from './Recipe.js'


class Recipes extends Component {
    state = {
        query: "",
        diet: ""
    }

    handleInputChange = event => {
        // searchQuery({...this.props.query, [event.target.name]: event.target.value})
        this.setState({
            query: event.target.value
        })
    }

    handleSelectChange = event => {
        this.setState({
            ...this.state, diet: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.searchRecipes(this.state)
    }

    

    render() {
        //console.log(this.props.recipes)
        return(
            <div>
                <h1>Today's choice</h1>
                
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Search or leave blank:
                        <input type="text" name="query" value={this.state.query} placeholder="e.g.burger" onChange={this.handleInputChange}></input>
                    </label>
    
                    <label>
                    Pick your favorite diet:
                        <select value={this.state.diet} onChange={this.handleSelectChange}>
                            <option>Select</option>
                            <option value="all">All</option>
                            <option value="glutenfree">Gluten Free</option>
                            <option value="ketgenic">Ketogenic</option>
                            <option value="vegetarian">Vegetarian</option>
                            <option value="vegn">Vegan</option>
                            <option value="paleo">Paleo</option>
                            <option value="whole30">Whole 30</option>
                        </select>
                    </label>
                    <input type="submit" value="Submit"></input>
                </form>


                {this.props.recipes !== null? this.props.recipes.map(recipe => <div key={recipe.recipeId}><h2>{recipe.title}</h2><img src={recipe.image}></img></div>) : null}

        

            </div>
        )
    }
}




export default connect(null, {searchRecipes})(Recipes);