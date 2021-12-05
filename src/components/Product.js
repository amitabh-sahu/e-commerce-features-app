import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Product({ data }) {
    return (
        <Card sx={{ maxWidth: 250, height: 'max-content' }}>
            <CardMedia
                component="img"
                height="300"
                src={data.image}
                alt={data.title}
            />
            <CardContent>
                <Typography variant="h6" color="text.secondary">{data.brand}</Typography>
                <Typography variant="h6" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>{data.title}</Typography>
                <Box sx={{ display: 'flex' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mr: 2 }}>₹{data.price}</Typography>
                    <Typography variant="subtitle1" color="text.secondary" sx={{ textDecoration: 'line-through' }}>{data.mrp}</Typography>
                </Box>
                <Typography variant="subtitle1">{data.discount}</Typography>
            </CardContent>
        </Card>
    );
}