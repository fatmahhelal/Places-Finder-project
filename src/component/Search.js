import React, { Component } from 'react'
import axios from 'axios';
import Card from './Card'
import SearchRe from './SearchRe';

export default class Search extends Component {
 

    render() {
        console.log("this is the searchResultArry",this.props.searchResultArry);

        return (
            <div>
                <SearchRe searchResultArry={this.props.searchResultArry} />
            </div>
        )
    }
}
