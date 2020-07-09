import {FETCH_USERS_PENDING, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR} from './action';

const initialState = {
    pending: false,
    data: [],
    error: null
}

export default function usersReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_USERS_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.payload
            }
        case FETCH_USERS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}

export const getUsers = state => state.data;
export const getUsersPending = state => state.pending;
export const getUsersError = state => state.error;

// these are called selectors, are used to get defined parts of the state