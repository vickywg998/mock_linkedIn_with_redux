import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "../App.css";
import fetchUser from "../fetchUser";
import { Card, Container, Row, Col } from "react-bootstrap";
import Chat from "./Chat";

function IndividualUser() {
  const { userId } = useParams();
  const user = useSelector((state) => state.data.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser({ userId }));
  }, [userId]);

  const onClick = () => {
    // dispatch action to show chat
  }

  return (
    <Container>
      <Row>
        <Col sm={8}>
          {user && (
            <div
              className="user_card-styling"
              style={{ width: "600px" }}
              key={user.id}
            >
              <Card.Header>{user.id}</Card.Header>

              <Card.Img
                variant="top"
                src={user.avatar}
                className="avatar_singleUserImage"
              />
              <Card.Body>
                <Card.Title>{user.id}</Card.Title>
                <Card.Text>
                  {user.first_name} {user.last_name}
                </Card.Text>
                <Card.Text>{user.email}</Card.Text>
                <div className="user-action">
                  <button onClick={onClick}>Message</button>
                </div>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </div>
          )}
        </Col>

        {/* <Col sm={4}>hi sup</Col> */}
      </Row>
    </Container>
  );
}

export default connect()(IndividualUser);
