import { Grid } from "@mui/material"
import { RegisterForm } from "./components/RegisterForm"

export const Register = () => {
    return (
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
        >
            
            <Grid 
            item 
            xs={3} 
            sx={{
                display: 'flex', 
                justifyContent: 'center', 
                alignContent: 'center'
            }}>
                <RegisterForm/>
            </Grid> 
        </Grid> 
    )
}