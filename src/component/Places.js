import React, { Component } from 'react'
import Card from './Card'
import axios from 'axios';

export default class Places extends Component {

    
    getPlaces = () => {
        console.log('send API');
        axios
            .get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=Love&language=en&type=restaurant&key=AIzaSyCHh5FhnJ_5HnOPfucrx62gz7tT3BYgnng
            `)
            .then((response) => {
                console.log('RESPONSE: ', response);
                console.log('DATA: ', response.data);
                
            //     <Card
            //     place={}
            //     des={}
            //     onFaveToggle={() => this.props.onFaveToggle(place)}
            //     isFave={this.props.faves.includes(place)}
            //     handleDetailsClick={this.props.handleDetailsClick}
            //   />
            })
            .catch((err) => {
                console.log('ERR: ', err);
            });
    };
    render() {
        this.getPlaces()
        return (
            <div id="topHeader">
                <Card />
            </div>
        )
    }
}
