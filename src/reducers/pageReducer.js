import { INCREMENT_PAGE_COUNT ,DECREMENT_PAGE_COUNT } from '../actions/pageAction';

export const initialState = {
    data: {
        users: [],
        page: 1
    },
    error: null
}

export default function pageReducer(state = initialState, action) {
    switch(action.type) {
        case INCREMENT_PAGE_COUNT:
                return {
                ...state,
                pending: false,
                data: {
                    ...state.data,
                    page: action.payload
                }
            }

        case DECREMENT_PAGE_COUNT:
            return {

                ...state,
                pending: false,
                data: {
                    ...state.data,
                    page: action.payload
                }
            }
        default:
            return state;
    }
}

// selectors

export const getUsers = state => state.data;
export const getUsersError = state => state.error;

// these are called selectors, are used to get defined parts of the state