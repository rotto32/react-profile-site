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
          <Projects />
      );
    // eslint-disable-next-line no-else-return
    } else if (this.props.type === 'skills-btn') {
      return (
          <Skills />
      );
    } else if (this.props.type === 'contact-btn') {
      return (
          <Contact />
      );
    } else {
      return (
        <Profile />
      );
    }
  }
}

export default Page;
