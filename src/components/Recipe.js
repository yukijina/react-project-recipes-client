import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clickLike, displayReview } from '../actions/recipeActions.js';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


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
        this.props.clickLike(recipe, userId, this.state.review)
        this.props.displayReview(this.state.review)
    }

    render() {
        
        const ingredients = this.props.recipe.ingredients.map(ing => {
            return (
                <ul>
                    <li>{ing.name}</li>
                    <li>{ing.original}</li>
                    <li>{ing.amount} {ing.unit}</li>
                    </ul>
                    )
            }
        )
        
        const renderReview = this.props.reviews.map(review => review !== "" ? <li key={review}>{review}</li>: null)

    return(
            <div className="Recipe">
                <GridList cellHeight={400} cols={1} style={{marginBottom: "3%"}}>
                <GridListTile>
                <img src={this.props.recipe.image}></img>
                <GridListTileBar title={this.props.recipe.title} titlePosition="top"
              actionIcon={
                <IconButton>
                  <StarBorderIcon style={{color: "#FCF3F3"}} />
                </IconButton>
              }
              actionPosition="left">
                  </GridListTileBar>
                  </GridListTile> 
                </GridList>  

                <IconButton onClick={() => this.handleClick(this.props.recipe, this.props.userId, this.state.review)} style={{color: "#e91e63"}}><Fab style={{backgroundColor: "#f8bbd0", color: "#e91e63"}}><FavoriteBorderIcon /></Fab><span style={{fontSize: "1.2rem"}}>&nbsp;Love:&nbsp;{this.props.favorite}</span></IconButton>

                <div>
                    <p>Read in Minutes: {this.props.recipe.readyInMinutes}</p>
                    <p>Servings: {this.props.recipe.servings}</p>
                    <p>Vegetarian: {this.props.recipe.vegetarian ? "Yes" : "No" }</p>
                    <p>Vegan: {this.props.recipe.vegan ? "Yes" : "No" }</p>
                    <p>Gluten Free: {this.props.recipe.glutenfree ? "Yes" : "No" }</p>
                    <p>Dairy Free: {this.props.recipe.dairyfree ? "Yes" : "No"}</p>
                    <p>Ketogenic: {this.props.recipe.ketogenic ? "Yes" : "No" }</p>
                    <p>Whole30: {this.props.recipe.whole30 ? "Yes" : "No" }</p>
                    <p>Instructions:{this.props.recipe.instructions}</p>
                    
                
                    <ul>{ingredients}</ul>
                </div>
                <form onSubmit={(event) => this.handleSubmit(event, this.props.recipe, this.props.userId)}>
                    <input type="text" name="review" value={this.state.review} onChange={this.handleInputChange}></input>
                    <input type="submit" value="Add review"></input>
                </form>
                
                {this.props.review ? `${this.props.review} by ${this.props.currentUser}` : null}

                {renderReview}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        recipe: state.recipeReducer.recipe,
        userId: state.currentUsersReducer.id,
        favorite: state.recipeReducer.favorite,
        reviews: state.recipeReducer.reviews,
        review: state.recipeReducer.review,
        currentUser: state.currentUsersReducer.username
    }
}

export default connect(mapStateToProps, { clickLike, displayReview })(Recipe);