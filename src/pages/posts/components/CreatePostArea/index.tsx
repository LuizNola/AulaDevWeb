import { Box, Button, Chip, Divider, Grid, TextareaAutosize } from "@mui/material"

export const CreatePostArea = () => {
return(
    <Grid 
    item 
    xs={3} 
    sx={{
        display: 'flex', 
        flexDirection: 'column',
        width: '30%'
    }}>
        <TextareaAutosize
        style={{'resize': 'none', 'width': '100%'}}
        minRows={10}
        />
        <Box sx={{mb: '1rem'}}>
            <Button sx={{mt: '1rem', width: '10%'}} variant="contained">Enviar</Button>
            <Button sx={{mt: '1rem', width: '10%', ml: '.5rem'}} variant="contained">Limpar</Button>
        </Box>
        <Divider>
        Postagens
        </Divider>
    </Grid>
) 
}