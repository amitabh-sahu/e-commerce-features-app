import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { useStateValue } from "../utils/store";
import { SET_CART, SET_TOTAL_ITEMS } from '../utils/constants'

export default function Product({ data }) {
    const [{ myCart, totalItems }, dispatch] = useStateValue();
    const addToCartHandler = () => {
        const targetIndex = myCart.findIndex((ele) => ele.item === data);
        if (targetIndex === -1) {
            myCart.push({ item: data, quantity: 1 });
            dispatch({ type: SET_CART, payload: myCart });
            dispatch({ type: SET_TOTAL_ITEMS, payload: (totalItems + 1) });
        }
    };

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
                    <Typography variant="subtitle1" color="text.secondary" sx={{ textDecoration: 'line-through' }}>₹{data.mrp}</Typography>
                </Box>
                <Typography variant="subtitle1">{data.discount}</Typography>
                <Button variant="contained" sx={{ mt: 1 }} onClick={addToCartHandler}>Add to Cart</Button>
            </CardContent>
        </Card>
    );
}