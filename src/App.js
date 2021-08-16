import React from 'react'
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom'
import Error from './screens/Error'
import Home from './screens/Home'
import Login from './screens/Login'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" children={<Login useHistory={useHistory} />} />
        <Route path="/home" children={<Home />} />
        <Route path="/*" children={<Error />} />
      </Switch>
    </Router>
  )
}

export default App
