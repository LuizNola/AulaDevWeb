import { Grid } from "@mui/material"
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { isLogged } from "../../services/authHandler";
import { RegisterForm } from "./components/RegisterForm"

export const Register = () => {

    const navigate = useNavigate();

    useEffect(() => {
        if(isLogged()){
            return navigate("/posts")
        }
    })

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