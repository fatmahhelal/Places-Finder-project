import React, { Component } from 'react'

export default class Fav extends Component {
  constructor(props) {
    super();
    this.state = {
      isFav: false,
    };
  }

  handleClick = (e) => {
    console.log('Handling Fave click!')
    this.setState({ isFav: !this.state.isFav })
    this.props.getFav(this.props.place, this.state.isFav)
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
