import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import ContainerApp from '../pages/ContainerApp/index';

function App() {
  return (
    <Router>
      <Switch>
        <Redirect from="/" exact to="/owner/places" />
        <Route path="/owner/places">
          <ContainerApp className="СontainerApp" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
