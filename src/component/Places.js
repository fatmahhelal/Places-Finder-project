import React, { Component } from 'react'
import Card from './Card'
import axios from 'axios';

export default class Places extends Component {
    placesText = () => {
        console.log('send API');
        axios
            .get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=Love&type=restaurant&key=AIzaSyCHh5FhnJ_5HnOPfucrx62gz7tT3BYgnng
            `)
            .then((response) => {
                console.log('RESPONSE: ', response);
                console.log('DATA: ', response.data);
            })
            .catch((err) => {
                console.log('ERR: ', err);
            });
    };
    render() {
        this.placesText()
        return (
            <div>
                <Card/>
            </div>
        )
    }
}
