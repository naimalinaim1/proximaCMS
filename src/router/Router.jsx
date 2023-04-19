import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import DefaultHome from "../pages/Home/DefaultHome/DefaultHome";
import Profile from "../pages/Home/Profile/Profile";
import ChangePassword from "../pages/Home/ChangePassword/ChangePassword";
import Setting from "../pages/Home/Setting/Setting";
import Logout from "../pages/Shared/Logout/Logout";
import Activity from "../pages/Home/Activity/Activity";
import UserHelpAndSupport from "../pages/Home/UserHelpAndSupport/UserHelpAndSupport";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
        children: [
          {
            path: "/",
            element: <DefaultHome />,
          },
          {
            path: "/profile",
            element: <Profile />,
          },
          {
            path: "/change-password",
            element: <ChangePassword />,
          },
          {
            path: "/settings",
            element: <Setting />,
          },
          {
            path: "/activity",
            element: <Activity />,
          },
          {
            path: "/help",
            element: <UserHelpAndSupport />,
          },
          {
            path: "/logout",
            element: <Logout />,
          },
        ],
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
