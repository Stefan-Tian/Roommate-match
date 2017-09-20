import React from "react";

const Landing = () => {
  return (
    <div className="section no-pad-bot">
      <div className="container">
        <h1 className="header center blue-grey-text text-darken-4">
          Roommate Match
        </h1>
        <div className="row center">
          <h5 className="header col s12 light">
            Sign up today and enjoy the best app for you to find your ideal
            roommate
          </h5>
        </div>
        <div className="row center">
          <a
            href=""
            className="btn-large waves-effect waves-ligth grey lighten-2 blue-grey-text text-darken-4"
          >
            GET STARTED
          </a>
        </div>
      </div>
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center grey-blue-text darken-4">
                  <i className="material-icons large">brightness_3</i>
                </h2>
                <h5 className="center">Get a good night sleep</h5>

                <p className="light">
                  We did most of the heavy lifting for you to provide a default
                  stylings that incorporate our custom components. Additionally,
                  we refined animations and transitions to provide a smoother
                  experience for developers.
                </p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center grey-blue-text text-darken-4">
                  <i className="material-icons large">group</i>
                </h2>
                <h5 className="center">Find teammates for League of Legends</h5>

                <p className="light">
                  By utilizing elements and principles of Material Design, we
                  were able to create a framework that incorporates components
                  and animations that provide more feedback to users.
                  Additionally, a single underlying responsive system across all
                  platforms allow for a more unified user experience.
                </p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center grey-blue-text text-darken-4">
                  <i className="material-icons large">search</i>
                </h2>
                <h5 className="center">Simple search engine</h5>

                <p className="light">
                  We have provided detailed documentation as well as specific
                  code examples to help new users get started. We are also
                  always open to feedback and can answer any questions a user
                  may have about Materialize.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
