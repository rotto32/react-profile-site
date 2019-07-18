import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="tab">
        <h3>
          <img src="./imgs/telescope.png" className="page-icon" />
          About Me
        </h3>
        <div className="page-content">
          <h5>Hi I'm Rachael</h5>
          <p>I'm a full stack software engineer.</p>
        </div>
      </div>
    );
  }
}

export default Profile;
