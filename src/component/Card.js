import React, { Component } from 'react'
import axios from 'axios';
import Favorite from './Favorite';
import Fav from './Fav';


export default class Card extends Component {
  constructor(props) {
    super();
    this.state = {
      imgRef: "",
      linkRef: '',
      img_place: "https://cdn.onlinewebfonts.com/svg/img_347678.png",
      FavArry: [],
      isFav: false,
    };
  }

  componentDidMount() {
    this.getLinke()
    this.getRefrencce()
  }

  getRefrencce = () => {
    if (this.props.photo) {
      this.setState({ imgRef: this.props.photo[0].photo_reference })
      const photo = this.props.photo[0].photo_reference
      axios
        .get(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo}&key=AIzaSyCHh5FhnJ_5HnOPfucrx62gz7tT3BYgnng`)
        .then((response) => {
          this.setState({ img_place: response.config.url })
        })
        .catch((err) => {
          console.log('ERR: ', err);
        });
    } else {
      console.log("noPhoto");
    }
  }

  getLinke = () => {
    const photo = this.state.imgRef
    axios
      .get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${this.props.placeId}&fields=url,name,rating,formatted_phone_number&key=AIzaSyCHh5FhnJ_5HnOPfucrx62gz7tT3BYgnng`)
      .then((response) => {
        this.setState({ linkRef: response.data.result.url })
      })
      .catch((err) => {
        console.log('ERR: ', err);
      });
  }

// getFav = (e) => {
//   this.setState({
//     isFav: !this.state.isFav
//   })
//   if (!this.state.isFav) {
//     var faves = [...this.state.FavArry];
//     faves.push(e)
//     console.log(faves)
//     console.log("Fav");
//   }else{
//     console.log("unFav");
//   }
// }


  render() {
    return (
      <div id="topHeader" className="boot">
        <div class="card">
          <img src={this.state.img_place} width='380px' height='300px'></img>
          <div class="card-body">
            <Fav places={this.props} isFav={this.props.isFav}/>
            <h3 class="card-text">{this.props.placeName}.</h3>
            <p class="card-text">{this.props.placeAddress}</p>
            <p class="card-text ratingCon"> Rating: {this.props.placeRating}/5</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group botCon">
                <a href={this.state.linkRef} target="inlike">
                  <button type="button" class="btn btn-outline-success btnMore"> More
                   {/* {this.props.linke} */}
                  </button>
                </a>
                {/* <button type="button" class="btn btn-outline-success btnMore" onClick={() => (this.getFav(this.props))}>Favorite</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
