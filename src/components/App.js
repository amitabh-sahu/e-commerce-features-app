import React, { useEffect } from "react";
import FeatureBox from "./FeatureBox";
import ContentBox from "./ContentBox";
import Box from '@mui/material/Box';
import data from "../data/productData.json";
import { actionTypes, useStateValue } from "../utils/Store";

function App() {
  const [{ products }, dispatch] = useStateValue();
  const productsCopy = JSON.parse(JSON.stringify(data.products));

  useEffect(() => {
    dispatch({ type: actionTypes.SET_DATA, products: productsCopy });
  }, [])

  return (
    <Box sx={{ display: { xs: 'grid', sm: 'flex' }, p: { xs: 1, sm: 2, md: 3 } }}>
      <FeatureBox />
      <ContentBox />
    </Box>
  );
}

export default App;