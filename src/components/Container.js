import React, { Component } from 'react';
import Header from './Header';
import Weather from './Weather';
import NoSearchResult from './NoSearchResult';
import NavbarLinks from './NavbarLinks';
import ErrorBoundary from './ErrorBoundary';
import Button from 'react-bootstrap/Button';

class Container extends Component {
  state = {
    searchInput: null,
  };

  clickHandler(e) {
    e.preventDefault();
    let value = document.getElementById('city-search').value;
    if (value) {
      this.setState({ searchInput: value });
    }
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <ErrorBoundary>
          <NavbarLinks />
          <main>
            <Header />
            <div className="form__group field">
              <input
                required
                type="text"
                className="form__field"
                placeholder="Search city..."
                name="name"
                id="city-search"
              />
              <label htmlFor="city-search" className="form__label">
                Search city...
              </label>
            </div>
            <Button
              onClick={this.clickHandler.bind(this)}
              className="get-weather-btn"
              id="btn"
              variant="info"
            >
              get weather
            </Button>
            {this.state.searchInput ? (
              <Weather searchInput={this.state.searchInput} />
            ) : (
              <NoSearchResult />
            )}
          </main>
        </ErrorBoundary>
      </div>
    );
  }
}

export default Container;
