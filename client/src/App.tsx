import React, {useState} from 'react'
import logo from './logo.svg'
import routes from './routes'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Button} from 'antd'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route exact key={route.path} path={route.path}>
            <route.component />
          </Route>
        ))}
        <Button>dd</Button>
      </Switch>
    </Router>
  )
}

export default App
