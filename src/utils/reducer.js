import {
    SORT,
    DEFAULT,
    SET_DATA,
    SET_SIZES,
    SET_BRAND,
    SET_IDEAL,
    CLEAR_ALL,
    FILTERED_SIZES,
    FILTERED_BRAND,
    FILTERED_IDEAL,
    PRICE_LOW_TO_HIGH,
    PRICE_HIGH_TO_LOW,
    SET_TOTAL_ITEMS,
    SET_SAVE_LATER,
    SET_CART
} from './constants';

export const reducer = (state, action) => {
    switch (action.type) {
        case SORT:
            return {
                ...state,
                sortBy: action.payload
            };
        case SET_DATA:
            return {
                ...state,
                products: action.payload
            };
        case SET_SIZES:
            return {
                ...state,
                sizes: action.payload
            };
        case SET_BRAND:
            return {
                ...state,
                brand: action.payload
            };
        case SET_IDEAL:
            return {
                ...state,
                ideal: action.payload
            };
        case PRICE_LOW_TO_HIGH:
            return {
                ...state,
                sortBy: action.payload
            };
        case PRICE_HIGH_TO_LOW:
            return {
                ...state,
                sortBy: action.payload
            };
        case FILTERED_SIZES:
            return {
                ...state,
                selectedSizes: action.payload
            };
        case FILTERED_BRAND:
            return {
                ...state,
                selectedBrand: action.payload
            };
        case FILTERED_IDEAL:
            return {
                ...state,
                selectedIdeal: action.payload
            };
        case CLEAR_ALL:
            return {
                ...state,
                selectedSizes: [],
                selectedBrand: [],
                selectedIdeal: [],
                sortBy: DEFAULT
            };
        case SET_SAVE_LATER:
            return {
                ...state,
                saveForLater: action.payload
            };
        case SET_CART:
            return {
                ...state,
                myCart: action.payload
            };
        case SET_TOTAL_ITEMS:
            return {
                ...state,
                totalItems: action.payload
            };
        default:
            return state;
    }
};