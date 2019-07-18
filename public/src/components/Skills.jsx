import React from 'react';

class Skills extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="tab">
        <h3>
          <img src="./imgs/star.png" className="page-icon" />
          Skills
        </h3>
        <div className="page-content">
          <h5>Languages</h5>
          <ul>
            <li>JavaScript (ES6+)</li>
          </ul>
          <h5>Frameworks</h5>
          <ul>
            <li>React/Redux</li>
          </ul>
          <h5>Dev Ops</h5>
          <ul>
            <li>Docker</li>
          </ul>
          <h5>Databases</h5>
          <ul>
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
          <h5>Miscellaneous</h5>
          <ul>
            <li>Git</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Skills;
