import * as React from 'react';
import Card from '@mui/material/Card';
import { Post } from '../../../../commom/types/posts_types'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



export const PostCard = (postUser: Post) => {
  return (
    <Card sx={{width: '100%', maxWidth: '400px', mt: '1rem '}}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom  component="div">
            {postUser?.author} - {postUser?.curso}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {postUser?.msg}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
