import { apiClient } from "../../services/api";
import { CreatePostPayload } from "../types/posts_types";

export async function getPosts(){
    return await apiClient.get("posts").then(r => (r as any).posts)
}

export async function createPost(data: CreatePostPayload){
    return apiClient.post("posts", data)
}

export * as postRequests from './posts.requests'