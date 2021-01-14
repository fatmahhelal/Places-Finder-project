import React, { Component } from 'react'
import Card from './Card'
import axios from 'axios';

export default class Places extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         FavArry: [],
    //     };
    // }

    // getFav = (place) => {
    //     this.setState({
    //         isFav: !this.state.isFav
    //     })
    //     if (!this.state.isFav) {
    //         var faves = [...this.state.FavArry];
    //         faves.push(place)
    //         console.log(faves)
    //         console.log("You set is as Fav");
    //     } else {
    //         console.log("unFav");
    //     }
    // }
    
    render() {
        const places = this.props.places

        const allPlaces = places.map((eachPlaces, index) => {
            return <Card placeName={eachPlaces.name} placeRating={eachPlaces.rating}
                placeAddress={eachPlaces.formatted_address} placeId={eachPlaces.place_id} num={index}
                photo={eachPlaces.photos} isFav={eachPlaces.isFav} getFav={this.props.getFav} place={eachPlaces}/>;
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
