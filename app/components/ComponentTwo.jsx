import React from 'react';

// Higher order component
let isAdmin = true;
// let adminComponent = (Component) => {
//   return class Admin extends React.Component {
//     render() {
//       if (isAdmin) {
//         return (
//           <div className="callout secondary">
//             <p className="alert label">Private admin info</p>
//             <Component {...this.props}></Component>
//           </div>
//         )
//       } else {
//         return null;
//       }
//     }
//   };
// }
let adminComponent = (Component) => {
  return class Admin extends Component {
    componentDidUpdate() {
      console.log('Admin componentDidUpdate');
      if (super.componentDidUpdate) {
        super.componentDidUpdate();
      }
    }

    render() {
      if (isAdmin) {
        return (
          <div className="callout secondary">
            <p className="alert label">Private admin info</p>
            {super.render()}
          </div>
        )
      } else {
        return null;
      }
    }
  };
}

class ComponentTwo extends React.Component{
  componentDidUpdate() {
    console.log('ComponentTwo componentDidUpdate');
  }

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

export default adminComponent(ComponentTwo);
