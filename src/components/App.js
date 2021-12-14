import React, { useEffect } from "react";
import Cart from "./Cart";
import Home from "./Home";
import NavBar from "./NavBar";
import Box from '@mui/material/Box';
import { getData } from '../utils/helper';
import { useStateValue } from "../utils/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    getData(dispatch);
  }, [])

  return (
    <Box>
      <Router>
        <NavBar />
        <Box sx={{ display: { xs: 'grid', sm: 'flex' }, p: { xs: 1, sm: 2, md: 3 } }}>
          <Routes>
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/' element={<Home />} />
          </Routes>
        </Box>
      </Router>
    </Box >
  );
}

export default App;