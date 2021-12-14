import React from 'react';
import Card from '@mui/material/Card';
import ListProduct from './ListProduct';
import Typography from '@mui/material/Typography';

function CartContent({ data, cart }) {

    return (
        <>
            {data.length > 0 && <Card sx={{ display: 'grid', py: 2, borderRadius: 0 }}>
                <Typography variant="h5" color="text.secondary" sx={{ px: 2 }}>{cart ? 'My Cart' : 'Save For Later'} ({data.length})</Typography>
                {data.map((each, index) => (
                    <ListProduct key={index} data={data} index={index} target={each} cart={cart} />
                ))}
            </Card>}
        </>
    )
}

export default CartContent;