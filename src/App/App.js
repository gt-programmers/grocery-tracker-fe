import React from "react";
import "./App.scss";
import NavBar from "../NavBar/NavBar";
import Stats from "../Stats/Stats";
import GroceryList from "../GroceryList/GroceryList";
import Inventory from "../Inventory/Inventory";
import Recipes from "../Recipes/Recipes";
import Profile from "../Profile/Profile";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/profile" render={() => <Profile />} />
      <Route exact path="/recipes" render={() => <Recipes />} />
      <Route exact path="/grocery_list" render={() => <GroceryList />} />
      <Route exact path="/inventory" render={() => <Inventory />} />
      <Route exact path="/stats" render={() => <Stats />} />
      <Route exact path="/" render={() => <Stats />} />
      <NavBar />
    </div>
  );
}

export default App;
