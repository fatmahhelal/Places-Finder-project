import React, { Component } from 'react'
import axios from 'axios';
import './App.css';
import Banner from './component/Banner';
import Footer from './component/Footer';
import Favorite from './component/Favorite'
import Coffee from './component/Coffee'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import About from './component/About';
import Places from './component/Places';
import Mall from './component/Mall';



export default class App extends Component {
    constructor(props) {
        super();
        this.state = {
            places: {},
            placesCoffe: {},
            placesShopping: {},
            img_place: "https://img.icons8.com/ios/452/no-image.png"
        };
    }

    componentDidMount() {
        this.getPlaces()
        this.getCffe()
        this.getMall()
    }

    getPlaces = () => {
        console.log('send API');
        axios
            .get(`https://maps.googleapis.com/maps/api/place/textsearch/json?language=en&type=restaurant&key=AIzaSyCHh5FhnJ_5HnOPfucrx62gz7tT3BYgnng`)
            .then((response) => {
                this.setState({ places: response.data.results })
            })
            .catch((err) => {
                console.log('ERR: ', err);
            });
    };

    getMall = () => {
        console.log('send API');
        axios
            .get(`https://maps.googleapis.com/maps/api/place/textsearch/json?language=en&type=shopping_mall&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyCHh5FhnJ_5HnOPfucrx62gz7tT3BYgnng`)
            .then((response) => {
                this.setState({ placesShopping: response.data.results })
            })
            .catch((err) => {
                console.log('ERR: ', err);
            });
    };

    getCffe = () => {
        console.log('send API');
        axios
            .get(`https://maps.googleapis.com/maps/api/place/textsearch/json?language=en&type=cafe&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyCHh5FhnJ_5HnOPfucrx62gz7tT3BYgnng`)
            .then((response) => {
                this.setState({ placesCoffe: response.data.results })
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
                                            <Link to="/Mall" class="nav-link active" aria-current="page" href="/Mall">Mall</Link>
                                        </li>
                                            <li class="nav-item">
                                                <Link to="/Places" class="nav-link active" aria-current="page" href="/Places">Restaurant</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link to="/Coffee" class="nav-link active" aria-current="page" href="/Coffee">Coffee</Link>
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
                            <Route
                                path='/Mall'
                                render={(props) => (
                                    <Places {...props} places={this.state.placesShopping} />
                                )}
                            />
                            <Route
                                path='/Places'
                                render={(props) => (
                                    <Places {...props} places={this.state.places} fun={this.getPlaces}
                                    />
                                )}
                            />

                            <Route
                                path='/Coffee'
                                render={(props) => (
                                    <Places {...props} places={this.state.placesCoffe} />
                                )}
                            />
                            <Route exact path="/favorite" component={Favorite}></Route>
                            <Route exact path="/About" component={About}></Route>
                    </div>
                </Router>
                   
                   
                   <div >
                   <Footer className='topHeader'/>
                       </div> 
            </div>
        );
    }
}
