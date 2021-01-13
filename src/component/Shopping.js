import React, { Component } from 'react'
import Card from './Card'

export default class Shopping extends Component {
    componentDidMount() {
        localStorage.setItem('placesShopping', JSON.stringify(this.props.placesShopping));
    }
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
