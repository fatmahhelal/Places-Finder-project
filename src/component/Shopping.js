import React, { Component } from 'react'
import Card from './Card'

export default class Shopping extends Component {
    // componentWillUpdate() {
    //     localStorage.setItem('places', JSON.stringify(this.state.places));
    //     localStorage.setItem('placesCoffe', JSON.stringify(this.state.placesCoffe));
    //     localStorage.setItem('placesShopping', JSON.stringify(this.state.placesShopping));
    // }
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
