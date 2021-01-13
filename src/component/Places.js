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
    
        
    // componentWillUpdate(){
    //     this.setState({ res: this.props.places})
    // }
    // componentDidMount() {
    //     if (this.props.places.length === 0) {
    //         console.log("use local")
    //         localStorage.getItem('places');
    //         this.setState({ res:  this.props.places })

    //     } else {
    //         console.log("use props")
    //         this.setState({ res: this.props.places })
    //     }
    // }

    render() {
        const places=this.props.places
        
        const allPlaces = places.map((eachPlaces, index) => {
            return <Card placeName={eachPlaces.name} placeRating={eachPlaces.rating}
                placeAddress={eachPlaces.formatted_address} num={index}
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
