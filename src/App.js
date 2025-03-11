import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import { NavbarComponent } from './components';
import { Home, Sukses, NotFound, ApaAja } from './pages'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavbarComponent/>
        <main>
          <Switch>
            <Route path='/' component={Home} exact="true"/>
            <Route path='/sukses' component={Sukses} />
            <Route path='/apa-aja' component={ApaAja} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}
