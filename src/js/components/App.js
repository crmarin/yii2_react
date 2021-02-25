import React from "react";
// import '../../sass/bootstrap.scss'

function App() {
  const click = () => {
    alert();
  };
  return (
    <div>
      <div className="site-index">
        <div className="jumbotron">
          <h1>Congratuladddtions!</h1>

          <p className="lead">
            You have successfully created your Yii-powered application.
          </p>

          <p>
            <a
              className="btn btn-lg btn-success"
              href="http://www.yiiframework.com"
            >
              Get started with Yii
            </a>
          </p>
        </div>
        <div className="body-content">
          <div className="row">
            <div className="col-lg-4">
              <button
                type="button"
                onClick={() => click()}
                className="btn btn-success"
              >
                {" "}
                button
              </button>
            </div>
            <div className="col-lg-4">
              Hellsso! You are using yii2, react, webpack and babel! Congrats!
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <h2>Heading</h2>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>

              <p>
                <a
                  className="btn btn-default"
                  href="http://www.yiiframework.com/doc/"
                >
                  Yii Documentation &raquo;
                </a>
              </p>
            </div>
            <div className="col-lg-4">
              <h2>Heading</h2>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>

              <p>
                <a
                  className="btn btn-default"
                  href="http://www.yiiframework.com/forum/"
                >
                  Yii Forum &raquo;
                </a>
              </p>
            </div>
            <div className="col-lg-4">
              <h2>Heading</h2>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>

              <p>
                <a
                  className="btn btn-default"
                  href="http://www.yiiframework.com/extensions/"
                >
                  Yii Extensions &raquo;
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
