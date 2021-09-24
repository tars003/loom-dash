import React from "react";
import { Route, Switch } from "react-router-dom";
import Error from "./Error";

export default function App() {
  return (
    <div className="App">
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
    </div>
  );
}
