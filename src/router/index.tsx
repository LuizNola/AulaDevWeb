import { useRoutes } from 'react-router-dom'
import { publicRoutes } from './public'

export const MainRoutes= () => {
    return useRoutes([...publicRoutes])
}