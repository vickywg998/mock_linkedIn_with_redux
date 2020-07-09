import {fetchUsersPending, fetchUsersSuccess, fetchUsersError} from './action'

function fetchUsers() {

    return dispatch => {
        dispatch(fetchUsersPending());
        fetch('https://reqres.in/api/users?page=2')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchUsersSuccess(res.data));
            console.log(res.data)
            return res.data;
          
        })
        .catch(error => {
            dispatch(fetchUsersError(error));
        })
     
    }
}

export default fetchUsers;