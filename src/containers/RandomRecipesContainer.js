import React, { Component } from 'react';
import { connect } from 'react-redux';
import Recipes from '../components/Recipes.js';


class RandomRecipesContainer extends Component {
    render() {

        return (
            <div>
                <Recipes recipes={this.props.recipes} />
                
            </div>
        )
    }
}

export default connect((state)=>({recipes: state.recipesReducer.recipes}))(RandomRecipesContainer)