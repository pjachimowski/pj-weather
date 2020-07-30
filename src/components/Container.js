import React, { Component } from 'react';
import Header from './Header';
import Weather from './Weather';
import NavbarLinks from './NavbarLinks';
// react-bootstrap
import Button from 'react-bootstrap/Button';

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
        <NavbarLinks />
        <main>
          <Header />
          <div className="form__group field">
            <input
              type="text"
              className="form__field"
              placeholder="Search city..."
              name="name"
              id="city-search"
              required
            />
            <label htmlFor="city-search" className="form__label">
              Search city...
            </label>
          </div>
          
          <Button type="submit" className="get-weather-btn" id="btn" variant="info">get weather</Button>{' '}
          <Weather searchItem={this.state.searchItem} />
        </main>
      </div>
    );
  }
}

export default Container;
