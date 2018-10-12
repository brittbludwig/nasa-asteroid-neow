import React, { Component } from 'react';

export default class Image extends Component {
constructor(props){
    super(props)
    this.state = {
      activeIndex: this.props.activeIndex,
      animateOut: this.props.animateOut
    }
  }
	componentDidUpdate(prevProps, prevState) {
	  if(prevProps.activeIndex!==this.props.activeIndex ||
	  	prevProps.animateOut!==this.props.animateOut){
	    this.setState({
	    	activeIndex: this.props.activeIndex,
	    	animateOut: this.props.animateOut
	    });
	    this.classMethod();
	  }
	}
  render() {
  	const background = this.props.bgImage;
  	const active = this.state.activeIndex ? 'is-animating-in' : ''
  	const isAnimating = this.state.animateOut ? 'is-animating-out' : ''
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