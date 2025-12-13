import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.state = {
      userInfo: {},
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/AntilinStanis");
    const json = await data.json();
    this.setState({ userInfo: json });
  }

  componentDidUpdate(){
    console.log("Component did update function called!");
  }

  componentWillUnmount(){
    console.log("Component will unmount is called!");
  };
  render() {
    console.log(this.name + " render called");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <h1>Name : {name}</h1>
        <h3>Location : {location}</h3>
        <img src={avatar_url} />
      </div>
    );
  }
}

export default UserClass;
