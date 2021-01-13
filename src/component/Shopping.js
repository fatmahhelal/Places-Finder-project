import React, { Component } from 'react'
import Card from './Card'

export default class Shopping extends Component {
    render() {
        const allPlaces = this.props.placesShopping.map((eachPlaces, index) => {
            return <Card placeName={eachPlaces.name} placeRating={eachPlaces.rating}
                placeAddress={eachPlaces.formatted_address}
                placeId={eachPlaces.place_id} num={index}
                photo={eachPlaces.photos} />;
        })
        return (
            <div id="topHeader">
                {/* <Card /> */}
                {allPlaces}
            </div>
        )
    }
}
