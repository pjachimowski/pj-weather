import React, { Component } from 'react';
import axios from 'axios';

class Weather extends Component {
  state = {
    weather: '',
    description: '',
    icon: '',
    temp: '',
    feels_like: '',
    pressure: '',
    humidity: '',
    wind_speed: '',
    name: '',
    country: '',
    wikiCiti: '',
    wikiCitiImg: '',
  };

  getWikiCity = () => {
    axios
      .get(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${this.props.searchInput}`
      )
      .then((res) => res.data)
      .then((data) => {
        this.setState({ wikiCiti: data.extract });
        this.setState({ wikiCitiImg: data.thumbnail.source });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getData = () => {
    axios
      .get(`http://localhost:5000/?city=${this.props.searchInput}`)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error('Error');
        }
        return res;
      })
      .then((res) => res.data)
      .then((data) => {
        this.setState({ weather: data.weather[0].main });
        this.setState({ description: data.weather[0].description });
        this.setState({ icon: data.weather[0].icon });
        this.setState({ temp: data.main.temp });
        this.setState({ feels_like: data.main.feels_like });
        this.setState({ pressure: data.main.pressure });
        this.setState({ humidity: data.main.humidity });
        this.setState({ wind_speed: data.wind.speed });
        this.setState({ name: data.name });
        this.setState({ country: data.sys.country });
      })
      .catch((error) => {
        alert('Please refresh and provide correct city name');
        console.log(error);
      });
  };

  temperatureConverter = (val) => {
    let kalv = val - 273.15;
    kalv = kalv.toFixed(0);
    return kalv;
  };

  componentDidMount() {
    this.getData();
    this.getWikiCity();
  }

  componentDidUpdate(prevProps) {
    if (this.props.searchInput !== prevProps.searchInput) {
      this.getData();
      this.getWikiCity();
    }
  }

  render() {
    return (
      <section>
        <div className="welcome">
          Welcome to {this.state.name}
          <img
            alt="flag of a country"
            className="welcome-flag"
            src={`https://www.countryflags.io/${this.state.country}/shiny/48.png`}
          ></img>
        </div>

        <div className="city-img">
          <img
            alt="panorama of the city"
            className="wiki-city-img"
            src={`${this.state.wikiCitiImg}`}
          ></img>
        </div>
        <div className="city-desc">{this.state.wikiCiti}</div>
        <div className="fadedScroller_fade"></div>
        <div className="icon">
          <img
            alt="weather icon"
            src={`http://openweathermap.org/img/wn/${this.state.icon}@2x.png`}
          ></img>
          <div>
            <strong> {this.state.weather} </strong>
          </div>
          {this.state.description}
        </div>
        <div className="weather-desc">
          <i className="fas fa-temperature-high"></i>
          <p>{this.temperatureConverter(this.state.temp)} °C </p>
        </div>
        <div className="weather-details">
          <p>
            <i className="fas fa-feather-alt"></i> feels like{' '}
            <span>{this.temperatureConverter(this.state.feels_like)} °C</span>
          </p>
          <p>
            <i className="fas fa-tachometer-alt"></i> pressure{' '}
            <span>{this.state.pressure} mbar</span>{' '}
          </p>
          <p>
            <i className="fas fa-water"></i> humidity{' '}
            <span>{this.state.humidity} %</span>
          </p>
          <p>
            <i className="fas fa-wind"></i> wind speed{' '}
            <span>{this.state.wind_speed} m/sec</span>
          </p>
        </div>
      </section>
    );
  }
}

export default Weather;
