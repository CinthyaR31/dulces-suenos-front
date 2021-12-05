import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Home from "./pages/home";
import Error404 from "./pages/error404";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <DashboardMenu />
        </Route>
        <Route path="/" exact component={Home} />
        <Route path="*" exact component={Error404} />
      </Switch>
    </Router>
  );
}

export default App;
