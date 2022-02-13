import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login" component={Login} />
          <Route exact path="/feed">
            <Header />
            <Feed />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
