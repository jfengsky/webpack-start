import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import express from 'express'
import { createStore, combineReducers} from 'redux'
import { Provider } from 'react-redux'

import layout from '../views/layout'
import App from '../src/components/App'
import initialState from '../src/actions/initialState'
import reducer from '../src/reducers'
const app = express()
app.use('/static', express.static('./dist'))

const store = createStore(reducer)

app.get('*', (req, res) => {
  const context = {}
  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  )
  if(context.url){
    res.writeHead(301, {
      Location: context.url
    })
  } else {
    res.send(layout({title: 'server', content: html, __INITSTATE__:initialState}))
  }
})

const PORT = 3200
app.listen(PORT, ()=> console.log(`start server: http://localhost:${PORT}`))