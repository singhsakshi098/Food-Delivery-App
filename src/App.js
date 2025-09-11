import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";



const AppLayout = () => {
    return(
        <div className="App">
            <Header />
             {/* this outlet will be filled according to the children of the path : whateevr the path it behaves like that */}
            <Outlet />

        </div>
    );
};

const appRouter = createBrowserRouter([
  {
    path: "/",                        // root path
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {        
        path:"",           // ✅ default route (for "/")
        element: <Body />
      },
      {
        path: "about",                // relative path
        element: <About />
      },
      {
        path: "contact",              // relative path
        element: <Contact />
      },
      {
        path:"/restaurants/:resId",
        element: <RestaurantMenu />
      }
    ]
  }
]);




const root= ReactDOM.createRoot(document.getElementById("root"));

// earlier we wewrw rendering the AppLayout directy
//root.render(<AppLayout />)

// now we wil provide it app router configuration here;
root.render(<RouterProvider router = {appRouter} />);