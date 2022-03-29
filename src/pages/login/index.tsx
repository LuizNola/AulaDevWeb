import { Grid } from '@mui/material'
import { FormLogin } from './components/FormLogin';
import { Header } from '../../components/header'

const Login = () => {
    return(
        <><Header/>
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
        >
            
            <Grid item xs={3}>
                <FormLogin/>
            </Grid> 
        </Grid> 
        </>
    )
}

export default Login;