import React from 'react';

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="tab">
        <h3> <img src="./imgs/orbit.png" className='page-icon' /> My Work</h3>
      </div>
    );
  }
}

export default Projects;
