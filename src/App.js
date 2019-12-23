import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom"
import Landing from "./pages/landing/Landing"
import User from "./pages/users/User"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route path='/users'>
          <User />
        </Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  )
}

export default App
