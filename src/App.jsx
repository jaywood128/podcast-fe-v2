import React from "react";
import "./App.css";
import styled from "styled-components";
// eslint-disable-next-line no-unused-vars
import ReactDOM from "react-dom";
// eslint-disable-next-line no-unused-vars
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./views/Home";
import VerticalNavBar from "./components/vertical-nav-bar/VerticalNavBar";
import TopBar from "./components/header/TopBarContainer";
// import BodyContainer from "./views/Body/BodyContainer";

const history = createBrowserHistory();

const AppContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  width: 100vw;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: lightcyan;
`;

function App() {
  return (
    <Router history={history}>
      <AppContainer>
        <VerticalNavBar />
        <BodyContainer>
          <TopBar />
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </BodyContainer>
      </AppContainer>
    </Router>
  );
}

export default App;
