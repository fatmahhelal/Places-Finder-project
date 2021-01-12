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
    //  const ph= this.props.photo.forEach(element => {
    //     console.log(this.props.photo)
    //     console.log(element.photo_reference)
    //       console.log(element.html_attributions)
    //   });
    
    // const ph= this.props.photo.forEach(element => {
    //   if (!element.photo_reference){
    //    console.log("canot", this.props.photo)

    //   }else{
    //    console.log(this.props.photo)
    //    console.log(element.photo_reference)
    //      console.log(element.html_attributions)
    //   }
     
    //  });
      
    return (
      <div id="topHeader" className="boot">
        <div class="card">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Place</text></svg>
        <div class="card-body">
          <h1 class="card-text">{this.props.placeName}.</h1>
          <p class="card-text">{this.props.placeAddress}</p>
          <p class="card-text">{this.props.placeRating}</p>

          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group botCon">
              <button type="button" class="btn btn-outline-success btnMore">More
                {/* {this.props.linke} */}
                </button>
              <button type="button" class="btn btn-outline-success btnMore">Favorite</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
