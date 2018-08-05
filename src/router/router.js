import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Page1 from '../pages/Page1/Page1'

function getRouter() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/page1">Page1</Link></li>
        </ul>
        <Switch>
          <Route exact path="/" component={ Home }/>
          <Route path="/page1" component={ Page1 }/>
        </Switch>
      </div>
    </Router>
  )
}

export default getRouter
