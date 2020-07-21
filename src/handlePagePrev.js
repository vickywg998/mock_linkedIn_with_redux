import { decrementPage } from "./actions/pageAction";

function handlePagePrev(page) {
  return (dispatch) => {
    dispatch(decrementPage(page));
  };
}

export default handlePagePrev;
