import React, { Component } from 'react'
import Bar from './bar'
import BarTextContent from './bar-text-content'

export default class StarChart extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      starData: [],
      startDate: '2018-09-07',
      bars: [],
      lines: []
    }

    this.getStarData = this.getStarData.bind(this);
    this.fetchStarData = this.fetchStarData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderBars = this.renderBars.bind(this);
  }
  getStarData() {
    const data = this.state.data
    let starData = []

    for (var i = 0; i < data.length; i++) {
      let name = data[i]['name']
      let url = data[i]['nasa_jpl_url']
      let closestApproach = data[i]['close_approach_data'][0].miss_distance['miles']
      starData.push({
        'name': name, 
        'closestApproach': closestApproach,
        'url': url
      });
      this.setState({
        starData: starData
      }, () => {
        this.renderBars() 
      })
    }
  }
  handleChange(event) {
    const newDate = event.target.value
    this.setState({
      startDate: newDate
    }, () => {
      this.fetchStarData()
    })
  }
  renderBars() {
    const bar = this.state.starData
    const barCount = this.state.starData.length
    let bars = bar.map((photo, i) => {
      return(
        <Bar width={100/barCount} 
         height={this.state.starData[i].closestApproach.substring(0,3)} 
         right={(100/barCount) * i}
         starName={this.state.starData[i].name}
         url={this.state.starData[i].url}
         key={i} />
      )
    })
    this.setState({
      bars: bars
    })
  }
  fetchStarData() {
    fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${this.state.startDate}&end_date=${this.state.startDate}&api_key=IuirzlSHcQZ1VOyF6E70C7yjOTgXP2gGgQB4BQrO`)
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({
        data: data.near_earth_objects[`${this.state.startDate}`]
      }, () => {
       this.getStarData() 
      })
    })
  }
  componentDidMount() {
    this.fetchStarData()
  }
  render() {
    return (
      <div className='chart'>
        <div className='date'>
          <h2>{this.state.startDate}</h2>
          <div className='change-date'>
            Select a new date: 
            <input className='date-picker' type='date' 
               defaultValue={this.state.startDate}
               onChange={this.handleChange} />
          </div>
        </div>
        <div className='chart-wrap'>
          <div className='bars'>
            <div className='bar-wrap'>
              {this.state.bars}
            </div>
          </div>
          <BarTextContent />
        </div>
        <h2>Closest asteroids to Earth</h2>
      </div>
    )
  }
}