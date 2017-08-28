import React from 'react';

let ComponentOne = React.createClass({
  propTypes: {
    count: React.PropTypes.number
  },

  getInitialState() {
    return {
      count: this.props.count
    }
  },

  getDefaultProps() {
    return {
      count: 1
    }
  },

  onClick() {
    this.setState({
      count: this.state.count + 1
    })
  },

  render() {
    return (
      <div>
        <h3>ComponentOne using React.createClass</h3>
        <p>Current count: {this.state.count}</p>
        <button className="button" onClick={this.onClick}>+1</button>
      </div>
    )
  }
});

export default ComponentOne;
