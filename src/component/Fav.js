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
      console.log("Fav");
    }else{
      console.log("unFav");
    }
  }
  render() {
    console.log("the status in render is", this.state.isFav);
    const isFave = (this.state.isFave) ? `favorite` : `favorite_border`
    const classes = `material-icons ${isFave}`
    return (
      <div className={classes} onClick={() => (this.getFav())}>
        <i class="material-icons">{isFave}</i>
      </div>
    )
  }
}
