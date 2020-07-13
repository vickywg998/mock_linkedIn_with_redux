
export const INCREMENT_PAGE_COUNT = "INCREMENT_PAGE_COUNT";
export const DECREMENT_PAGE_COUNT = "DECREMENT_PAGE_COUNT";


export function fetchPageSuccess(payload) {
  console.log(payload, "from action")
  return {
    type: FETCH_PAGE_SUCCESS,
    payload: payload,
  };
}

export function fetchPageError(error) {
  return {
    type: FETCH_PAGE_ERROR,
    error: error,
  };
}
