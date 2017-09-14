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
            <Link className="grey-text text-lighten-4" to="/login">
              Login
            </Link>
          </li>
        );
      default:
        return (
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        );
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper teal lighten-2 z-depth-4">
          <Link to="/" className="brand-logo grey-text text-lighten-3">
            Roommate Match
          </Link>
          <ul className="right grey-text text-lighten-4">
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
