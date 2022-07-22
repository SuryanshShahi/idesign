import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./Home";

const App = () => {
  return (
    <section>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
    

          <Redirect to="/" />
        </Switch>
      </div>
    </section>
  );
};
export default App;
