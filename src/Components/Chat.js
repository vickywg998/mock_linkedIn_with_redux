import React, { useEffect } from "react";
import Talk from "talkjs";
import { connect, useSelector } from "react-redux";

function Chat() {
  const user = useSelector((state) => state.data.user);
  const currentUser = useSelector((state) => state.data.currentUser);

  const talkjsContainer = React.createRef();

  useEffect(() => {
    Talk.ready
      .then(() => {
        const me = new Talk.User({
          id: `${currentUser.id}`,
          name: `${currentUser.name}`,
          email: `${currentUser.email}`,
          photoUrl: `${currentUser.photoUrl}`,
        });

        console.log(me, "currentuser");

        if (!window.talkSession) {
          window.talkSession = new Talk.Session({
            appId: `${process.env.REACT_APP_TALKJS_API}`,
            me: me,
          });
        }

        const other = new Talk.User({
          id: `${user.id}`,
          name: `${user.first_name} ${user.last_name}`,
          email: `${user.email}`,
          photoUrl: `${user.avatar}`,
          welcomeMessage: "Thanks for connecting with me! How's it going?",
        });

        const conversationId = Talk.oneOnOneId(currentUser.id, user.id);

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
  }, [currentUser, user]);

  return <div className="chatbox-container" ref={talkjsContainer}></div>;
}

export default connect()(Chat);
