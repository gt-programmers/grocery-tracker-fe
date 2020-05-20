import React from "react";
import "./NavBar.scss";
import { NavLink } from "react-router-dom";
import statsIcon from "../assets/money-graph-with-up-arrow.svg";
import recipesIcon from "../assets/chef.svg";
import inventoryIcon from "../assets/check-list.svg";
import groceryIcon from "../assets/grocery.svg";
import userIcon from "../assets/user.svg";

const NavBar = () => {
  return (
    <>
      <nav>
      <div className="vertical padded">
          <img alt="statistics" src={userIcon} />
        <NavLink to={"/profile"} className="route">
          Profile
        </NavLink>
        </div>

        <div className="vertical padded">
          <img alt="statistics" src={groceryIcon} />
        <NavLink to={"/grocery_list"} className="route">
          Grocery List
        </NavLink>
        </div>

        <div className="vertical padded">
          <img alt="statistics" src={inventoryIcon} />
          <NavLink to={"/inventory"} className="route">
            Inventory
          </NavLink>
        </div>

        <div className="vertical padded">
          <img alt="statistics" src={recipesIcon} />
          <NavLink to={"/recipes"} className="route">
            Recipes
          </NavLink>
        </div>

        <div className="vertical padded">
          <img alt="statistics" src={statsIcon} />
          <NavLink to={"/stats"} className="route">
            Stats
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
