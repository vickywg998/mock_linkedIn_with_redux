import {FETCH_USERS_PENDING, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR} from '../actions/usersAction';

export const initialState = {
    pending: false,
    data: [],
    error: null
}

// export const initialState = {
//     pending: false,
//     data: {
//         users: [],
//         page: 1
//     },
//     error: null
// }

export default function usersReducer(state = initialState, action) {
    console.log(state, "state from reducer")
    console.log(action, " action from reducer")
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
                data: action.payload,
                // data: {
                //     ...state.data,
                //     users: action.payload
                // }
            }
        case FETCH_USERS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        // case INCREMENT_PAGE_COUNT:
        //     return {
        //         ...state,
        //         pending: false,
        //         data: {
        //             ...state.data,
        //             page: action.payload
        //         }
        //     }
        default:
            return state;
    }
}

export const getUsers = state => state.data;
export const getUsersPending = state => state.pending;
export const getUsersError = state => state.error;

// these are called selectors, are used to get defined parts of the state