import { Box, Container, Grid } from "@mui/material"
import { SliderImages } from "./components/carousel"
import felipinho from "../../assets/felipeIntense.jpeg"
import FQAccordion from "./components/FQAccordion"

export const About = () => {
   return(
   <>
    <SliderImages/>
    <Container maxWidth="xl">
        <Grid 
        container 
        spacing={2}
        maxWidth='xl'
        sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center', 
            mt: '3rem',
            mb: '3rem'
        }}
        >
            <Grid item xs={5}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium arcu vitae lectus blandit, eu rhoncus mi congue. Pellentesque ac varius risus, a porta turpis. Quisque molestie sagittis ante vel mattis. Phasellus nec lorem sed neque rhoncus malesuada. Mauris in auctor est. Ut fringilla mauris quis diam venenatis, commodo fringilla lorem tristique. Aliquam ultricies tincidunt suscipit.
            Morbi molestie accumsan urna non congue. Donec quis ex non mauris tincidunt commodo. Etiam turpis sapien, euismod ut molestie id, elementum et ligula. Maecenas id orci eleifend, ornare metus et, convallis ipsum. Nullam eget dolor vel leo ornare consequat. Donec eget placerat purus. Mauris ex libero, pulvinar sed magna ac, mollis dapibus velit. Nulla fermentum quam at nisl laoreet elementum.
            </Grid>
            <Grid item xs={4}>
                <Box sx={{
                    Width: '100%',
                    height: '20rem',
                    overflow: 'hidden',

                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'start'
                }}>
                    <img 
                        style={{'marginTop': '40rem', 'marginLeft': '4rem'}} 
                        src={felipinho} 
                        alt="Felipinho serião" 
                    />
                </Box>
            </Grid>
            <Grid item xs={10} >
                <FQAccordion/>
            </Grid>
        </Grid>
    </Container>
   </>
   )
}