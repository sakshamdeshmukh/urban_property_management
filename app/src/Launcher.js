import { Switch } from "react-router-dom";
import { BrowserRouter as Router,Route } from "react-router-dom";
import Login from "./Login";
function Launcher() {
    return (<Router>
                 <Switch>
                <Route exact path='/Login' component={Login}/>
                <Route exact path='/' component={Login}/>
              </Switch>
          </Router>
);
}

export default Launcher;