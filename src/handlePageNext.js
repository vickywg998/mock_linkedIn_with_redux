import { incrementPage } from "./actions/pageAction";

function handlePageNext(page) {
  return (dispatch) => {
    dispatch(incrementPage(page));
  };
}

export default handlePageNext;
