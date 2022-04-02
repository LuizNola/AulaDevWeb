import { usePost } from "../../context"
import { PostCard } from "../Post"

export const PostList = () => {

    const {
        isLoading,
        posts
    } = usePost();
    
    return(
        <>
            {isLoading && <h1>Carregando</h1>}
            {posts?.map((post) => {
                return( 
                    <PostCard 
                        curso={post.curso}
                        msg={post.msg}
                        author={post.author}
                        id={post.id}
                    />
                )
            })}
            
        </>
    )
}