export type Post = {
    id: number,
    author: string,
    curso: string,
    msg: string
}

export type CreatePostPayload = Pick<Post, 'curso' | 'msg' | 'author'>;