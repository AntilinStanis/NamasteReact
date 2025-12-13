import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";
class About extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <p>This is the about page of stanish</p>
        <UserContext.Consumer>{(data)=><h2 className="font-bold">Conext : {data.loggedInUser}</h2>}</UserContext.Consumer>
        {/* <User name={"Antilin Stanis (from functional component)"}/> */}
        <UserClass name={"First"} location={"Manalikarai (class)"} />
        {/* <UserClass name={"Second"} location={"Manalikarai (class)"} /> */}
      </div>
    );
  }
}


export default About;
