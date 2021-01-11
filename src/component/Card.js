import React, { Component } from 'react'
import axios from 'axios';


export default class Card extends Component {
  constructor(props) {
    super();
    this.state = {
        img_place: "https://icon-library.com/images/me-icon/me-icon-20.jpg"
    };
}
  
  // componentDidMount() {
  //   const img = this.props.num
  //   axios.get(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${img}&key=AIzaSyCHh5FhnJ_5HnOPfucrx62gz7tT3BYgnng`)
  //     .then(response => this.setState({ img_place: response.data }))
  // }

  
  render() {
    return (

      <div class="card" width="15rem">
        <img src={this.state.img_place} class="card-img-top" alt="..." width="15rem"/>
        <div class="card-body">
          <h5 class="card-title">{this.props.placeName}</h5>
          <p class="card-text">{this.props.placeAddress}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"> Rating: {this.props.placeRating} of 5</li>
        </ul>
        <div class="card-body">
          <a href="#" class="btn btn-primary btnMore">More</a>
          <a href="#" class="btn btn-primary btnMore">Fav</a>
        </div>
      </div>
    )
  }
}

