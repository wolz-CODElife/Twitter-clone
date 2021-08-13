import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './screens/Home'
import Index from './screens/Index'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" children={<Index />} />
        <Route path="/home" children={<Home />} />
      </Switch>
    </Router>
  )
}

export default App
