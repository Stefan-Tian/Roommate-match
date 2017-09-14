import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div className="login-page">
        <form className="form grey lighten-3 z-depth-4">
          <div className="login-title">Sign In Options</div>
          <button className="loginBtn loginBtn--facebook">
            <a href="/auth/facebook">Login with facebook</a>
          </button>
          <button className="loginBtn loginBtn--google">
            <a href="/auth/google">Login with google +</a>
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
