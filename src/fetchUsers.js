import {
  fetchUsersPending,
  fetchUsersSuccess,
  fetchUsersError,
} from "./actions/usersAction";

function fetchUsers(options = {}) {
  const { page = 1 } = options;

  return (dispatch) => {
    dispatch(fetchUsersPending());
    fetch(`https://reqres.in/api/users?page=${page}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchUsersSuccess(res.data));
        console.log(res.data, "res data from fetch user");
        return res.data;
      })
      .catch((error) => {
        dispatch(fetchUsersError(error));
      });
  };
}

export default fetchUsers;