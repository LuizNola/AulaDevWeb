import { Box } from "@mui/material"
import { usePost } from "../../context"
import { Post } from "../Post"

export const PostList = () => {

    const {
        isLoading,
        posts
    } = usePost();
    
    return(
        <>
            {isLoading && <h1>Carregando</h1>}
            {posts?.map((post) => {
                return <Post/>
            })}
            
        </>
    )
}