import React, { Component } from 'react'

export default class Fav extends Component {
  constructor(props) {
    super();
    this.state = {
      isFav: false,
    };
  }

  // getFav = (e) => {
  //   this.setState({
  //     isFav: !this.state.isFav
  //   })
  //   if (!this.state.isFav) {
  //     var faves = [...this.state.FavArry];
  //     faves.push()
  //     console.log(faves)
  //     console.log("You set is as Fav");
  //   } else {
  //     console.log("unFav");
  //   }
  // }
  
  handleClick = (e) => {
    console.log('Handling Fave click!')
    this.props.getFav(this.props.place, this.state.isFav)
    this.setState({isFav: !this.state.isFav})
}

  render() {
    if (!this.state.isFav) {
      return (
        <div className='material-icons favorite_border' onClick={this.handleClick}>
          <i class="material-icons">favorite_border</i></div>
      )
    } else {
      return <div className='material-icons favorite' onClick={this.handleClick}>
        <i class="material-icons">favorite</i></div>
    }
  }
}
//   const isFave = (this.state.isFave) ? `favorite` : `favorite_border`;
//   return (
//       <div className={`material-icons ${isFave}`} onClick={this.handleClick} >
//           <p className="material-icons">{isFave}</p>
//       </div>
//   )
// }
// }