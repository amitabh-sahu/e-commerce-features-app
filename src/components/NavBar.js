import React from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStateValue } from "../utils/store";
import { Link } from "react-router-dom";

function NavBar() {
    const [{ myCart }] = useStateValue();

    return (
        <Box sx={{ backgroundColor: 'hsl(0, 0%, 90%)', p: 1.5 }}>
            <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    HOME
                </Link>
                <Link to="/cart" style={{ textDecoration: 'none' }}>
                    <Button
                        variant="outlined"
                        startIcon={
                            <Badge
                                badgeContent={myCart.length}
                                color="error"
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                            >
                                <ShoppingCartIcon />
                            </Badge>
                        }>
                        Cart
                    </Button>
                </Link>
            </Container>
        </Box>
    )
}

export default NavBar;