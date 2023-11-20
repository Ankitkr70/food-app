import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button
          className="btn"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase the Count
        </button>
        <button
          className="btn"
          onClick={() => {
            this.setState({
              count: this.state.count - 1,
            });
          }}
        >
          Decrease the Count
        </button>
        <div>
          <h2>{this.props.name}</h2>
          <h3>Email: ankit.kr70@gmail.com</h3>
          <h4>Front End Developer</h4>
        </div>
      </div>
    );
  }
}

export default User;
