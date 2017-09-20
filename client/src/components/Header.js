import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <Link className="blue-grey-text text-darken-3" to="/login">
              Login
            </Link>
          </li>
        );
      default:
        return (
          <li>
            <a className="blue-grey-text text-darken-3" href="/api/logout">
              Logout
            </a>
          </li>
        );
    }
  }

  render() {
    return (
      <nav className="grey lighten-2 z-depth-2">
        <div className="container nav-wrapper">
          <Link to="/" className="brand-logo blue-grey-text text-darken-3">
            Roommate Match
          </Link>
          <ul className="right blue-grey-text text-darken-3">
            <li>Start looking</li>
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
