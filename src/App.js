import React from 'react'
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom'
import Home from './screens/Home'
import Login from './screens/Login'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" children={<Login useHistory={useHistory} />} />
        <Route path="/home" children={<Home />} />
      </Switch>
    </Router>
  )
}

export default App
