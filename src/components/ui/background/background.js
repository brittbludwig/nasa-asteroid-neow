import React, { Component } from 'react';
import Image from './image';


export default class Background extends Component {
  constructor() {
    super();
    this.state = {
      pictures: [],
      activeIndex: null,
      animateOut: null
    }

    this.updateImage= this.updateImage.bind(this);
  }
  updateImage(index) {
    const newIndex = this.state.isActive
    console.log(newIndex)
    this.setState({ 
      activeIndex: newIndex,
      animateOut: index
    })

  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    let pictures = []

    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=IuirzlSHcQZ1VOyF6E70C7yjOTgXP2gGgQB4BQrO')
    .then(results => {
      return results.json();
    }).then(data => {
        pictures = data.photos.slice(0,5).map((photo, i) => {
        let background = photo.img_src;
        return(
          <Image key={photo.id}
               index={i}
               isActive={this.state.activeIndex===i}
               animateOut={this.state.activeIndex===i}
               bgImage={background}>
          </Image>
        )
      })
      this.setState({
        pictures: pictures,
        activeIndex: 0
      })

      this.timer = setInterval(this.updateImage, 5000);
    })

    return (
      <div>
        {this.state.pictures}
      </div>
    )
  }
}