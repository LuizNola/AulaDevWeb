import { apiClient } from "../../services/api";
import { CreatePostPayload } from "../../commom/types/posts_types";

export async function getPosts(){
    return apiClient.get("posts").then(r => r.data.posts)
}

export async function createPost(data: CreatePostPayload){
    return apiClient.post("posts", data)
}

export * as postRequests from './posts.requests'