import React from "react";
import Profile from './Profile.jsx';

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
    })

  }

  render() {
    return (
      <div className="page">
        <div className="hero">
          <h1>Rachael Otto</h1>
          <h3>Full Stack Software Engineer</h3>
        </div>

        <nav>
          <button onClick={this.clickHandler} className="nav-btn" id='profile-btn'>About Me</button>
          <button onClick={this.clickHandler} className="nav-btn" id='project-btn'>Previous Work</button>
        </nav>

        <div className='content'>
          <Profile/>
          
        </div>
      </div>
    );
  }
}

export default App;
