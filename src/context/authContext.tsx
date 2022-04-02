import { createContext, FC, useContext } from "react";
import { doLogin, doLogout, getToken, isLogged } from "../services/authHandler";

type AuthState = {
    isLogged: () => boolean;
};

type AuthContext = AuthState & {
    getToken: ()=>string | undefined
    doLogin: (token: string, id: number, name: string, curso: string)=>void
    doLogout: ()=>void
}

const initialState: AuthState = {
    isLogged: isLogged
}

export const AuthContext = createContext<AuthContext>({
    ...initialState,
    doLogin: doLogin,
    doLogout: doLogout,
    getToken: getToken,
    
})

export function useAuth() {
    return useContext(AuthContext)
}

export const AuthProvider: FC = ({ children }) => {
    return <AuthContext.Provider value={{isLogged, doLogin, doLogout, getToken}}> {children} </AuthContext.Provider>
}