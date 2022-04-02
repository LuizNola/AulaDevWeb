import { Grid } from '@mui/material'
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { isLogged } from '../../services/authHandler';
import { FormLogin } from './components/FormLogin';
import logo from '../../assets/logo.png'

export const Login = () => {

    const navigate = useNavigate();

    useEffect(() => {
        if(isLogged()){
            return navigate("/posts")
        }
    })
    
    return(
    
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
        >
            <img src={logo} alt="" />
            <Grid item xs={3}>
                
                <FormLogin/>
            </Grid> 
        </Grid> 
    
    )
}
