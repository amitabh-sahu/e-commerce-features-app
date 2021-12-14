import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { useStateValue } from "../utils/store";
import { SET_CART, SET_SAVE_LATER, SET_TOTAL_ITEMS } from '../utils/constants'

function CartProduct({ data, index, target, cart }) {
    const [{ myCart, saveForLater, totalItems }, dispatch] = useStateValue();

    const decreaseHandler = () => {
        if (data[index].quantity > 1) {
            data[index].quantity -= 1;
            cart ? dispatch({ type: SET_CART, payload: data }) : dispatch({ type: SET_SAVE_LATER, payload: data });
            dispatch({ type: SET_TOTAL_ITEMS, payload: (totalItems - 1) });
        }
    };

    const increaseHandler = () => {
        data[index].quantity += 1;
        dispatch({ type: SET_CART, payload: data });
        dispatch({ type: SET_TOTAL_ITEMS, payload: (totalItems + 1) });
    };

    const removeHandler = () => {
        const newData = data.filter((each) => each.item !== target.item);
        cart ? dispatch({ type: SET_CART, payload: newData }) : dispatch({ type: SET_SAVE_LATER, payload: newData });
        dispatch({ type: SET_TOTAL_ITEMS, payload: (totalItems - target.quantity) });
    };

    const saveForLaterHandler = () => {
        saveForLater.push(target);
        const newCart = data.filter((each) => each.item !== target.item);
        dispatch({ type: SET_CART, payload: newCart });
        dispatch({ type: SET_SAVE_LATER, payload: saveForLater });
    };

    const moveToCartHandler = () => {
        myCart.push(target);
        const newSaveForLater = data.filter((each) => each.item !== target.item);
        dispatch({ type: SET_CART, payload: myCart });
        dispatch({ type: SET_SAVE_LATER, payload: newSaveForLater });
    };

    return (
        <Box>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ display: 'flex', px: 2 }}>
                <CardMedia
                    component="img"
                    src={target.item.image}
                    alt={target.item.title}
                    sx={{ width: 100, height: 'auto' }}
                />
                <CardContent>
                    <Typography variant="h6" color="text.secondary">{target.item.brand}</Typography>
                    <Typography variant="h6" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>{target.item.title}</Typography>
                    <Box sx={{ display: 'flex' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mr: 2 }}>₹{target.item.price}</Typography>
                        <Typography variant="subtitle1" color="text.secondary" sx={{ textDecoration: 'line-through' }}>₹{target.item.mrp}</Typography>
                        <Typography variant="subtitle1" sx={{ color: 'green', ml: 2 }}>{target.item.discount}</Typography>
                    </Box>
                </CardContent>
            </Box>
            <CardActions sx={{ mt: 1 }}>
                <Box sx={{ display: 'flex', mr: 1 }}>
                    <IconButton
                        size="small"
                        color="primary"
                        aria-label="decrease quantity"
                        sx={{ border: '1px solid #c2c2c2' }}
                        onClick={decreaseHandler}
                        disabled={!cart}
                    >
                        <RemoveIcon />
                    </IconButton>
                    <Typography variant="h6" color={!cart && "text.secondary"} sx={{ mx: 1, px: 2, display: 'flex', alignItems: 'center', border: '1px solid #c2c2c2' }}>{target.quantity}</Typography>
                    <IconButton
                        size="small"
                        color="primary"
                        aria-label="increase quantity"
                        sx={{ border: '1px solid #c2c2c2' }}
                        onClick={increaseHandler}
                        disabled={!cart}
                    >
                        <AddIcon />
                    </IconButton>
                </Box>
                {cart ? <Button variant="text" onClick={saveForLaterHandler}>Save for Later</Button> : <Button variant="text" onClick={moveToCartHandler}>Move to cart</Button>}
                <Button variant="text" onClick={removeHandler}>Remove</Button>
            </CardActions>
        </Box>
    )
}

export default CartProduct;