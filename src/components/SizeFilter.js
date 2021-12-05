import React, { useEffect, useState } from "react";
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { actionTypes, useStateValue } from "../utils/Store";
import data from "../data/productData.json";

function SizeFilter() {
    const [{ products }, dispatch] = useStateValue();
    const productsCopy = JSON.parse(JSON.stringify(data.products));
    const [Sizes, setSizes] = useState([]);
    const [type, setType] = useState(true);

    const handleSizeToggle = (e) => {
        const currInd = Sizes.indexOf(e.target.value);
        const newSizes = [...Sizes];
        if (currInd === -1) {
            newSizes.push(e.target.value);
            setType(true);
        }
        else {
            newSizes.splice(currInd, 1);
            setType(false);
        }
        setSizes(newSizes);
    }

    useEffect(() => {
        if (Sizes.length > 0) {
            let filtered = []
            if (type) {
                Sizes.forEach((ele) => {
                    const temp = productsCopy.filter((each) => ((each.sizes)[ele] === 1))
                    filtered.push(...temp);
                })
            }
            else {
                Sizes.forEach((ele) => {
                    const temp = products.filter((each) => ((each.sizes)[ele] === 0))
                    filtered.push(...temp);
                })
            }
            const final = filtered.filter((each, index) => (filtered.indexOf(each) === index));
            dispatch({ type: actionTypes.SET_DATA, products: final });
        }
        else {
            dispatch({ type: actionTypes.SET_DATA, products: productsCopy });
        }
    }, [Sizes])

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>Size</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ display: 'grid' }}>
                <FormControlLabel control={<Checkbox />} onChange={handleSizeToggle} value="S" label="S" />
                <FormControlLabel control={<Checkbox />} onChange={handleSizeToggle} value="M" label="M" />
                <FormControlLabel control={<Checkbox />} onChange={handleSizeToggle} value="L" label="L" />
                <FormControlLabel control={<Checkbox />} onChange={handleSizeToggle} value="XL" label="XL" />
            </AccordionDetails>
        </Accordion>
    );
}

export default SizeFilter;