import React, { Component } from 'react';
import Header from './Header';
import Weather from './Weather';

class Container extends Component {
  state = {
    searchItem: 'Auckland',
  };

  componentDidMount() {
    document.querySelector('#btn').addEventListener('click', (event) => {
      let value = document.getElementById('city-search').value;
      this.setState({ searchItem: value });
    });
  }

  render() {
    return (
      <div>
        <div> I am Container</div>
        <Header />

        <Weather searchItem={this.state.searchItem} />

        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            id="city-search"
            placeholder="Search..."
          />
          <button type="submit" id="btn">
            CLICK HERE
          </button>
        </div>
      </div>
    );
  }
}

export default Container;
