import React, { createContext, useContext, useReducer } from 'react';
import { DEFAULT } from './constants';
import { reducer } from './reducer';

const initialState = {
    sizes: [],
    brand: [],
    ideal: [],
    products: [],
    sortBy: DEFAULT,
    selectedSizes: [],
    selectedBrand: [],
    selectedIdeal: [],
};

export const StateContext = createContext();

export const StateProvider = ({ children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);