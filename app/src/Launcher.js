import { Switch } from "react-router-dom";
import { BrowserRouter as Router,Route } from "react-router-dom";
import Login from "./Login";
import Admin from "./Routes/Admin";
function Launcher() {
    return (<Router>
                 <Switch>
                <Route exact path='/Login' component={Login}/>
                <Route exact path='/' component={Login}/>
                <Route exact path="/Admin" component={Admin}/>
              </Switch>
          </Router>
);
}

export default Launcher;