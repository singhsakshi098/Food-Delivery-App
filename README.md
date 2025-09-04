There are two types of export and import 

--- export default component;
--- import component from "path;

NAMED EXPORT/IMPORT

export const component;
import{component} from "path"

when needs to export multiple file then only use named export and import


# React hooks

(normal js utility function)

-- useState()
-- useEffext()
--superpowerful recat variablee and its is going to import as a named import =>>> import {useState} fro "react"

-- this is the staate varible     const [listOfRestaurant] = useState();
>>>state variable also behave as same as the normal variable
-- this is normal variable in react let listOfRestaurant= null;

This is how we can create different router in our react project
 {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
    },

    {
        path: "/about",
        element:<About />

    },
    {
        path:"/contact",
        element:<Contact />
    }

and we made the component and export it and imported to the app.js file

we have installed the npm install react-router-dom: the recent version will be downloaded

// when we want to navigate to the new page we can use anchor tag gor it like taken as a example if we want to click on
home i wanted to redirect to home page anchor tag is not a good option because it reloads the whole page

// while i am writting <Link to = "/" >>> it will not reload the page header it just refresh the component;


* there is two type of routing in web apps
- Client-Side routing
-Server-Side routing
