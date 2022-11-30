import React from 'react';
import Home from './Home';
import Index from './Index';
import NotFound from './NotFound'
export const AppRoutes = () => {
    return (
          <Switch>
          <Route exact path="/">
        </Index>
         </Route>
         <Route exact path="/Home">
        </Home>
         </Route>
         <Route >
        </NotFound>
         </Route>
        </Switch>
    )
}
