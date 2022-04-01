import { Grid, Typography } from '@mui/material';
import { Box, height } from '@mui/system';
import Carousel from 'react-material-ui-carousel';
import slide1 from '../../../../assets/slide1.jpg';
import slide2 from '../../../../assets/slide2.jpg';


export const SliderImages = () => {
    const items = [
        {
            img: slide1, 
            title: "Bem Vindo!",
            alt: "Seja Bem vindo ao Facetec!",
        },
        {
            img: slide2,
            title: "Explore!",
            alt: "Fique a vontade para explorar e conhecer a rede mais popular da aula do baubau",
        }
    ]
    return(
    <Carousel>
        {
            items.map((item, i) => 
            (
                <CarouselItem 
                alt={item.alt}
                img={item.img}
                title={item.title}
                />
            )
            )
        }
    </Carousel>
    )
}

interface CarouselItemProps {
    img: string;
    alt: string;
    title?: string
}
const CarouselItem = (props: CarouselItemProps) => {
    return (
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ 
            height: '80vh',
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${props.img})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }}
        >
            <Box>
            <Typography color={'#fff'} textAlign="center">
                <h2>{props.title}</h2>
                <span>{props.alt}</span>
            </Typography>

            </Box>
        </Grid>
        
    )
}