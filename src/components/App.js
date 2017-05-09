import React, {Component, PropTypes} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Menu from './Menu'
import Home from './Home'
import Api from './Api'
import Modify from './Modify'

const App = props => (
  <div>
    <Menu />
    <Route exact path="/" component={Home} />
    <Route path="/api" component={Api} />
    <Route path="/modify" component={Modify} />
  </div>
)

// export default connect(mapStateToProps)(App)

export default App
