import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.addActiveClass= this.addActiveClass.bind(this);
    this.state = {
      isActive: false
    }
  }
  addActiveClass() {
    this.setState(
      {
        isActive: !this.state.isActive
      }
    )
  }
  render() {
    return (
      <header className='challenge-header'>
        <div className="container">
          <div className='header-search'>
            <div className={this.state.isActive ? 'input-toggle input-toggle-active' : 'input-toggle'}>
              <input type='text'></input>
            </div>
            <div className='search-icon' onClick={this.addActiveClass}>
              <FaSearch />
            </div>
          </div>
        </div>
      </header>
    )
  }
}