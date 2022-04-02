
import { PrivateRouter } from "../components/privateRoute";
import { Posts } from "../pages/posts";


export const privateRoutes = [
    {
        path: "/posts", element: <PrivateRouter><Posts/></PrivateRouter>
    }
]