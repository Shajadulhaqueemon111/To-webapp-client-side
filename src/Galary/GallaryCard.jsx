import React, { useEffect } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Aos from 'aos';
import 'aos/dist/aos.css';
const GallaryCard = ({gallary}) => {
   

    const {title,description,status,date,image}=gallary
    const imgeStyle={
        height:"300px"
    }

    
        useEffect(() => {
            Aos.init({
                duration: 1000, // Animation duration in milliseconds
                offset: 200,
            });
        }, []);

    return (
        <div data-aos="zoom-out-down">
        <div className='p-10 mx-auto'>
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        style={imgeStyle}
        image={image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {description}
        </Typography> 
        <Typography  variant="h6" color="text.secondary">
         {status}
        </Typography>
        <Typography  variant="h5" color="text.secondary">
         {date}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  
        </div>
     
        </div>
    );
     
   
};

export default GallaryCard;