import React, { Component } from 'react'
import Card from './Card'

export default class Favorite extends Component {


    render() {
        return (
            <div id="topHeader">
                <h1>Your Favorite List</h1>
                <button type="button" class="btn btn-outline-danger btnMore"> Clear List</button>
                <Card/>
            </div>
        )
    }
}
