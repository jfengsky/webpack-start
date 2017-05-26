import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'webpack first'
    }
  }
  
  render() {
    return (
      <h1>
        {this.state.title}
        <input type="button" onClick={this.handlerClick} />
      </h1>
    );
  }

  handlerClick = e => {
    this.setState({
      title: 'webpack clicked'
    });
  }
}

Root.propTypes = {

};

export default Root;