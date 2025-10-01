import "./index.css"; // Tailwind
import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { UserContext } from "./utils/UserContext";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));

const About = lazy(() => import("./components/About"));

const Contact = lazy(() => import("./components/Contact"));



const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = { name: "Sakshi Singh" };
    setUserName(data.name);
  }, []);

  return (
    <Provider store = {appStore}>
    <UserContext.Provider value={{ loggedInUser: userName , setUserName }}>
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "about", element: <About /> },
      { path: "grocery", element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense> },
      { path: "restaurants/:resId", element: <RestaurantMenu /> },
      { path: "contact", element: <Contact /> },
      { path : "/cart" , element: <Cart />}
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
