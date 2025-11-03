import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    console.log(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount(){
    console.log(this.name+ " Component did mount called");
  }
  render() {
    console.log(this.name+ " render called");
    return (
      <div className="user-card">
        <h2>Count : {this.state.count}</h2>
        <button
          onClick={() => {
            let count = this.state.count + 1;
            this.setState({
                count:count
            });
          }}
        >
          Increase Count
        </button>
        <h1>Name : {this.name}</h1>
        <h3>Location : {this.props.location}</h3>
      </div>
    );
  }
}

export default UserClass;
