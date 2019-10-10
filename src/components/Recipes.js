import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchRecipes } from '../actions/recipesActions.js';
import { recipeShow, loadingFavorite } from '../actions/recipeActions.js';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';



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

    // Render individual recipe in Recipe Show
    handleClick = (apiId, history) => {
        console.log("now in click", apiId, history)
        this.props.recipeShow(apiId, history)
        this.props.loadingFavorite(apiId)
    }

    render() {
        
        //console.log(this.props.recipes)
        return(
            <div className="Recipes">
                <h1>Today's choice</h1>
                
                <form onSubmit={this.handleSubmit} style={{marginTop: "6%"}}>
                    Search : <TextField type="text" name="query" value={this.state.query} placeholder="e.g.burger" onChange={this.handleInputChange} style={{marginLeft: "10px", marginRight: "10px"}} />
                
                    Pick your favorite diet:
                        <Select value={this.state.diet} onChange={this.handleSelectChange}>
                            <MenuItem>Select</MenuItem>
                            <MenuItem value="all">All</MenuItem>
                            <MenuItem value="glutenfree">Gluten Free</MenuItem>
                            <MenuItem value="ketgenic">Ketogenic</MenuItem>
                            <MenuItem value="vegetarian">Vegetarian</MenuItem>
                            <MenuItem value="vegn">Vegan</MenuItem>
                            <MenuItem value="paleo">Paleo</MenuItem>
                            <MenuItem value="whole30">Whole 30</MenuItem>
                        </Select>
                    
                   
                    <input type="submit" value="Search" className="btn btn-full" style={{marginLeft: "15px"}}></input>
                    </form>


                {this.props.recipes !== null ? this.props.recipes.map(recipe => <div key={recipe.recipeId}><h2>{recipe.title}</h2><img src={recipe.image} onClick={() => this.handleClick(recipe.recipeId, this.props.hisotry)}></img></div>) : null}     

            </div>
        )
    }
}


export default connect(null, { searchRecipes, recipeShow, loadingFavorite  })(Recipes);