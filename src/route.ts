import { createBrowserRouter } from "react-router"
import Login from "./pages/auth/log-in"
import SignUp from "./pages/auth/sign-up"

export const router = createBrowserRouter([
    {
        path: "/auth",
        children: [
            { path: "login", Component: Login },
            { path: "signup", Component: SignUp },
        ]
    }
])