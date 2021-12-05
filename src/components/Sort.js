import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function Sort({ Sort, setSort }) {
    const handleSort = (e, newSort) => {
        setSort(newSort);
    };

    return (
        <Box sx={{ display: 'grid', gap: 1, py: 1, px: 2 }}>
            <Typography variant="h6">Sort Products:</Typography>
            <Box sx={{ display: 'flex' }}>
                <ToggleButtonGroup
                    value={Sort}
                    exclusive
                    orientation="vertical"
                    onChange={handleSort}
                    aria-label="text alignment"
                >
                    <ToggleButton value="relevance" aria-label="Relevance">Relevance</ToggleButton>,
                    <ToggleButton value="priceLTH" aria-label="Price - Low to High">Price - Low to High</ToggleButton>,
                    <ToggleButton value="priceHTL" aria-label="Price - High to Low">Price - High to Low</ToggleButton>,
                </ToggleButtonGroup>
            </Box>
        </Box>
    );
}

export default Sort;