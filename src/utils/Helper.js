import axios from "axios";
import { SET_DATA, SET_SIZES, SET_BRAND, SET_IDEAL, FILTERED_SIZES, FILTERED_BRAND, FILTERED_IDEAL, PRICE_LOW_TO_HIGH, PRICE_HIGH_TO_LOW } from './constants';

const setContent = (target, products, dispatch) => {
    const select = { sizes: SET_SIZES, brand: SET_BRAND, ideal: SET_IDEAL };
    let available = products.reduce((result, item) => {
        if (!result.includes(item[target])) {
            return result.concat(item[target]);
        }
        return result;
    }, []);
    dispatch({ type: select[target], payload: available });
};

export const getData = async (dispatch) => {
    try {
        const { data } = await axios.get("../data/productData.json");
        dispatch({ type: SET_DATA, payload: data.products });
        setContent('sizes', data.products, dispatch);
        setContent('brand', data.products, dispatch);
        setContent('ideal', data.products, dispatch);
    } catch (error) {
        console.error(error);
    }
};

export const getSortedData = (products, sortBy) => {
    if (sortBy === PRICE_LOW_TO_HIGH) {
        return products.sort((a, b) => (a.price - b.price));
    }
    if (sortBy === PRICE_HIGH_TO_LOW) {
        return products.sort((a, b) => (b.price - a.price));
    }
    return products.sort((a, b) => (a.id - b.id));
};

export const filterData = (selectedData, target, type, dispatch) => {
    const select = { sizes: FILTERED_SIZES, brand: FILTERED_BRAND, ideal: FILTERED_IDEAL };
    const filteredData = updateSelectedData(selectedData, type);
    dispatch({ type: select[target], payload: filteredData });
};

export const updateSelectedData = (selectedData, target) => {
    return selectedData.includes(target) ? selectedData.filter((existingData) => existingData !== target) : selectedData.concat(target);
};

export const checkSelectedData = (selectedData, target) => {
    return selectedData.includes(target);
};

export const getFilteredData = (products, selectedData, target) => {
    return selectedData.length > 0 ? products.filter((item) => selectedData.includes(item[target])) : products;
};