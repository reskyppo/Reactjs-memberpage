/* eslint-disable jsx-a11y/heading-has-content */
import React, { useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import GuestRoute from "components/Routes/GuestRoute";
import MemberRoute from "components/Routes/MemberRoute";

import Login from "pages/Login";
import Register from "pages/Register";

import NotFound from "pages/404";
import Unauthenticated from "pages/401";

import MyClass from "pages/MyClass";

import { setAuthorizationHeader } from "configs/axios";
import { useDispatch } from "react-redux";
import { populateProfile } from "store/actions/users";
import users from "constans/api/users";

import "assets/css/style.css";

function App() {
  const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });

  const dispatch = useDispatch();

  useEffect(() => {
    let session = null;
    if (localStorage.getItem("BWAMICRO:token")) {
      session = JSON.parse(localStorage.getItem("BWAMICRO:token"));
      setAuthorizationHeader(session.token);
      users.details().then((detail) => {
        dispatch(populateProfile(detail.data));
      });
    }
  }, [dispatch]);

  return (
    <>
      <Router history={history}>
        <Switch>
          <GuestRoute path="/login" component={Login}></GuestRoute>
          <GuestRoute path="/register" component={Register}></GuestRoute>
          <GuestRoute path="/private" component={Unauthenticated}></GuestRoute>
          <MemberRoute exact path="/" component={MyClass}></MemberRoute>
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
