import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const error = useRouteError();
    console.log(error);
   return (<div><h1>Oops..! Something went Wrong</h1>

     <h3> The error status is {error.status} and the error message is  {error?.error?.message}</h3>
   
   </div>


   )
}

export default Error;