import React, { Component } from 'react'
import axios from 'axios'

export default class Banner extends Component {

    constructor(props) {
        super();
        this.state = {
            image_url: "",

        };
    }

    getImageAndChangeBackground = () => {
        console.log('send img API');

        const API_1 = `https://api.unsplash.com/photos/random?client_id=KQeM1A0CAOF8KU5Q71kEGH_2xKVAtov_c0EkQdxsb4s`;
        axios
            .get(API_1)
            .then((response) => {
                this.setState({ image_url: response.data.urls.regular })
            })
            .catch((err) => {
                console.log('ERR: ', err);
            });
    };

    render() {
        return (
            <div>

                <img src={this.state.image_url} alt='' />

            </div>

        )
    }
}
<div class="bg-light shadow-sm mx-auto" style={{ width: '80%', height: '300px', 'border-radius': '21px 21px 0 0' }}></div>

