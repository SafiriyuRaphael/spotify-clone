import { createBrowserRouter } from "react-router"
import Login from "./pages/auth/log-in"
import SignUp from "./pages/auth/sign-up"
import Homepage from "./pages/dashboard/Homepage"

export const router = createBrowserRouter([
    {
        path: "/",
        children: [
            { Component: Homepage, index: true }
        ]
    },
    {
        path: "/auth",
        children: [
            { path: "login", Component: Login },
            { path: "signup", Component: SignUp },
        ]
    },

])