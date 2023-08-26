import React from "react"
import { About } from "./pages/about/About"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const App = () => {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route exact path='/' component={About} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </>
  )
}
export default App
