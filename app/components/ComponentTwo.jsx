import React from 'react';

class ComponentTwo extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.count
    }

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <h3>ComponentTwo extending React.Component</h3>
        <p>Current count: {this.state.count}</p>
        <button className="button" onClick={this.onClick}>+1</button>
      </div>
    )
  }
};

ComponentTwo.propTypes = {
  count: React.PropTypes.number
}

ComponentTwo.defaultProps = {
  count: 2
}

export default ComponentTwo;
