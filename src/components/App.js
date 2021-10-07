import React, {useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom"
import NavBar from "./NavBar"
import PlantPage from "./PlantPage";
import PlantList from "./PlantList";
import NewPlantForm from "./NewPlantForm";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <PlantPage />
        </Route>
        <Route exact path="/add">
          <NewPlantForm />
        </Route>
        <Route exact path="/plants">
          <PlantList />
        </Route>
      <PlantPage />
      </Switch>
    </div>
  );
}

export default App;
