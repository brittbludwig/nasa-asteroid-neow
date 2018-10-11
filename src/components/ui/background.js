import React, { Component } from 'react';
import Image from './background/image';


export default class Background extends Component {
  constructor() {
    super();
    this.state = {
      pictures: [],
      activeIndex: 1,
      animateOut: 0
    }
  }
  componentDidMount() {
    setInterval(() => {
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
    }, 5000)
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
        pictures = data.photos.slice(0,4).map((photo, i) => {
        let background = photo.img_src;
        return(
          <Image key={photo.id}
               index={i}
               isActive={this.state.activeIndex===i}
               animateOut={this.state.animateOut===i}
               bgImage={background}>
          </Image>
        )
      })
      this.setState({
        pictures: pictures
      })
    })

    return (
      <div className='backgrounds'>
        {this.state.pictures}
      </div>
    )
  }
}