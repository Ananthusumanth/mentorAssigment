import {Switch, Route} from "react-router-dom"
import Login from "./Components/Login"
import Home from './Components/Home';
import ProtectRouter from './Components/ProtectRouter';
import './App.css';

function App() {
  return (
    <Switch>
    <Route exact path='/login' component={Login}/>
    <ProtectRouter exact path="/" component={Home} />
  </Switch>
  )
}

export default App;