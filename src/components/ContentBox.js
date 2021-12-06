import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Product from "./Product";
import { useStateValue } from "../utils/store";
import { getSortedData, getFilteredData } from '../utils/helper';

function ContentBox() {
    const [{ sortBy, products, selectedSizes, selectedBrand, selectedIdeal }] = useStateValue();
    const sortedData = getSortedData(products, sortBy);
    const firstFilteredData = getFilteredData(sortedData, selectedSizes, 'sizes');
    const secondFilteredData = getFilteredData(firstFilteredData, selectedBrand, 'brand');
    const finalFilteredData = getFilteredData(secondFilteredData, selectedIdeal, 'ideal');

    return (
        <Box sx={{ flex: '0.7', display: 'grid', justifyContent: 'center', gridTemplateColumns: 'repeat(auto-fill, 250px)', my: 2, gap: 2 }}>
            {finalFilteredData.length > 0 ? (finalFilteredData.map((each, index) => (
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