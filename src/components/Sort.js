import React from "react";
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import { DEFAULT, PRICE_LOW_TO_HIGH, PRICE_HIGH_TO_LOW, } from '../utils/constants';
import { useStateValue } from "../utils/store";
import { SORT } from '../utils/constants';

function Sort() {
    const [{ sortBy }, dispatch] = useStateValue();
    const sortProducts = (sortType) => {
        dispatch({ type: SORT, payload: sortType });
    };

    return (
        <Box sx={{ display: 'grid', gap: 1, py: 1, px: 2 }}>
            <Typography variant="h6">Sort Products:</Typography>
            <Box sx={{ display: 'flex' }}>
                <RadioGroup
                    aria-label="gender"
                    name="controlled-radio-buttons-group"
                    value={sortBy}
                    onChange={(e) => sortProducts(e.target.value)}
                >
                    <FormControlLabel value={DEFAULT} control={<Radio />} label="Default" />
                    <FormControlLabel value={PRICE_LOW_TO_HIGH} control={<Radio />} label="Price - Low to High" />
                    <FormControlLabel value={PRICE_HIGH_TO_LOW} control={<Radio />} label="Price - High to Low" />
                </RadioGroup>
            </Box>
        </Box>
    );
}

export default Sort;