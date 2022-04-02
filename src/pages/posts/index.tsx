import { Grid } from "@mui/material"
import { CreatePostArea } from "./components/CreatePostArea"
import { PostProvider } from "./context"
import { PostList } from "./components/PostList"

export const Posts = () => {

    return(
        <PostProvider>
            <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            sx={{ minHeight: '100vh', mt: '3rem' }}
            >
                <CreatePostArea/>
                <PostList/>
            </Grid> 
        </PostProvider>
    )
}