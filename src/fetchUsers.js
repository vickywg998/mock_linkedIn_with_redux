import {fetchUsersPending, fetchUsersSuccess, fetchUsersError} from './actions/usersAction'

const defaultOptions = {
    page: 1
}

function fetchUsers(options) {
    const { page } = {...defaultOptions, ...options};

    return dispatch => {
        dispatch(fetchUsersPending());
        fetch(`https://reqres.in/api/users?page=${page}`)
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