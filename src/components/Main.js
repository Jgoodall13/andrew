import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Work from './work/Work.js'


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/work' component={Work}/>
    </Switch>
  </main>
)

export default Main