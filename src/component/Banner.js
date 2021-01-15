import React, { Component } from 'react'
import axios from 'axios'

export default class Banner extends Component {

    constructor(props) {
        super();
        this.state = {
            image_url: "https://images.unsplash.com/photo-1506111583091-becfd4bfa05d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
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
                    <div className="centered">... DISCOVER THE WORLD AROUND YOU ... </div>
                </div>
                <div class=" boot">
                    <div class="cardbanner ">
                        <img src='https://images.unsplash.com/photo-1574634534894-89d7576c8259?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' width='380px' height='450px'></img>
                        <div class="card-body">
                            <h1 class="card-text">Shopping</h1>
                        </div>
                    </div> <div class="cardbanner">
                        <img src='https://images.unsplash.com/photo-1502301103665-0b95cc738daf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' width='380px' height='450px'></img>
                        <div class="card-body">
                            <h1 class="card-text">Restaurant</h1>
                        </div>
                    </div> <div class="cardbanner">
                        <img src='https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' width='380px' height='450px'></img>
                        <div class="card-body">
                            <h1 class="card-text">Coffee</h1>
                        </div>
                    </div>
                    <div class="cardbanner ">
                        <img src='https://images.unsplash.com/photo-1501028932887-da5de53af865?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80' width='380px' height='450px'></img>
                        <div class="card-body">
                            <h1 class="card-text">Nature</h1>
                        </div>
                    </div> <div class="cardbanner">
                        <img src='https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' width='380px' height='450px'></img>
                        <div class="card-body">
                            <h1 class="card-text">Party</h1>
                        </div>
                    </div> <div class="cardbanner">
                        <img src='https://images.unsplash.com/photo-1526662756420-76da8f67f7aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' width='380px' height='450px'></img>
                        <div class="card-body">
                            <h1 class="card-text">Mountains</h1>
                        </div>
                    </div>
                </div></div>

        )
    }
}

