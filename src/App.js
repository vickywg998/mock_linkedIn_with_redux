import React from "react";
import { connect, useSelector } from "react-redux";
import "./App.css";
import PageButtons from "./Components/PageButtons";
import Nav from "./Components/Nav";
import { Container, Row, Col} from "react-bootstrap";
import UserComponent from "./Components/UserComponent";
import NetworkPanel from "./Components/NetworkPanel";
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import IndividualUser from "./Components/IndividualUser";
import Chat from "./Components/Chat";

function UserView() {
  const showChat = useSelector((state) => state.data.showChat);

  return (
    <div className="product-list-wrapper">
      <Router>

        <Nav />

        <Route exact path="/">
          <Container>
          <Row>
            <Col md={{ span: 4, offset: 9 }}></Col>
          </Row>
          <h5 className="homepage-title"><b>The Economist - Wash your hands & wear a mask. Learn more</b></h5>
          <Row>
            <Col xs={3}><NetworkPanel /></Col>
            <Col md={9}>
              <h3>My Network</h3>
              <UserComponent />
              <PageButtons />
            </Col>
          </Row>
          </Container>
        </Route>

        <Route exact path="/user/:userId" component={IndividualUser} />  
        
        <Route exact path="/connect" />

        <Redirect from='*' to='/' />   

      </Router>

      {showChat && <Chat/>}
    </div>
  );
}

export default connect()(UserView);
