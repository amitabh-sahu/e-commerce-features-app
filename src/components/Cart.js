import React from 'react';
import CartContent from './CartContent';
import CartDetail from './CartDetail';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useStateValue } from "../utils/store";
import { Link } from "react-router-dom";

function Cart() {
    const [{ myCart, saveForLater }] = useStateValue();

    return (
        <>
            {myCart.length > 0 ? (
                <Box sx={{ width: '100%', display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '2fr 1fr' }, gap: 2 }}>
                    <Box sx={{ display: 'grid', gap: 2 }}>
                        <CartContent data={myCart} cart />
                        <CartContent data={saveForLater} />
                    </Box>
                    <CartDetail />
                </Box>) : (
                <Box sx={{ width: '100%', display: 'grid', gap: 2 }}>
                    <Card sx={{ display: 'grid', placeItems: 'center', gap: 1, py: 3, borderRadius: 0 }}>
                        <CardMedia
                            component="img"
                            src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
                            alt="empty Cart image"
                            sx={{ width: 250, height: 'auto' }}
                        />
                        <Typography gutterBottom variant="h5" component="div">
                            Missing Cart items?
                        </Typography>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" color="error">Start Shopping</Button>
                        </Link>
                    </Card>
                    <CartContent data={saveForLater} />
                </Box>
            )}
        </>
    );
}

export default Cart;