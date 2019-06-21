import React from "react";
import Profile from './Profile.jsx';
import Projects from './Projects.jsx';
import Skills from './Skills.jsx';
import Contact from './Contact.jsx';

class Page extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    if (this.props.type === 'profile-btn') {
      return (
        <div className='test'>
          <Profile />
        </div>
      );
    }
    if (this.props.type === 'project-btn') {
      return (
        <div>
          <Projects />
        </div>
      );
    }
    if (this.props.type === 'skills-btn') {
      return (
        <div>
          <Skills />
        </div>
      );
    }
    if (this.props.type === 'contact-btn') {
      return (
        <div>
          <Contact />
        </div>
      );
    }
  }
}

export default Page;
