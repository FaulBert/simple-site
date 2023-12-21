/* @refresh reload */
import { lazy } from 'solid-js'
import { render } from 'solid-js/web'
import { Router, Route } from '@solidjs/router'

const Home = lazy(() => import('./views/Home'))
const NotFound = lazy(() => import ('./views/404'))

render(() => (
  <Router>
    <Route path="/" component={Home} />
    <Route path="*404" component={NotFound} />
  </Router>
), document.getElementById('root')!)
