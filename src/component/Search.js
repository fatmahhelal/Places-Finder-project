import React, { Component } from 'react'
import axios from 'axios';
import Card from './Card'
import SearchRe from './SearchRe';

export default class Search extends Component {
    constructor(props) {
        super();
        this.state = {
            searchResultArry: [],
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
                if (!response) {
                    console.log('no data ');
                }
                else {
                    console.log('here search re: ', response.data.results);
                    this.setState({ searchResultArry: response.data.results })
                }
            })
            .catch((err) => {
                console.log('ERR: ', err);
            });
    };

    render() {

        return (
            <div>
                <SearchRe searchResultArry={this.state.searchResultArry} />
            </div>
        )
    }
}
