import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {routerReducer, ConnectedRouter} from 'react-router-redux'

import App from './components/App'

import reducer from './reducers'

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)
