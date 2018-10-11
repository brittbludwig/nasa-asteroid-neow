import React, { Component } from 'react';

export default class Image extends Component {
  render() {
  	const background = this.props.bgImage;
  	const active = this.props.isActive ? 'is-animating-in' : ''
  	const isAnimating = this.props.animateOut ? 'is-animating-out' : ''
  	const classes = `background ${active} ${isAnimating}`

    return (
      <div 
      	style={{backgroundImage: `url(${background})`}}
     	className={classes}
      >
      </div>
    )
  }
}