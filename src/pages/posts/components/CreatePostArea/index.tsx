import { Box, Button, Divider, Grid, TextareaAutosize } from "@mui/material"
import Cookies from "js-cookie"
import { useState } from "react"
import { getToken } from "../../../../services/authHandler"
import { usePost } from "../../context"

export const CreatePostArea = () => {
const {
    createPost
} = usePost()

const  [msg, setMsg] = useState<string>("");

const cleanForm = () => {
    setMsg("")
}

const save = () => {
    if(msg !== ''){
        createPost(
            {curso: (Cookies.get('curso') || 'Err'), 
            msg: msg, 
            author: (Cookies.get('name') || 'Err')})
        cleanForm()
    }
}

return(
    <Grid 
    
    xs={3} 
    sx={{
        width: '100%',
        maxWidth: '400px',
        display: 'flex', 
        flexDirection: 'column',
        
    }}>
        <TextareaAutosize
        style={{'resize': 'none', 'width': '100%'}}
        minRows={10}
        value={msg}
        onChange={e=> { setMsg(e.target.value)}}
        />
        <Box sx={{mb: '1rem'}}>
            <Button 
            sx={{mt: '1rem', width: '10%'}} 
            variant="contained" 
            onClick={save}
            >
                Enviar
            </Button>
            
            <Button 
            sx={{mt: '1rem', width: '10%', ml: '.5rem'}} 
            variant="contained"
            onClick={cleanForm}
            >
                Limpar
            </Button>
        </Box>
        <Divider>
        Postagens
        </Divider>
    </Grid>
) 
}