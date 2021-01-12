import React, { Component } from 'react'
import axios from 'axios';
import Card from './Card'

export default class Search extends Component {
    constructor(props) {
        super();
        this.state = {
            searchResultArry: {},
        }
    }
    componentDidMount() {
        this.searchResult()
    }
    searchResult = () => {
        var search = this.props.searchWord
        var query = `https://maps.googleapis.com/maps/api/place/textsearch/json?language=en&input=${search}&fields=Website,photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyCHh5FhnJ_5HnOPfucrx62gz7tT3BYgnng`
        axios
            .get(query)
            .then((response) => {
                if (response.length === 0) {
                    console.log('nores: ', response.data.results);
                }
                else {
                    console.log('here re: ', response.data.results);
                    this.setState({ searchResultArry: response.data.results })
                }
            })
            .catch((err) => {
                console.log('ERR: ', err);
            });
    };

    render() {

        // var allPlaces = this.state.searchResultArry.map((eachPlaces, index) => {
        //     return <h1>Lovves</h1>
            // <Card placeName={eachPlaces.name} placeRating={eachPlaces.rating}
            //     placeAddress={eachPlaces.formatted_address} num={index}
            //     photo={eachPlaces.photos} />;
        // })
        return (
            <div>
                {/* // {allPlaces}     */}
            </div>
        )
    }
}
