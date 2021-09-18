import React from "react";
import styled from "styled-components";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { createBrowserHistory } from "history";
// eslint-disable-next-line no-unused-vars
import Home from "./views/Home";
import VerticalNavBar from "./components/vertical-nav-bar/VerticalNavBar";
import TopBar from "./components/header/TopBarContainer";
import RecentEpisodesContainer from "./components/episode/RecentEpisodesContainer";
// import SignIn from "./views/user-actions/SignIn";
// import Signup from "./views/user-actions/Signup";
// import RecentEpisodesContainer from "./components/episode/RecentEpisodesContainer";
// import BodyContainer from "./views/Body/BodyContainer";

// const history = createBrowserHistory();

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
    <Router>
      <AppContainer>
        <VerticalNavBar />
        <BodyContainer>
          <TopBar />
          <Switch>
            <Route path="/episodes/:podcastTitle/:id/">
              <RecentEpisodesContainer />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </BodyContainer>
      </AppContainer>
    </Router>
  );
}

export default App;
