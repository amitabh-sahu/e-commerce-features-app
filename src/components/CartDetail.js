import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useStateValue } from "../utils/store";

function CartDetail() {
    const [{ myCart, totalItems }] = useStateValue();
    const [Price, setPrice] = useState(0);
    const [Discount, setDiscount] = useState(0);

    useEffect(() => {
        let price = 0;
        let discount = 0;
        myCart.forEach((ele) => {
            price += (ele.item.mrp * ele.quantity);
            discount += ((ele.item.mrp - ele.item.price) * ele.quantity);
        });
        setPrice(price);
        setDiscount(discount);
    }, [myCart, myCart.length, totalItems])

    return (
        <Card sx={{ height: 'max-content', py: 2, borderRadius: 0 }}>
            <Typography variant="h5" color="text.secondary" sx={{ px: 2 }}>PRICE DETAILS</Typography>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ px: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 2 }}>
                    <Typography variant="h6">Price ({myCart.length} item)</Typography>
                    <Typography variant="h6">₹{Price}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 2 }}>
                    <Typography variant="h6">Discount</Typography>
                    <Typography variant="h6" sx={{ color: 'green' }}>-₹{Discount}</Typography>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 2 }}>
                    <Typography variant="h5">Total Amount</Typography>
                    <Typography variant="h5">₹{Price - Discount}</Typography>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Typography variant="h6" sx={{ color: 'green' }}>You will save ₹{Discount} on this order</Typography>
            </Box>
        </Card>
    )
}

export default CartDetail;