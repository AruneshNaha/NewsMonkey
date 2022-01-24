import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  static defaultProps={category: "general"}

  static propTypes = {};

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              NewMonkey
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className={this.props.category === "general"? "nav-link active" : "nav-link"} aria-current="page" to="/">
                    General
                  </Link>
                </li>
                <li className="nav-item" ><Link className={this.props.category === "business"? "nav-link active" : "nav-link"} to="/business">Business</Link></li>
                <li className="nav-item" ><Link className={this.props.category === "entertainment"? "nav-link active" : "nav-link"} to="/entertainment">Entertainment</Link></li>
                <li className="nav-item" ><Link className={this.props.category === "health"? "nav-link active" : "nav-link"} to="/health">Health</Link></li>
                <li className="nav-item" ><Link className={this.props.category === "science"? "nav-link active" : "nav-link"} to="/science">Science</Link></li>
                <li className="nav-item" ><Link className={this.props.category === "sports"? "nav-link active" : "nav-link"} to="/sports">Sports</Link></li>
                <li className="nav-item" ><Link className={this.props.category === "technology"? "nav-link active" : "nav-link"} to="/technology">Technology</Link></li>

              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
