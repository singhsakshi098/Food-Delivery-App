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

/* 
-Parent Constructor
-parent render

    -first constructor
    -first render
    
    -second constructor
    -second render

    <DOM UPDATED - IN SINGLE BATCH>
    
    -first componentDidMoun
    -second ComponentDidMount
    
-parent componentDidMoUNT*/


## custom hooks: it is not mandatory to use but using this make our code more modular , readable and maintainable

# Redux Toolkit
 -Install @redux/toolkit and react-redux
 -Build ourOur Store 
 -Connect the Store to our app
 -Slice(CartSlice)
 -Dispatch(sction)
 -selector



 # Types Of Testing for Developer


  -- unit Testing 
  -- Integration Testing 
  -- End To End Testing = e2e testing


  # Setting up Testing in our App
   -Install React Testing Library
   -Installed jest
   -Installed Babel dependensies
   -Configure babel
   -Configure Parcel config file to Disable default babel transpilation
   - Jest configuration
   - jest -npx  jest -init
   -Install js dom  Library
   -Iclude @babel/preset-react - to make jsx work in test cases
   -Install => npm i -D @testing-library/jest-dom
   