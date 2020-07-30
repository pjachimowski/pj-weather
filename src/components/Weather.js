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

  getDate = () => {
    axios
      .get(`http://localhost:5000/?city=${this.props.searchItem}`)
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
      });
  };

  getWikiCity = () => {
    const wikiCity = 'Auckland';
    axios
      .get(`https://en.wikipedia.org/api/rest_v1/page/summary/${wikiCity}`)
      .then((res) => res.data)
      .then((data) => {
        this.setState({ wikiCiti: data.extract });
        this.setState({ wikiCitiImg: data.thumbnail.source });
      });
  };

  temperatureConverter = (val) => {
    let kalv = val - 273.15;
    kalv = kalv.toFixed(1);
    return kalv;
  };

  componentDidMount() {
    this.getDate();
    this.getWikiCity();
  }

  componentDidUpdate(prevProps) {
    if (this.props.searchItem !== prevProps.searchItem) {
      this.getDate();
    }
  }

  render() {
    return (
      <section>
        <div className="welcome">
          Welcome to {this.state.name}
          <img
            className="welcome-flag"
            src={`https://www.countryflags.io/${this.state.country}/shiny/48.png`}
          ></img>
        </div>
        <div className="city-img">
          <img
            className="wiki-city-img"
            src={`${this.state.wikiCitiImg}`}
          ></img>
        </div>
        <div className="city-desc">{this.state.wikiCiti}</div>
        <div className="icon">
          <img
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
          <p>FEELS LIKE: {this.state.feels_like}</p>
          <p>PRESSURE: {this.state.pressure}</p>
          <p>HUMIDITY: {this.state.humidity}</p>
          <p>WIND SPEED: {this.state.wind_speed}</p>
        </div>
      </section>
    );
  }
}

export default Weather;
