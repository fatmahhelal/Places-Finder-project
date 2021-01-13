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
    componentDidMount() {
        if (!this.props.places) {
            console.log("use local")
        } else {
            console.log("use its");
        }
    }
    render() {
        const res=this.props.places
        const allPlaces = res.map((eachPlaces, index) => {
            const photo = eachPlaces.photos
            console.log(photo);
            // const ph= photo.map((element, ind) => {
            //         console.log(element.photo_reference)
            //           console.log(element.html_attributions)
            //       });
            return <Card placeName={eachPlaces.name} placeRating={eachPlaces.rating}
                placeAddress={eachPlaces.formatted_address} num={index}
                
                photo={eachPlaces.photo} />;
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
