import { useRoutes } from 'react-router-dom'
import { privateRoutes } from './private'
import { publicRoutes } from './public'

export const MainRoutes= () => {
    return useRoutes([...publicRoutes, ...privateRoutes])
}