import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  const [{user},dispatch] = useStateValue();
  //piece of code which runs on based on a given condition
  useEffect(() => {
  const unsubscribe =auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user logged in
        dispatch({
          type: "set_user",
          user: authUser,
        });
      } else {
        //user logged out
        dispatch({
          type: "set_user",
          user: null,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  console.log('User is =>>>',user);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
