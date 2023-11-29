import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Loading from "./components/Loading";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";
import Cart from "./components/Cart";

const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));
const App = () => {
  return (
    <Provider store={appStore}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: (
          <Suspense fallback={<Loading />}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],

    errorElement: <Error />,
  },
  ,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
