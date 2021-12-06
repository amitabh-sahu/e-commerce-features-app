import React, { useEffect } from "react";
import FeatureBox from "./FeatureBox";
import ContentBox from "./ContentBox";
import Box from '@mui/material/Box';
import { getData } from '../utils/helper';
import { useStateValue } from "../utils/store";

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    getData(dispatch);
  }, [])

  return (
    <Box sx={{ display: { xs: 'grid', sm: 'flex' }, p: { xs: 1, sm: 2, md: 3 } }}>
      <FeatureBox />
      <ContentBox />
    </Box>
  );
}

export default App;