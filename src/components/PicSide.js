import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

export default function PicSide(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        image={props.img}
        alt={props.img}
      />
    </Card>
  );
}

