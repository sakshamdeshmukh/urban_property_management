
import Login from "./Login";
import Quotes from "./Quotes";
import { BrowserRouter as Router, Route} from "react-router-dom";//Router alias name given to BrowseRouter

function ProtectedRoute(props) {

    
   debugger;
    if(window.sessionStorage.getItem("isLoggedIn")=="true" && window.sessionStorage.getItem("user_id")!="" )
    {
        return <Route exact path="/" component={Quotes}></Route>
    }
    else
    {
        return <Route path="/" component={Login}></Route>
    }
}

export default ProtectedRoute;