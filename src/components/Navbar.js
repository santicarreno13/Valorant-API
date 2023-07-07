import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand text-aling" to="/weapons"><h1>Weapons</h1></Link>
        <Link className="navbar-brand text-aling" to="/maps"><h1>Maps</h1></Link>
        <Link className="navbar-brand text-aling" to="/agents"><h1>Agents</h1></Link>
      </div>
    </nav>
    );
}

export default Navbar