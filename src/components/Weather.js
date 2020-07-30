import React, { Component } from 'react';
import axios from 'axios';

class Weather extends Component {
  state = {
    lon: '',
  };

  getDate = () => {
    axios
      .get(`http://localhost:5000/?city=${this.props.searchItem}`)
      .then((res) => res.data)
      .then((data) => {
        this.setState({ lon: data.coord.lon });
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
        <p>{this.state.lon}</p>
      </div>
    );
  }
}

export default Weather;
