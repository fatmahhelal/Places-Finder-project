import React, { Component } from 'react'
import axios from 'axios';


export default class Card extends Component {
  constructor(props) {
    super();
    this.state = {
      imgRef: "",
      linkRef:"",
      img_place: "https://cdn.onlinewebfonts.com/svg/img_347678.png"
    };
  }

  componentDidMount() {
    this.getRefrencce()
    console.log("this ref", this.state.imgRef);
    console.log("this Link", this.state.linkRef);
    // const photo = this.state.imgRef
    // this.getPhotos(photo)
    
    // this.getRefrence()
    // axios.get(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${this.state.imgRef}&key=AIzaSyCHh5FhnJ_5HnOPfucrx62gz7tT3BYgnng`)
    // .then((response) => {
    //     this.setState({ img_place: response })
    //   })
  }

  //   getPhotos = (photo) => {
  //     axios
  //         .get(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo}&key=AIzaSyCHh5FhnJ_5HnOPfucrx62gz7tT3BYgnng`)
  //         .then((response) => {
  //             this.setState({ img_place: response })
  //         })
  //         .catch((err) => {
  //             console.log('ERR: ', err);
  //         });
  // };

  getRefrencce = () => {
    if (this.props.photo) {
      console.log(this.props.photo[0].photo_reference);
      console.log(this.props.photo[0].html_attributions);
      this.setState({ imgRef: this.props.photo[0].photo_reference })
      this.setState({ linkRef: this.props.photo[0].html_attributions })
    } else {
      console.log("noPhoto");

    }
  }
  render() {
    return (
      <div id="topHeader" className="boot">
        <div class="card">
          <img src={this.state.img_place} width='380px' height='300px'></img>
          <div class="card-body">
            <h1 class="card-text">{this.props.placeName}.</h1>
            <p class="card-text">{this.props.placeAddress}</p>

            <p class="card-text ratingCon"> Rating: {this.props.placeRating}/5</p>

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
