import { About } from "../pages/about";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { Posts } from "../pages/posts";

export const publicRoutes = [
    {
        path: "/", element: <Login/>
    },
    {
        path: "/sobre", element: <About/>
    },
    {
        path: "/cadastro", element: <Register/>
    },
    {
        path: "/posts", element: <Posts/>
    },
]