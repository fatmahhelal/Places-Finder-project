import React, { Component } from 'react'
import FavCard from './FavCard'

export default class Favorite extends Component {
    componentWillUpdate() {
        localStorage.setItem('FavArry', JSON.stringify(this.props.FavArry));
    }     
    render() {
        const places = this.props.places
        const allPlaces = places.map((eachPlaces, index) => {
            return <FavCard num={index} photo={eachPlaces.photos} getFav={this.props.getFav} place={eachPlaces} removeFav={this.props.removeFav}/>;
        })
        return (
            <div id="topHeader">
                <h1>Your Favorite List</h1>
                <button type="button" class="btn btn-outline-danger btnMore" onClick={this.props.deleteFav}> Clear List</button>
                {allPlaces}
            </div>
        )
    }
}
