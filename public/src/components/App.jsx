import React from 'react';
import Page from './Page.jsx';
import Footer from './Footer.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: 'profile-btn',
    };

    this.clickHandler = this.clickHandler.bind(this);
  }


  clickHandler(e) {
    this.setState({
      content: e.target.id,
    });
  }

  render() {
    return (
      <div className="all-content">
        <div className="hero">
          <h1>Rachael Otto</h1>
          <img src="./imgs/shining.png" className="shining" />
          <h2>Full Stack Software Engineer</h2>
        </div>
        <nav>
          <button
            type="button"
            onClick={this.clickHandler}
            className="nav-btn"
            id="profile-btn"
          >
            <img src="./imgs/telescope-line.png" className="nav-icon" /> About
            Me
          </button>
          <button
            type="button"
            onClick={this.clickHandler}
            className="nav-btn"
            id="project-btn"
          >
            <img src="./imgs/orbit-line.png" className="nav-icon" />
            My Work
          </button>
          <button
            type="button"
            onClick={this.clickHandler}
            className="nav-btn"
            id="skills-btn"
          >
            <img src="./imgs/star-line.png" className="nav-icon" />
            Skills
          </button>
          <button
            type="button"
            onClick={this.clickHandler}
            className="nav-btn"
            id="contact-btn"
          >
            <img src="./imgs/asteroid-line.png" className="nav-icon" />
            Contact
          </button>
        </nav>
        <div className="page">
          <Page type={this.state.content} />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
