import React, { Component } from 'react'
import Card from './Card'

export default class Coffee extends Component {
    render() {
        const allPlaces = this.props.placesShopping.map((eachPlaces, index) => {
            return <Card placeName={eachPlaces.name} placeRating={eachPlaces.rating} placeAddress={eachPlaces.formatted_address} num={index} />;
        })
        return (
            <div id="topHeader">
                {/* <Card /> */}
                {allPlaces}
            </div>
        )
    }
}
