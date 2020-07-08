import {fetchProductsPending, fetchProductsSuccess, fetchProductsError} from './action'

function fetchProducts() {
    return dispatch => {
        dispatch(fetchProductsPending());
        fetch('https://reqres.in/api/users?page=2')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchProductsSuccess(res.products));
            return res.products;
        })
        .catch(error => {
            dispatch(fetchProductsError(error));
        })
    }
}

export default fetchProducts;