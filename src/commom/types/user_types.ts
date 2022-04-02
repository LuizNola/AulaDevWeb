export interface User {
    id: number,
    name: string,
    curso: string,
    user: string,
    password: string
}

export type UserLogin = Pick<User, 'user' | 'password'>

export type RegisterUser = Pick<User, 'name' | 'curso' | 'user' | 'password' >

export type LoginResponse = 
Pick<User, 'name' | 'curso' | 'user' | 'id' >  &  {
        token: string
    }
