import React from "react";
import "./App.css";
import styled from "styled-components";
// eslint-disable-next-line no-unused-vars
import ReactDOM from "react-dom";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { createBrowserHistory } from "history";
// import Home from "./views/Home";
import VerticalNavBar from "./components/vertical-nav-bar/VerticalNavBar";
import TopBar from "./components/header/TopBar";
import ViewContainer from "./views/ViewContainer/ViewContainer";
// const history = createBrowserHistory();

const AppContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  width: 100vw;
`;
const TopBarContentViewContainer = styled.div`
  display: flex;
  background-color: green;
  flex-wrap: wrap;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <VerticalNavBar />
        <TopBarContentViewContainer>
          <TopBar />
          <ViewContainer />
        </TopBarContentViewContainer>
      </AppContainer>
      {/* <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch> */}
    </Router>
  );
}

export default App;
