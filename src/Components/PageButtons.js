import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import handlePageNext from "../handlePageNext";
import handlePagePrev from "../handlePagePrev";

function PageButtons() {
  const page = useSelector((state) => state.data.page);
  const dispatch = useDispatch();

  const incrementPage = () => {
    dispatch(handlePageNext({ page }));
  };

  const decrementPage = () => {
    dispatch(handlePagePrev({ page }));
  };

  return (
    <>
      <p>Page: {page}</p>

      {page > 1 ? (
        <button onClick={decrementPage}>Prev</button>
      ) : (
        <button onClick={decrementPage} disabled>
          Prev
        </button>
      )}
      {page < 2 ? (
        <button onClick={incrementPage}>Next</button>
      ) : (
        <button onClick={incrementPage} disabled>
          Next
        </button>
      )}
    </>
  );
}

export default connect()(PageButtons);
