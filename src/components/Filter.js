import React from "react";
import Checkbox from '@mui/material/Checkbox';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import FormControlLabel from '@mui/material/FormControlLabel';
import { filterData, checkSelectedData } from '../utils/helper';

function Filter({ Type, Target, selectedTarget, dispatch }) {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography sx={{ textTransform: 'capitalize' }}>{Type}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ display: 'grid' }}>
                {Target.map((each, index) => (
                    <FormControlLabel
                        key={index}
                        control={<Checkbox checked={checkSelectedData(selectedTarget, each)} />}
                        onChange={() => filterData(selectedTarget, Type, each, dispatch)}
                        value={each}
                        label={each}
                    />
                ))}
            </AccordionDetails>
        </Accordion>
    );
}

export default Filter;