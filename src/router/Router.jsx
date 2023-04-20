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
import Dashboard from "../pages/Dashboard/Dashboard";
import DefaultDashboard from "../pages/Dashboard/DefaultDashboard/DefaultDashboard";
import DHeader from "../pages/Dashboard/DHeader/DHeader";
import Preview from "../pages/Dashboard/Preview/Preview";
import DForm from "../pages/Dashboard/DForm/DForm";

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
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "",
            element: <DefaultDashboard />,
          },
          {
            path: "header",
            element: <DHeader />,
          },
          {
            path: "form",
            element: <DForm />,
          },
        ],
      },
      {
        path: "/preview",
        element: <Preview />,
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
