import { createBrowserRouter, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Navbar from "../components/organisms/Navbar";
import PrivateRoute from "./PrivateRoute";
import GuestRoute from "./GuestRoute";
import PageLogin from "../pages/PageLogin";
import UserRoute from "./UserRoute";

export function LocationDisplay() {
  const location = useLocation();

  return <div data-testid="location-display">{location.pathname}</div>;
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <PrivateRoute />
      </>
    ),
    children: [
      {
        path: "dashboard/*",
        element: <Home />,
      },
      {
        path: "user/*",
        element: <UserRoute />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <GuestRoute>
        <PageLogin />
      </GuestRoute>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
