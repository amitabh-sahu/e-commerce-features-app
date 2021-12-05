import React, { useEffect } from "react";
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function Filter({ content, type, Target, setTarget }) {
    useEffect(() => {
        setTarget(content[type]);
    }, []);

    const handleToggle = (e) => {
        const { name, checked } = e.target;
        const newTarget = Target.map((each) => (
            each.name === name ? { ...each, checked } : each
        ));
        setTarget(newTarget);
    }

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography sx={{ textTransform: 'capitalize' }}>{type}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ display: 'grid' }}>
                {Target.map((each, index) => (
                    <FormControlLabel
                        key={index}
                        control={<Checkbox name={each.name} checked={each?.checked || false} />}
                        onChange={handleToggle}
                        value={each.name}
                        label={each.name} />
                ))}
            </AccordionDetails>
        </Accordion>
    );
}

export default Filter;