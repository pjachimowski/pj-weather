import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

componentDidCatch(error, info){
  this.setState({ hasError: true });
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

export default ErrorBoundary;
