import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export const Post = () => {
  return (
    <Card sx={{ maxWidth: '30%' , mt: '1rem '}}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom  component="div">
            Felipe Nune - Sistemas de informação
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Adoro bubblesort, Aprendi graças ao leleo, uso todo dia no meu trabalho, meu sonho e levar o leleo para meu galpão e fazer alguns jogos para nos divertimos juntos :D
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
