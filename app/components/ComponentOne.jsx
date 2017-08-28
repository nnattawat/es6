import React from 'react';

let ComponentOne = React.createClass({
  getInitialState() {
    return {
      count: 1
    }
  },

  render() {
    return (
      <div>
        <h3>ComponentOne using React.createClass</h3>
        <p>Current count: {this.state.count}</p>
      </div>
    )
  }
});

export default ComponentOne;
