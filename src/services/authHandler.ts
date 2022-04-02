import cookie from 'js-cookie' 

export const isLogged = () =>{
    let token = cookie.get('token');
    console.log(token)
    return (token) ? true : false;
}

export const getToken = () => {
    return cookie.get('token');
}

export const doLogin = (token: string, id: number, name: string, curso: string) => {
    cookie.set('token', token)
    cookie.set('idUsuario', id.toString())
    cookie.set('name', name)
    cookie.set('curso', curso)
    
}

export const doLogout = () => {
    cookie.remove('token')
    cookie.remove('idUsuario')
    cookie.remove('name')
    cookie.remove('curso')
}

export * as authHandler from './authHandler'