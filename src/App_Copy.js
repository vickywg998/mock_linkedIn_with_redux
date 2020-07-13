import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import fetchUsers from "./fetchUsers";
import { getUsersError, getUsers, getUsersPending } from "./reducers/usersReducer";

import Spinner from "./spinner";

class UserView extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { fetchUsers } = this.props;
    fetchUsers();
  }

  shouldComponentRender = () => {
    const { pending } = this.props;
    if (this.pending === false) return false;
    // more tests
    return true;
  };

  render() {
    const { data, error, pending } = this.props;
    console.log(this.props)

    if (!this.shouldComponentRender()) return <Spinner />;

    return (
      <div className="product-list-wrapper">
        {error && <span className="product-list-error">{error}</span>}
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.email}</li>
            // <p>{user.first_name}</p>
          ))}
          <p>hi</p>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state, "mapstatetoprops")
  return {
  
    error: getUsersError(state),
    data: getUsers(state),
    pending: getUsersPending(state),
  }

};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchUsers: fetchUsers,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(UserView);
