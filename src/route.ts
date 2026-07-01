import { createBrowserRouter } from "react-router"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import AuthLayout from "./layout/AuthLayout"

export const router = createBrowserRouter([
    {
        path: "/auth",
        Component: AuthLayout,
        children: [
            { path: "login", Component: Login },
            { path: "signup", Component: SignUp },
        ]
    }
])