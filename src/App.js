import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import fetchUsers from "./fetchUsers";
import "./App.css";
import PageButtons from "./Components/PageButtons";
import Nav from "./Components/Nav";
import { Container, Row, Col, Card, CardDeck } from "react-bootstrap";

function UserView() {
  const page = useSelector((state) => state.data.page);
  const userdata = useSelector((state) => state.data.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers({ page }));
  }, [page]);

  return (
    <div className="product-list-wrapper">
      {/* {error && <span className="product-list-error">{error}</span>} */}
      <Nav />

      <Container>
        <Row>
          <Col md={{ span: 4, offset: 9 }}></Col>
        </Row>
        <h1 className="homepage-title">Welcome to BlinkedIn</h1>
        <h3>Recommended Connections</h3>
        <Row>
          <CardDeck>
            {userdata.map((user) => (
              <Card border="info" style={{ width: "18rem" }} key={user.id}>
                <Card.Header>{user.id}</Card.Header>

                <Card.Img
                  variant="top"
                  src={user.avatar}
                  width="200"
                  height="250"
                />

                <Card.Body>
                  <Card.Title>{user.id}</Card.Title>
                  <Card.Text>
                 <p>{user.first_name} {user.last_name}</p> 
                  <p>{user.email}</p>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            ))}
          </CardDeck>

          <PageButtons />

          {/* <Col md={9}>
            <Filter />
            <Products />
          </Col> */}

          {/* <Col>
       <basket></basket>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
}

export default connect()(UserView);
