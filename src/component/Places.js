import React, { Component } from 'react'
import Card from './Card'
import axios from 'axios';

export default class Places extends Component {
    // componentDidMount(){
    //     this.props.fun()
    // }
    //             // console.log('RESPONSE: ', response);
    //             // console.log('Name: ', response.data.results[2].name);
    //             // console.log('Rating: ', response.data.results[2].rating);
    //             // console.log('Rating: ', response.data.results[2].formatted_address);
    //             // console.log('Name: ', response.data.results[2].photos[0].photo_reference);
    //             this.setState({ places: response.data.results })
    //         })
    //         .catch((err) => {
    //             console.log('ERR: ', err);
    //         });placeLinke={eachPlaces.photos.html_attributions}
    // };

    render() {
        const allPlaces = this.props.places.map((eachPlaces, index) => {
            return <Card placeName={eachPlaces.name} placeRating={eachPlaces.rating}
             placeAddress={eachPlaces.formatted_address} num={index} 
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
