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


    getImageAndChangeBanner = () => {
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
                <div className="bott">
                    <img src={this.state.image_url} width="100%" height="655px" alt='' />
                    <div className="centered"> DISCOVER THE WORLD WITH LOVE </div>
                </div>
                <div class=" boot">
                    <div class="cardbanner ">
                        <img alt=''></img>                    
                        <div class="card-body">
                            <h1 class="card-text">Mall</h1>
                        </div>
                    </div> <div class="cardbanner">
                    <img alt=''></img>                    
                        <div class="card-body">
                            <h1 class="card-text">Restaurant</h1>
                        </div>
                    </div> <div class="cardbanner">
                    <img alt=''></img>                    
                        <div class="card-body">
                            <h1 class="card-text">Coffee</h1>
                        </div>
                    </div>
                </div></div>

        )
    }
}

