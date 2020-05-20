import React from "react";
import "./NavBar.scss";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <NavLink to={"/profile"} className="route" >Profile</NavLink>
        <NavLink to={"/grocery_list"} className="route" >Grocery List</NavLink>
        <NavLink to={"/inventory"} className="route" >Inventory</NavLink>
        <NavLink to={"/recipes"} className="route" >Recipes</NavLink>
        <NavLink to={"/stats"} className="route" >Stats</NavLink>
      </nav>
    </>
  );
};

export default NavBar;
