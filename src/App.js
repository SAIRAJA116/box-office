import React from 'react';
import {Switch,Route} from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route exact path="/">This is home page</Route>
      <Route exact path="/starred">This is starred</Route>
      <Route>Undefined route This page is not found 404</Route>
    </Switch>
  );
}

export default App;
