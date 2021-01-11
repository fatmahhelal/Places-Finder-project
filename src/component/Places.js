import React, { Component } from 'react'
import Card from './Card'
import axios from 'axios';

export default class Places extends Component {
   
    //     <Card
    //     place={}
    //     des={}
    //     onFaveToggle={() => this.props.onFaveToggle(place)}
    //     isFave={this.props.faves.includes(place)}
    //     handleDetailsClick={this.props.handleDetailsClick}
    //   />
    render() {
        console.log("Here is the send pros", this.props.Places);
        return (
            <div id="topHeader">
                <Card />
            </div>
        )
    }
}
