import React, { useEffect } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Product from "./Product";
import { useStateValue } from "../utils/Store";

function ContentBox() {
    const [{ products }] = useStateValue();

    useEffect(() => {
    }, [products])

    return (
        <Box sx={{ flex: '0.7', display: 'grid', justifyContent: 'center', gridTemplateColumns: 'repeat(auto-fill, 250px)', my: 2, gap: 2 }}>
            {products.length > 0 ? (products.map((each, index) => (
                <Product key={index} data={each} />
            ))) : (
                <Box>
                    <Typography variant="h4">No Products found.</Typography>
                </Box>
            )}
        </Box>
    );
}

export default ContentBox;