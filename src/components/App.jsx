import React from 'react';
import { ContainerApp } from './container-app/container_app'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

function App() {
  return (
    <Router>
      <Switch>
        <Redirect from = "/" exact to = "/owner/places" />
        <Route path = "/owner/places">
          <ContainerApp className = "СontainerApp"/>
        </Route>
      </Switch>
    </Router> 
  )
}

export default App;