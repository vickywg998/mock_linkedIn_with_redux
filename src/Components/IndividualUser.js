import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "../App.css";
import fetchUser from "../fetchUser";
import { Card, Container, Row, Col } from "react-bootstrap";
import Talk from "talkjs";



function IndividualUser() {
  const API_KEY = process.env.REACT_APP_TALKJS_API;

  console.log(API_KEY, "api key")

  const { userId } = useParams();
  console.log(userId);
  const user = useSelector((state) => state.data.user);
  const dispatch = useDispatch();

  console.log(user);

  // console.log(userdata, "userdata")

  useEffect(() => {
    dispatch(fetchUser({ userId }));
  }, [userId]);

  const handleClick = () => {

    Talk.ready
      .then(() => {
        const me = new Talk.User({
          id: "123456",
          name: "Vicky",
          email: "vicky@vinkedin.com",
          photoUrl: "https://demo.talkjs.com/img/alice.jpg",
          welcomeMessage: "Hey there! How are you? :-)",
        });

        if (!window.talkSession) {
          window.talkSession = new Talk.Session({
            appId: `${API_KEY}`,
            me: me,
          });
        }

        const other = new Talk.User({
          id: "654321",
          name: "George",
          email: "george.bluth@reqres.in",
          photoUrl: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg",
          welcomeMessage: "Thanks for connecting with me! How's it going?",
        });
        const conversationId = Talk.oneOnOneId(me, other);

        const conversation = window.talkSession.getOrCreateConversation(
          conversationId
        );
        conversation.setParticipant(me);
        conversation.setParticipant(other);

        const inbox = window.talkSession.createInbox({
          selected: conversation,
        });
        inbox.mount(talkjsContainer.current);
      })
      .catch((e) => console.error(e));
  };

  handleClick();

  const talkjsContainer = React.createRef();

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
                  <button onClick={() => handleClick(user.id)}>Message</button>
                  {/* <button onClick={handleClick}>Message</button> */}
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
      <Row>
        <div className="chatbox-container" ref={talkjsContainer}></div>
      </Row>
    </Container>
  );
}

export default connect()(IndividualUser);
