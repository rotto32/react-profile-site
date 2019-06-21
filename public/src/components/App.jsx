import React from "react";
import Page from './Page.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: 'profile-btn'
    }

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    e.preventDefault();
    this.setState({
      content: e.target.id
    });
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    this.setState({
      content: e.target.id
    });
  }

  render() {
    return (
      <div className="page">
        <div className="hero">
          <h1>Rachael Otto</h1>
          <h3>Full Stack Software Engineer</h3>
        </div>

        <nav>
          <button
            type="button"
            onClick={this.clickHandler}
            className="nav-btn"
            id="profile-btn"
          >
            About Me
          </button>
          <button
            type="button"
            onClick={this.clickHandler}
            className="nav-btn"
            id="project-btn"
          >
            Previous Work
          </button>
          <button
            type="button"
            onClick={this.clickHandler}
            className="nav-btn"
            id="skills-btn"
          >
            Skills
          </button>
          <button
            type="button"
            onClick={this.clickHandler}
            className="nav-btn"
            id="contact-btn"
          >
            Contact
          </button>
        </nav>

        <div className="content">
          <Page type={this.state.content} />
        </div>
      </div>
    );
  }
}

export default App;
