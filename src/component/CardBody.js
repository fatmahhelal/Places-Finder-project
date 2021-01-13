import React, { Component } from 'react'
import Card from './Card'

export default class CardBody extends Component {
  constructor(props) {
    super();
    this.state = {
      imgRef: "",
      linkRef: 'More',
      img_place: "https://cdn.onlinewebfonts.com/svg/img_347678.png"
    };
  }

  componentDidMount() {
    this.getRefrencce()
  }

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
    const places = this.props.places
    const allPlaces = places.map((eachPlaces, index) => {
      return <Card placeName={eachPlaces.name} placeRating={eachPlaces.rating}
        placeAddress={eachPlaces.formatted_address} num={index}
        photo={eachPlaces.photos} />;
    })
    return (
      <div id="topHeader">
        {/* {allPlaces} */}
        <div className='sp'></div>

      </div>
)}
}
