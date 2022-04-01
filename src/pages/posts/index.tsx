import { Box, Grid } from "@mui/material"
import { CreatePostArea } from "./components/CreatePostArea"
import { Post } from "./components/Post"
import { apiClient } from "../../services/api"
import { useEffect, useState } from "react"
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