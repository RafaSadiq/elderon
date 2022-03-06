import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import elderonDetail from "./elderon/elderon-detail";

export default class App extends Component {
  // Make a request for a user with a given ID


  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <NavigationContainer />
            <div className="home-header"></div>
            <h1>Welcome to Elderon</h1>

            <Switch>
              <Route exact path="/" component={Home} />

              <Route exact path="/elderon:slug" component={elderonDetail} />
            </Switch>
          </div>

          

          
        </Router>

      </div>
    );
  }
}
