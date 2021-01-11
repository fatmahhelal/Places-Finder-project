import React, { Component } from 'react'
import axios from 'axios'

export default class Banner extends Component {

    constructor(props) {
        super();
        this.state = {
            image_url: "https://codetheweb.blog/assets/img/posts/css-advanced-background-images/cover.jpg",
        };
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.getImageAndChangeBanner()
        }, 500)
      }
      

    getImageAndChangeBanner= () => {
        console.log('send img API');
        const API_1 = `https://api.unsplash.com/photos/random?client_id=GSDJ5G2k_J6GTdJ60QaCArDS4fFbLGTdowFNwzrCTeo`;
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
        // this.getImageAndChangeBanner()
        return (
            <div>
                <div>
                <img src={this.state.image_url} width="100%" height="600px" alt='' />
                    <div className="centered">DISCOVER THE WORLD</div>
                </div>
            </div>

        )
    }
}

