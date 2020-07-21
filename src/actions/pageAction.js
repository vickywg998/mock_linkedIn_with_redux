
export const INCREMENT_PAGE_COUNT = "INCREMENT_PAGE_COUNT";
export const DECREMENT_PAGE_COUNT = "DECREMENT_PAGE_COUNT";


export function incrementPage(payload) {
  console.log(payload, "page payload from action")
  return {
    type: INCREMENT_PAGE_COUNT,
    payload: payload,
  };
}

export function decrementPage(payload){
  return {
    type: DECREMENT_PAGE_COUNT,
    payload: payload,
  };
}
