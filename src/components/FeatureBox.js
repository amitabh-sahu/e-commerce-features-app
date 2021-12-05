import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useStateValue } from "../utils/Store";
import { sortMethod, filterMethod } from "../utils/Helper";
import Filter from "./Filter";
import Sort from "./Sort";

const content = {
    brand: [{ name: 'PUMA' }, { name: 'NIKE' }, { name: 'ADIDAS' }, { name: 'FILA' }],
    size: [{ name: 'S' }, { name: 'M' }, { name: 'L' }, { name: 'XL' }, { name: 'XXL' }],
    ideal: [{ name: 'MEN' }, { name: 'WOMEN' }]
};

function FeatureBox() {
    const [size, setSize] = useState([]);
    const [brand, setBrand] = useState([]);
    const [ideal, setIdeal] = useState([]);
    const [sort, setSort] = useState('relevance');
    const [{ products }, dispatch] = useStateValue();

    const handleClear = () => {
        setSort('relevance');
        setSize(content.size);
        setBrand(content.brand);
        setIdeal(content.ideal);
    };

    useEffect(() => {
        sortMethod(sort, products, dispatch);
    }, [sort])

    useEffect(() => {
        filterMethod(size, brand, ideal, products, dispatch);
    }, [size, brand, ideal])

    return (
        <Box sx={{ flex: '0.3', m: 2 }}>
            <Divider />
            <Sort Sort={sort} setSort={setSort} />
            <Divider />
            <Box sx={{ display: 'grid', gap: 1, py: 1, px: 2 }}>
                <Typography variant="h6">Filter Products:</Typography>
                <Box>
                    <Filter content={content} type="size" Target={size} setTarget={setSize} />
                    <Filter content={content} type="brand" Target={brand} setTarget={setBrand} />
                    <Filter content={content} type="ideal" Target={ideal} setTarget={setIdeal} />
                </Box>
            </Box >
            <Divider />
            <Button variant="text" fullWidth onClick={handleClear}>Clear All</Button>
            <Divider />
        </Box>
    );
}

export default FeatureBox;