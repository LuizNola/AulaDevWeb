import { createContext, FC, useContext } from "react";
import { Post, CreatePostPayload } from "../../commom/types/posts_types"
import { useMutation, useQuery, useQueryClient } from "react-query"
import {postRequests} from "../../commom/api/posts.requests";

type postsState = {
    posts: Post[]
} 

type PostContext = postsState & { 
    isLoading: boolean;
    createPost(_payload: CreatePostPayload): void;
}

const initialState: postsState = {
    posts: []
}

export const PostContext = createContext<PostContext> (
    initialState as any
)

export function usePost(){
    return useContext(PostContext)
}

export const PostProvider: FC = ({ children }) => {
    const queryClient = useQueryClient();

    const {
        data,
        isLoading
    } = useQuery(
        "post",
        () =>  postRequests.getPosts()
    )

    const mutationOptions = {
        onSuccess() {
          queryClient.invalidateQueries("post");
        }
    };

    const { mutateAsync: createPost } = useMutation(
        postRequests.createPost,
        mutationOptions
      );

    return (
        <PostContext.Provider
            value={{
                createPost,
                isLoading,
                posts: data
            }}
        >
            {children}
        </PostContext.Provider>
    )
}