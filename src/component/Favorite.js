import React, { Component } from 'react'
import Card from './Card'

export default class Favorite extends Component {


    render() {
        const places = this.props.places
        const allPlaces = places.map((eachPlaces, index) => {
            return <Card num={index} isFav={eachPlaces.isFav} getFav={this.props.getFav} place={eachPlaces} />;
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
