import React from "react";
import { Link } from "react-router-dom";
import { Icon, Input } from "semantic-ui-react";

function Nav() {

  const navStyle = {
    color: '#414b5a'
};

  return (
   <nav>
  
   <ul className="nav-links">
   <img src={require('../assets/logo.png')} className="logo" alt="logo"/>
   <Input icon="search" placeholder="Search..." />
     <Link style={navStyle} to ='/'>
       <li><Icon name='home' size="small"/> Homepage</li>
     </Link>
     <Link style={navStyle} to ='/connect'>
       <li><Icon name='users' size="small"/> Connect</li>
     </Link>
     <Link style={navStyle} to ='/notifications'>
       <li><Icon name='alarm' size="small"/>Notifications</li>
     </Link>
   </ul>
 </nav>
  );
}
export default Nav;
