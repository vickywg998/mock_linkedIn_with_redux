import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "../App.css";
import fetchUser from "../fetchUser";
import { Card, CardDeck } from "react-bootstrap";


function IndividualUser() {
  const { userId } = useParams();
  console.log(userId)
  const user = useSelector((state) => state.data.user);
  const dispatch = useDispatch();

  console.log(user);

  // console.log(userdata, "userdata")
  
  useEffect(() => {
    dispatch(fetchUser({ userId }));
  }, [userId]);

    return (
      <CardDeck>
      
        <p>hi from individual user</p>
        {user && (
          <p>
            {user.id} {user.email} {user.first_name}
          </p>
        )}
       </CardDeck>

      
    );
  }
  
  export default connect()(IndividualUser);
  
