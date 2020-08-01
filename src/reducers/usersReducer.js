import {
  FETCH_USERS_PENDING,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
} from "../actions/usersAction";

import {
  FETCH_USER_PENDING,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
} from "../actions/userAction";

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
    user: [],
    currentUser: {
      id: "123456",
      name: "Vicky",
      email: "vicky@vinkedin.com",
      photoUrl: "https://demo.talkjs.com/img/alice.jpg"
    },
    showChat: false
  },
  error: null
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
      case FETCH_USER_PENDING:
        return {
          ...state,
          pending: true,
        };
      case FETCH_USER_SUCCESS:
        return {
          ...state,
          pending: false,
          data: {
              ...state.data,
              user: action.payload,
          },
        };
      case FETCH_USER_ERROR:
        return {
          ...state,
          pending: false,
          error: action.error,
        };
    default:
      return state;
  }
}
