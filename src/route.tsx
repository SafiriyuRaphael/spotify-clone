import { createBrowserRouter } from "react-router";
import Login from "./pages/auth/log-in";
import SignUp from "./pages/auth/sign-up";
import Homepage from "./pages/dashboard/Homepage";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import Music from "./pages/dashboard/Music";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { Component: Homepage, index: true },
      { Component: Music, path: "music" },
    ],
  },
  {
    path: "/auth",
    children: [
      { path: "login", Component: Login },
      { path: "signup", Component: SignUp },
    ],
  },
]);
