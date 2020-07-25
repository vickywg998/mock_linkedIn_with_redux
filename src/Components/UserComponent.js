import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import fetchUsers from "../fetchUsers";
// import fetchUser from "../fetchUser";
import { fetchUserSuccess } from "../actions/userAction";
import { Link } from "react-router-dom";
import "../App.css";
import { Card, CardDeck } from "react-bootstrap";

function UserComponent() {
  const page = useSelector((state) => state.data.page);
  const userdata = useSelector((state) => state.data.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers({ page }));
  }, [page]);

  return (
    <CardDeck>
      {userdata.map((user) => (
        <Card border="info" style={{ width: "18rem" }} key={user.id}>
          <Card.Header>{user.id}</Card.Header>
          <Link to={`/user/${user.id}`}>
            <Card.Img
              variant="top"
              src={user.avatar}
              className="avatar_image"
            />

            <Card.Body>
              <Card.Title>{user.id}</Card.Title>
              <Card.Text>
                {user.first_name} {user.last_name}
              </Card.Text>
              <Card.Text>
                {user.email}
              </Card.Text>
            </Card.Body>
          </Link>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      ))}
    </CardDeck>
  );
}

export default connect()(UserComponent);
