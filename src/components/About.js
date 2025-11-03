import UserClass from "./UserClass";
const About = ()=>{

    return (<div>
        <h1>About</h1>
        <p>This is the about page of stanish</p>
        {/* <User name={"Antilin Stanis (from functional component)"}/> */}
        <UserClass name ={"First"} location = {"Manalikarai (class)"}/>
        <UserClass name ={"Second"} location = {"Manalikarai (class)"}/>
    </div>)

};

export default About;