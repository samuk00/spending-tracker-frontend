import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Frontpage from './components/Frontpage'
import Dashboard from './components/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Frontpage} />
        <ProtectedRoute exact path='/home' component={Dashboard}/>
      </Switch>
    </Router>
  )
}



export default App;
