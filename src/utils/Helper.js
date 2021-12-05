import { actionTypes } from "./Store";
import data from "../data/productData.json";

export const sortMethod = (Sort, products, dispatch) => {
    if (Sort === 'relevance') {
        const productsCopy = JSON.parse(JSON.stringify(data.products));
        dispatch({ type: actionTypes.SET_DATA, products: productsCopy });
    }
    else {
        if (products.length > 0) {
            switch (Sort) {
                case 'priceLTH':
                    products.sort((a, b) => (a.price > b.price));
                    break;
                case 'priceHTL':
                    products.sort((a, b) => (a.price < b.price));
                    break;
                default:
                    break;
            }
            dispatch({ type: actionTypes.SET_DATA, products: products });
        }
    }
}

const chectFilter = (Target) => {
    let flag = false;
    Target.forEach((ele) => {
        if (ele.checked) {
            flag = true;
        }
    });
    return flag;
};

export const filterMethod = (Size, Brand, Ideal, products, dispatch) => {
    const productsCopy = JSON.parse(JSON.stringify(data.products));
    if (chectFilter(Size) || chectFilter(Brand) || chectFilter(Ideal)) {
        let filtered = [];
        Size.forEach((ele) => {
            if (ele.checked) {
                const temp = productsCopy.filter((each) => ((each.sizes[ele.name]) === 1));
                filtered = [...filtered, ...temp];
            }
        });
        Brand.forEach((ele) => {
            if (ele.checked) {
                const temp = productsCopy.filter((each) => ((each.brand) === ele.name));
                filtered = [...filtered, ...temp];
            }
        });
        Ideal.forEach((ele) => {
            if (ele.checked) {
                const temp = productsCopy.filter((each) => ((each.ideal) === ele.name));
                filtered = [...filtered, ...temp];
            }
        });
        const final = filtered.filter((each, index, self) => (self.indexOf(each) === index));
        dispatch({ type: actionTypes.SET_DATA, products: final });
    }
    else {
        dispatch({ type: actionTypes.SET_DATA, products: productsCopy });
    }
};