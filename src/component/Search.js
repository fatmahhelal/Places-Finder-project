import React, { Component } from 'react'
import axios from 'axios';
import Card from './Card'

export default class Search extends Component {
    render() {
        const places = this.props.places
        const allPlaces = places.map((eachPlaces, index) => {
            return <Card num={index} photo={eachPlaces.photos} isFav={eachPlaces.isFav} getFav={this.props.getFav} place={eachPlaces} />;
        })
        return (
            <div id="topHeader">
                {allPlaces}
                <div className='sp'></div>
            </div>
        )
    }
}
