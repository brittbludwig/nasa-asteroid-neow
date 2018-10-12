import React, { Component } from 'react';
import Image from './background/image';


export default class Background extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      pictures: [],
      activeIndex: 0,
      animateOut: 3
    }
    this.updateImage = this.updateImage.bind(this);
    this.getImages = this.getImages.bind(this);
  }
  updateImage() {
    
  }
  getImages() {
    const photos = this.state.data.photos
    let pictures
    if(photos) {
      pictures = photos.slice(0,4).map((photo, i) => {
        return(
          <Image key={photo.id}
               index={i}
               isActive={this.state.activeIndex===i}
               animateOut={this.state.animateOut===i}
               bgImage={photo.img_src}>
          </Image>
        )
      })
    }
    this.setState({
      pictures: pictures
    })

    this.updateStates()
  }
  updateStates(){
    if(this.state.activeIndex <= 2) {
      this.setState(prevState => ({
        activeIndex: prevState.activeIndex + 1,
        animateOut: prevState.activeIndex
      }))
    } else {
      this.setState(prevState => ({
        activeIndex: 0,
        animateOut: prevState.activeIndex
      }))
    }
  }
  componentDidMount() {
    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=IuirzlSHcQZ1VOyF6E70C7yjOTgXP2gGgQB4BQrO')
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({
        data: data
      })
    })
    setInterval(this.getImages, 7000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <div className='backgrounds'>
        {this.state.pictures}
      </div>
    )
  }
}