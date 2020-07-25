import React from "react";
import { connect } from "react-redux";
import "./App.css";
import PageButtons from "./Components/PageButtons";
import Nav from "./Components/Nav";
import { Container, Row, Col} from "react-bootstrap";
import UserComponent from "./Components/UserComponent";
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import IndividualUser from "./Components/IndividualUser"

function UserView() {
  return (
    <div className="product-list-wrapper">
      <Router>

        <Nav />

        <Route exact path="/">
          <Container>
          <Row>
            <Col md={{ span: 4, offset: 9 }}></Col>
          </Row>
          <h1 className="homepage-title">Welcome to BlinkedIn</h1>
          <Row>
            <Col xs={3}>hi</Col>
            <Col md={9}>
              <h3>Recommended Connections</h3>
              <UserComponent />
              <PageButtons />
            </Col>
          </Row>
        </Container>
        </Route>

        <Route exact path="/user/:userId" component={IndividualUser} />  
        
        <Route exact path="/connect"><div>hello</div></Route>

        <Redirect from='*' to='/' />   

      </Router>
    </div>
  );
}

export default connect()(UserView);
