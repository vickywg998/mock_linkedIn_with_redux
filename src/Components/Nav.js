import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

function Nav() {

  const navStyle = {
    color: '#414b5a'
};

  return (
   <nav>
  
   <ul className="nav-links">
   <img src={require('../assets/logo.png')} className="logo" alt="logo"/>
     <Link style={navStyle} to ='/'>
       <li>Homepage</li>
     </Link>
     <Link style={navStyle} to ='/connect'>
       <li>Connect<Icon name='heart' size="small"/></li>
     </Link>
     <Link style={navStyle} to ='/cart'>
       <li>Notifications<Icon name='notifications' size="small"/></li>
     </Link>
   </ul>
 </nav>
  );
}
export default Nav;
