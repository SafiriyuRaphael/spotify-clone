import { createBrowserRouter } from "react-router"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"

export const router = createBrowserRouter([
    {
        path: "/auth",
        children: [
            { path: "login", Component: Login },
            { path: "signup", Component: SignUp },
        ]
    }
])