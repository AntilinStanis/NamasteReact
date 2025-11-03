import { useState } from "react";
const User = (props)=>{
    const [count] = useState(0);
    const [count2] = useState(10);
    const {name} = props; 
     return <div className="user-card">
        <h2>Count : {count}</h2>
        <h2>Count : {count2}</h2>
        <h1>Name : {name}</h1>
        <h3>Location : Manalikarai</h3>

     </div>
};

export default User;