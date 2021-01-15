import React, { Component } from 'react'
import Card from './Card'

export default class Shopping extends Component {
    render() {
        const places = this.props.places
        const allPlaces = places.map((eachPlaces, index) => {
            return <Card num={index} photo={eachPlaces.photos} isFav={eachPlaces.isFav} getFav={this.props.getFav} place={eachPlaces} />;
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
