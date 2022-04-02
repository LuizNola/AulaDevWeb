import { FC } from "react"
import { Navigate, Route } from "react-router"
import { isLogged } from "../../services/authHandler"

export const PrivateRouter: FC = ({children}) => {
    const logged = isLogged();
    return (
        <>
        {!logged && <Navigate to='/'/>}
        {children}
        </>
    )
}