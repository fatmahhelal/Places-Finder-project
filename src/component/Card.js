import React, { Component } from 'react'
import axios from 'axios';


export default class Card extends Component {
  constructor(props) {
    super();
    this.state = {
      img_place: "https://cdn.onlinewebfonts.com/svg/img_347678.png"
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
  //   const res=this.props.photo
  //   console.log(res[0].photo_reference);
  //  var phot= this.setState({img_place:res[0].photo_reference})

    // const ph= this.props.photo.map((element, i) => {
    //   console.log(this.props.photo)
    //   console.log(element.photo_reference)
    //     console.log(element.html_attributions)
    //    return this.setState({img_place: element.photo_reference})
    // });
    
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
