import React, { Component } from 'react'

export default class Fav extends Component {
  constructor(props) {
    super();
    this.state = {
      FavArry: [],
      isFav: false,
    };
  }

  getFav = (e) => {
    this.setState({
      isFav: !this.state.isFav
    })
    if (!this.state.isFav) {
      var faves = [...this.state.FavArry];
      faves.push(e)
      console.log(faves)
      console.log("You set is as Fav");
    } else {
      console.log("unFav");
    }
  }
  render() {
    // console.log("the status in rendure is", this.state.isFav);
    // const isFave = (this.state.isFave) ? `favorite` : `favorite_border`
    // const classes = ""
    if (!this.state.isFav) {
      return (
        <div className='material-icons favorite_border' onClick={() => (this.getFav())}>
          <i class="material-icons">favorite_border</i></div>
      )
    } else {
      return <div className='material-icons favorite' onClick={() => (this.getFav())}>
        <i class="material-icons">favorite</i></div>
    }
  }
}
