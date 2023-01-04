// import './src/styles/global.css'

import * as React from "react"
import Layout from "./src/layouts/layout"

// Logs when the client route changes
const onRouteUpdate = ({ location, prevLocation }) => {
  console.log("new pathname", location.pathname)
  console.log("old pathname", prevLocation ? prevLocation.pathname : null)
}

// Wraps every page in a component
const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>
}
export {
    // onRouteUpdate,
    wrapPageElement
  }