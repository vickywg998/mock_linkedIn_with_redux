import React from "react";
import { Link } from "react-router-dom";
import { Icon, Input } from "semantic-ui-react";

function Nav() {

  return (
    <nav>
      <ul className="nav-links">
        <img src={require("../assets/logo.png")} className="logo" alt="logo" />
        <Input icon="search" placeholder="Search..." />
        <Link className="nav-styling" to="/">
          <li>
            <Icon name="home" size="large" /> Homepage
          </li>
        </Link>
        <Link className="nav-styling" to="/connect">
          <li>
            <Icon name="users" size="large" /> Connect
          </li>
        </Link>
        <Link className="nav-styling" to="/notifications">
          <li>
            <Icon name="alarm" size="large" />
            Notifications
          </li>
        </Link>
      </ul>
    </nav>
  );
}
export default Nav;
