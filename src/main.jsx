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
import AllEvent from "./pages/home/all events/AllEvent.jsx";
import Event from "./pages/home/all events/event/Event.jsx";
import WeProvide from "./pages/we provide/WeProvide.jsx";
import SeekhelpPage from "./pages/seek help/SeekhelpPage.jsx";
// import CardDetails from "./components/card components/card/card details/CardDetails.jsx";
// import WeProvide from "./pages/we provide/WeProvide.jsx";
// Create a BrowserRouter instance
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "allEvents",
        element: <AllEvent />,
      },
      {
        path: "allEvents/:id",
        element: <Event />,
      },
      {
        path: "signin",
        element: <Signin />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "logout",
        element: <Logout />,
      },
      {
        path: "about",
        element: <ProtectedRoute element={<About />} />, // ProtectedRoute to restrict access to the About page, only accessible to authenticated users
      },
      {
        path: "weProvide",
        element: <ProtectedRoute element={<WeProvide />} />, // ProtectedRoute to restrict access to the WeProvide page, only accessible to authenticated users
      },
      {
        path: "seek help",
        element: <ProtectedRoute element={<SeekhelpPage />} />, // ProtectedRoute to restrict access to the SeekHelp page, only accessible to authenticated users
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
