import React, { Component } from 'react'
import Card from './Card'
import axios from 'axios';

export default class Places extends Component {
    constructor() {
        super();
        this.state = {
            res: {}
        };
    }
    render() {
        const places = this.props.places

        const allPlaces = places.map((eachPlaces, index) => {
            return <Card placeName={eachPlaces.name} placeRating={eachPlaces.rating}
                placeAddress={eachPlaces.formatted_address} placeId={eachPlaces.place_id} num={index}
                photo={eachPlaces.photos} />;
        })
        return (
            <div id="topHeader">
                {/* <Card /> */}
                {allPlaces}
                <div className='sp'></div>

            </div>
        )
    }
}
