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
      });
  };

  componentDidMount() {
    this.getDate();
  }

  componentDidUpdate(prevProps) {
    if (this.props.searchItem !== prevProps.searchItem) {
      this.getDate();
    }
  }

  render() {
    return (
      <div>
        <p>I am a weather</p>
        <p>WEATHER: {this.state.weather}</p>
        <p>DESCRIPTION: {this.state.description}</p>
        <p>ICON: {this.state.icon}</p>
        <p>TEMPERATURE: {this.state.temp}</p>
        <p>FEELS LIKE: {this.state.feels_like}</p>
        <p>PRESSURE: {this.state.pressure}</p>
        <p>HUMIDITY: {this.state.humidity}</p>
        <p>WIND SPEED: {this.state.wind_speed}</p>
        <p>NAME: {this.state.name}</p>
      </div>
    );
  }
}

export default Weather;
