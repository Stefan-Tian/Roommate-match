import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Login from "./Login";
import Landing from "./Landing";
const MyProfile = () => <h2>My Profile</h2>;
const UserProfile = () => <h2>User Profile</h2>;
const UserList = () => <h2>User List</h2>;

class App extends Component {
  // first finish the ajax request
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={MyProfile} />
            <Route exact path="/users" component={UserList} />
            <Route exact path="/users/profile" component={UserProfile} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
