export type Post = {
    id: number,
    title: string,
    curso: string,
    msg: string
}

export type CreatePostPayload = Pick<Post, 'curso' | 'msg' | 'title'>;