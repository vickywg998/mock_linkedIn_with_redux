import {
  FETCH_USERS_PENDING,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
} from "../actions/usersAction";

import {
  INCREMENT_PAGE_COUNT,
  DECREMENT_PAGE_COUNT,
} from "../actions/pageAction";

export const initialState = {
  pending: false,
  //   data: [],
  data: {
    users: [],
    page: 1,
  },
  error: null,
};

export default function usersReducer(state = initialState, action) {
  //   console.log(state, "state from reducer");
  console.log(action, " action from reducer");
  switch (action.type) {
    case FETCH_USERS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        pending: false,
        // data: action.payload,
        data: {
            ...state.data,
            users: action.payload
        },
      };
    case FETCH_USERS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case INCREMENT_PAGE_COUNT:
      return {
        ...state,
        data: {
            ...state.data,
            page: action.payload.page + 1,
        },
      };
    case DECREMENT_PAGE_COUNT:
      return {
        ...state,
        data: {
            ...state.data,
            page: action.payload.page - 1,
        },
      };
    default:
      return state;
  }
}

export const getUsers = (state) => state.data.users;
export const getUsersPending = (state) => state.pending;
export const getUsersError = (state) => state.error;
export const incrementPage = (state) => state.data.page;
export const decrementPage = (state) => state.data.page;

// these are called selectors, are used to get defined parts of the state
