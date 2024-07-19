import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Signin, Signup } from "./pages/index.js";
import { Provider } from "react-redux";
import { store } from "./redux/store/store.js";
import Logout from "./pages/logout/Logout.jsx";
import About from "./pages/about/About.jsx";
import { ProtectedRoute } from "./utils/ProtectedRouter.jsx";
import WeProvide from "./pages/we provide/WeProvide.jsx";

// Create a BrowserRouter instance
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        // element: <Home />,
        element: <WeProvide/>
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/about",
        element: <ProtectedRoute element={<About />} />, // ProtectedRoute to restrict access to the About page, only accessible to authenticated users
      },
      {
        path: "/services",
        element: <ProtectedRoute element={<div>Services</div>} />, // ProtectedRoute to restrict access to the Services page, only accessible to authenticated users
      },
      {
        path: "/contact",
        element: <ProtectedRoute element={<div>Contact</div>} />, // ProtectedRoute to restrict access to the Contact page, only accessible to authenticated users
      },
      { path: "*", element: <div>Not Found</div> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
