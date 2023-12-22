import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
const ContactCard = ({contact}) => {

    const{name,phoneNumber,image,email}=contact;
    
    const imgeStyle={
        height:"300px"
    }

    const cardStyle={
        width:"300px"
    }
    return (
        <div className='p-8 mx-auto'>
             <Card style={cardStyle} sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        style={imgeStyle}
        image={image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <FaPhoneAlt className='text-xl font-bold text-[#B226E3]'></FaPhoneAlt>{phoneNumber}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <MdOutlineMarkEmailRead className='text-xl font-bold text-[#B226E3]'></MdOutlineMarkEmailRead>{email}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  
        </div>
    );
};

export default ContactCard;