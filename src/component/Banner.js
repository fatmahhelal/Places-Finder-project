import React, { Component } from 'react'
import axios from 'axios'

export default class Banner extends Component {

    constructor(props) {
        super();
        this.state = {
            image_url: "https://codetheweb.blog/assets/img/posts/css-advanced-background-images/cover.jpg",

        };
    }

    getImageAndChangeBanner= () => {
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
                <div>
                <img src={this.state.image_url} width="100%" height="600px" alt='' onClick={this.getImageAndChangeBanner}/>
                    <div className="centered">DISCOVER THE WORLD</div>
                </div>
            </div>

        )
    }
}

