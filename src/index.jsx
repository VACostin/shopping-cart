import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { Home, Navbar, Products, Contact, Footer, Checkout, DarkCover } from "./components";
import store from "./store";
import "Styles/reset.css";
import "Styles/styles.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <div id="content">
          <Outlet />
        </div>
        <Footer />
        <DarkCover />
        <Checkout />
      </>
    ),
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "products",
        element: <Products />
      },

      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// eslint-disable-next-line jest/require-hook
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
