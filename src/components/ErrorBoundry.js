import React, { Component } from 'react';

class ErrorBounary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1> Something went wrong. </h1>
          <h3> Please fill in correct city name</h3>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBounary;
