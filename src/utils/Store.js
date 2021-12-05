import React, { createContext, useContext, useReducer } from 'react';

const initialState = { products: [] };
export const actionTypes = { SET_DATA: 'SET_DATA' };

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_DATA:
            return {
                ...state,
                products: action.products,
            };
        default:
            return state;
    }
};

export const StateContext = createContext();

export const StateProvider = ({ children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);