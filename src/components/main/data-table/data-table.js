import React, { Component } from 'react'
import ReactTable from 'react-table'

export default class DataTable extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      starData: [],
      startDate: '2018-09-07'
    }

    this.getStarData = this.getStarData.bind(this);
    this.fetchStarData = this.fetchStarData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  getStarData() {
    const data = this.state.data
    let starData = []

    for (var i = 0; i < data.length; i++) {
      let name = data[i]['name']
      let diameterMax = data[i]['estimated_diameter'].feet['estimated_diameter_max']
      let diameterMin = data[i]['estimated_diameter'].feet['estimated_diameter_min']
      let closestApproachDate = data[i]['close_approach_data'][0].close_approach_date
      let closestApproachDistance = data[i]['close_approach_data'][0].miss_distance['miles']
      let velocity = data[i]['close_approach_data'][0].relative_velocity['miles_per_hour']
      starData.push({
        'name': name, 
        'diameter_min': diameterMax,
        'diameter_max': diameterMin, 
        'closestApproachDate': closestApproachDate,
        'closestApproachDistance': closestApproachDistance,
        'velocity': velocity
      });
      this.setState({
        starData: starData
      })
    }
  }
  handleChange(event) {
    const newDate = event.target.value
    this.setState({
      startDate: newDate
    }, function() {
        this.fetchStarData()
    })
  }
  fetchStarData() {
    fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${this.state.startDate}&end_date=${this.state.startDate}&api_key=IuirzlSHcQZ1VOyF6E70C7yjOTgXP2gGgQB4BQrO`)
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({
        data: data.near_earth_objects[`${this.state.startDate}`]
      }, function() {
      	this.getStarData()
      })
      
    })
  }
  componentDidMount() {
    this.fetchStarData()
  }
  render() {
  	const columns = [{
	    Header: 'Name',
	    accessor: 'name'
	  }, {
	    Header: 'Est Diameter Max',
	    accessor: 'diameter_max'
	  }, {
	    Header: 'Est Diameter Min',
	    accessor: 'diameter_min'
	  }, {
	    Header: 'Closest Approach Date',
	    accessor: 'closestApproachDate'
	  }, {
	    Header: 'Closest Approach Distance',
	    accessor: 'closestApproachDistance'
	  }, {
	    Header: 'Velocity',
	    accessor: 'velocity'
	  }]
    return (
      <div className='datatable'>
        <div className='date'>
          <h2>{this.state.startDate}</h2>
          <div className='change-date'>
            Select a new date: 
            <input className='date-picker' type='date' 
               defaultValue={this.state.startDate}
               onChange={this.handleChange} />
          </div>
        </div>
        <div className='datatable-wrap'>
        	<ReactTable
				    data={this.state.starData}
				    showPagination={false}
				    columns={columns}
				  />
        </div>
      </div>
    )
  }
}