/* eslint-disable import/extensions */

import React from 'react';
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
    if (this.props.type === 'project-btn') {
      return (
        <div>
          <Projects />
        </div>
      );
    // eslint-disable-next-line no-else-return
    } else if (this.props.type === 'skills-btn') {
      return (
        <div>
          <Skills />
        </div>
      );
    } else if (this.props.type === 'contact-btn') {
      return (
        <div>
          <Contact />
        </div>
      );
    } else {
      return (
        <div className="test">
          <Profile />
        </div>
      );
    }
  }
}

export default Page;
