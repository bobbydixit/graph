import 'normalize.css/normalize.css'

import './base.less'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import createStore from './store'
import App from './containers/App'

const store = createStore()

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
)
