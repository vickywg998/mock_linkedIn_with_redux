import React, { useEffect, useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import fetchUsers from "./fetchUsers";
import "./App.css";

import Spinner from "./spinner";

function UserView(props) {
  const [page, setPage] = useState(1);

  //const page = useSelector(state => state.data.page)

  const data = useSelector((state) => state.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers({ page }));
  }, [page]);

  return (
    <div className="product-list-wrapper">
      {/* {error && <span className="product-list-error">{error}</span>} */}

      {data.map((user) => (
        <div key={user.id} className="usercard-border">
          <p>{user.id}</p>
          <img src={user.avatar} />
          <p>
            {user.first_name} {user.last_name}
          </p>
          <p>{user.email}</p>
        </div>
      ))}
      <p>Page: {page}</p>

      <button onClick={() => setPage(page - 1)}>Prev</button>
      <button onClick={() => setPage(page + 1)}>Next</button>

    </div>
  );
}

export default connect()(UserView);
