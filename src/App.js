import React from 'react'
import { Route, Switch } from "react-router-dom";
import LeftNavBar from './Components/Navigation/SideNav/SideNav'
import Error from './Error'
import styled from 'styled-components'

export default function App() {
  return (
    <div className="App">
      <LeftNavBar/>
      <SectionRight>
      <Switch>
          {/* <Route path="/dashboard" exact>
            
          </Route>
          <Route path="/livestatus" exact>
            
          </Route>
          <Route path="/leaderboard" exact>
            
          </Route>
          <Route path="/alerts" exact>
            
          </Route>
          <Route path="/machines" exact>
            
          </Route>
          <Route path="/manage" exact>
            
          </Route>
          <Route path="/export" exact>
            
          </Route> */}
          <Route path="*" component={Error}></Route>
      </Switch>
      </SectionRight>
    </div>
  )
}

const SectionRight = styled.section`
  width:80%;
`
