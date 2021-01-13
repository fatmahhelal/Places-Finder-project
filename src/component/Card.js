import React, { Component } from 'react'
import axios from 'axios';


export default class Card extends Component {
  constructor(props) {
    super();
    this.state = {
      imgRef: "",
      linkRef: '',
      img_place: "https://cdn.onlinewebfonts.com/svg/img_347678.png",
      FavArry: []
    };
  }

  componentDidMount() {
    this.getLinke()
    this.getRefrencce()
  }

  getRefrencce = () => {
    if (this.props.photo) {
      // console.log(this.props.photo[0].photo_reference);
      this.setState({ imgRef: this.props.photo[0].photo_reference })
      console.log(this.props.photo[0].photo_reference);
      const photo = this.props.photo[0].photo_reference
      axios
        .get(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo}&key=AIzaSyCHh5FhnJ_5HnOPfucrx62gz7tT3BYgnng`)
        .then((response) => {
          this.setState({ img_place: response.config.url })

          console.log(response);
          console.log(response.config.url);
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

  // getFav() {
  //   var faves = [...this.state.faves];
  //   if (placendex === -1) {
  //     FavArry.push(place);
  //     console.log(`Adding ${place.name} to faves...`)
  //   } else {
  //     faves.splice(placendex, 1);
  //     console.log(`Removing ${place.name} to faves...`)
  //   }
  //   this.setState({ faves })
  // }

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
                <a href={this.state.linkRef} target="inlike">
                  <button type="button" class="btn btn-outline-success btnMore"> More
                   {/* {this.props.linke} */}
                  </button>
                </a>
                <button type="button" class="btn btn-outline-success btnMore">Favorite</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
