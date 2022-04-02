import { About } from "../pages/about";
import { Login } from "../pages/login";
import { Posts } from "../pages/posts";
import { Register } from "../pages/register";

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
        path: "/noapi/post", element: <Posts/>
    }
]