import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useStateValue } from "../utils/store";
import { CLEAR_ALL } from '../utils/constants';
import Filter from "./Filter";
import Sort from "./Sort";

function FeatureBox() {
    const [{ sizes, brand, ideal, selectedSizes, selectedBrand, selectedIdeal }, dispatch] = useStateValue();

    const clearAll = () => {
        dispatch({ type: CLEAR_ALL });
    };

    return (
        <Box sx={{ flex: '0.3', m: 2 }}>
            <Divider />
            <Sort />
            <Divider />
            <Box sx={{ display: 'grid', gap: 1, py: 1, px: 2 }}>
                <Typography variant="h6">Filter Products:</Typography>
                <Box>
                    <Filter Type="sizes" Target={sizes} selectedTarget={selectedSizes} dispatch={dispatch} />
                    <Filter Type="brand" Target={brand} selectedTarget={selectedBrand} dispatch={dispatch} />
                    <Filter Type="ideal" Target={ideal} selectedTarget={selectedIdeal} dispatch={dispatch} />
                </Box>
            </Box >
            <Divider />
            <Button variant="text" fullWidth onClick={clearAll}>Clear All</Button>
            <Divider />
        </Box>
    );
}

export default FeatureBox;