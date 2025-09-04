 // we are creating our error page
 import {useRouteError} from "react-router-dom";

 const Error = () => {
    const err= useRouteError();

    return (
        <div>
            <h1> OOpss!!!</h1>
            <br></br>
            <h2> Something Went Wrong!!!!!</h2>
            <h3>{err.status}:{err.statusText}</h3>
        </div>
    )
 }
 export default Error;