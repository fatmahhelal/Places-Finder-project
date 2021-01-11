import React, { Component } from 'react'
import axios from 'axios';
import './App.css';
import Banner from './component/Banner';
import Footer from './component/Footer';
import Favorite from './component/Favorite'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import About from './component/About';
import Places from './component/Places';


export default class App extends Component {
    constructor(props) {
        super();
        this.state = {
            name: "",
            rating: "",
            address: '',
            places: {},
            img_place: "https://img.icons8.com/ios/452/no-image.png"
        };
    }
    getPlaces = () => {
        console.log('send API');
        axios
            .get(`https://maps.googleapis.com/maps/api/place/textsearch/json?language=en&type=restaurant&key=AIzaSyCHh5FhnJ_5HnOPfucrx62gz7tT3BYgnng`)
            .then((response) => {
                // console.log('RESPONSE: ', response);
                // console.log('Name: ', response.data.results[2].name);
                // console.log('Rating: ', response.data.results[2].rating);
                // console.log('Rating: ', response.data.results[2].formatted_address);
                // console.log('Name: ', response.data.results[2].photos[0].photo_reference);
                this.setState({ places: response.data.results })
            })
            .catch((err) => {
                console.log('ERR: ', err);
            });
    };
    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <nav class="navbar navbar-expand-lg navbar-light Fprimary" >
                            <div class="container-fluid">
                                <a class="py-2" href="#" aria-label="Product">
                                    <Link to="/" class="nav-link active" aria-current="page"> <img src="https://cdn0.iconfinder.com/data/icons/business-and-finance-6/155/vector_285_03-01-512.png" width="24" height="24" /></Link>
                                </a>
                                {/* <a class="navbar-brand" href="#">Home</a> */}
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li class="nav-item">
                                            <Link to="/Places" class="nav-link active" aria-current="page" href="/Places" onClick={this.getPlaces()} places={this.state.places}>PLACES</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to="/Favorite" class="nav-link active" aria-current="page" href="#">FAVORITE</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to="/about" class="nav-link active" aria-current="page" >ABOUT</Link>
                                        </li>
                                    </ul>
                                    <form class="d-flex">
                                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                        <button class="btn btn-outline-success" type="submit">Search</button>
                                    </form>
                                </div>
                            </div>
                        </nav>
                        <Route exact path="/" component={Banner}></Route>
                        <Route exact path="/Places" component={Places}></Route>
                        <Route exact path="/favorite" component={Favorite}></Route>
                        <Route exact path="/About" component={About}></Route>
                    </div>
                </Router>
                <Footer />
            </div>
        );
    }
}
