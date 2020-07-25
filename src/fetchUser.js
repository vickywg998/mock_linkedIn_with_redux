import {
    fetchUserPending,
    fetchUserSuccess,
    fetchUserError,
  } from "./actions/userAction";
  
  function fetchUser(options = {}) {
    const { userId } = options;

    return (dispatch) => {
      dispatch(fetchUserPending());
      fetch(`https://reqres.in/api/users/${userId}`)
        .then((res) => res.json())
        .then((res) => {
          if (res.error) {
            throw res.error;
          }
          dispatch(fetchUserSuccess(res.data));
          console.log(res.data, "res data from fetching individual user");
          return res.data;
        })
        .catch((error) => {
          dispatch(fetchUserError(error));
        });
    };
  }
  
  export default fetchUser;



